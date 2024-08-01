const blogPostPage = ({ params }) => {
  return (
    <main>
      <h1>blogPostPage</h1>
      <p>{params.slug}</p>

    </main>

  )
}

export async function getStaticPaths() {
  const paths = slugs.map(slug => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export default blogPostPage