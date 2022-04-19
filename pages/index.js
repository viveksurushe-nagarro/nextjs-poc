import Link from 'next/link'

export default function Home() {
  return (
   <>
    <h1>Home page</h1>
    <div>
      <Link href="/about">
        <a style={{marginRight: '20px'}}>About</a>
      </Link>
      <Link href="/profile">
        <a style={{marginRight: '20px'}}>Profile</a>
      </Link>
      <Link href="/blog">
        <a style={{marginRight: '20px'}}>Blog</a>
      </Link>
      <Link href="/product">
        <a style={{marginRight: '20px'}}>Product</a>
      </Link>
    </div>
   </>
  )
}
