import { CldUploadWidget } from 'next-cloudinary';

export async function uploadImage(image) {
  return new Promise((resolve, reject) => {
    const options = {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      uploadPreset: 'your_upload_preset', // Debes crear un upload preset en tu cuenta de Cloudinary
    };

    CldUploadWidget({ options }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.info.secure_url);
      }
    }).open();
  });
}
