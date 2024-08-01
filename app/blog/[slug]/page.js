import Link from "next/link"

const blogPostPage = ({ params }) => {
  return (
    <main>
      <h1>blogPostPage</h1>
      <p>{params.slug}</p>

    </main>

  )
}

export default blogPostPage