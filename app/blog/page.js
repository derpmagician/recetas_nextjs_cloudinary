import Link from "next/link"

const blogPage = () => {
  return (
    <main>
      <h1>blogPage</h1>
    <p><Link href="/blog/post-1">post-1</Link></p>
    <p><Link href="/blog/post-2">post-2</Link></p>
    </main>

  )
}

export default blogPage