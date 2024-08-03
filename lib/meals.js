// lib/meals.js
import cloudinary from 'cloudinary';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { supabase } from './supabase';

const db = sql('meals.db');

// Configurar Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getMealsFromSupabase() {
  const { data, error } = await supabase
    .from('meals')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMealFromSupabase(slug) {
  const { data, error } = await supabase
    .from('meals')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error('Loading meal from Supabase failed');
  }

  return data;
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMealToSupabase(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Verificar si el slug ya existe y generar un slug único si es necesario
  let uniqueSlug = meal.slug;
  let suffix = 1;

  while (true) {
    const { data: existingMeal, error: existingMealError } = await supabase
      .from('meals')
      .select('slug')
      .eq('slug', uniqueSlug)
      .single();

    if (!existingMeal) break;

    uniqueSlug = `${meal.slug}-${suffix}`;
    suffix++;
  }

  meal.slug = uniqueSlug;

  // Obtener extensión y nombre del archivo de imagen
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  // Subir imagen a Cloudinary en la carpeta `comidas`
  const buffer = Buffer.from(await meal.image.arrayBuffer());
  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(
      { public_id: `comidas/${meal.slug}` },
      (error, result) => {
        if (error) {
          reject(new Error('Uploading image to Cloudinary failed!'));
        } else {
          resolve(result);
        }
      }
    ).end(buffer);
  });

  meal.image = uploadResult.secure_url;

  const { data, error } = await supabase
    .from('meals')
    .insert([{ 
      title: meal.title,
      summary: meal.summary,
      instructions: meal.instructions,
      image: meal.image,
      slug: meal.slug,
      creator: meal.creator,
      creator_email: meal.creator_email,
    }]);

  if (error) {
    console.error('Supabase error:', error.message);
    throw new Error(`Saving meal to Supabase failed: ${error.message}`);
  }

  return data;
}
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Obtener extensión y nombre del archivo de imagen
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  // Guardar imagen en `public/images/${fileName}`
  // const filePath = path.join(process.cwd(), 'public', 'images', fileName);


  // fs.writeFileSync(filePath, buffer);

   // Subir imagen a Cloudinary en la carpeta `comidas`
   const buffer = Buffer.from(await meal.image.arrayBuffer());
   const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(
      { public_id: `comidas/${meal.slug}`}, (error, result) => {
      if (error) {
        reject(new Error('Uploading image to Cloudinary failed!'));
      } else {
        resolve(result);
      }
      }
    ).end(buffer);
  });

  meal.image = uploadResult.secure_url;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}