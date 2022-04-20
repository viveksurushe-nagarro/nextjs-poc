import Link from 'next/link'

function BlogList() {

    return (<>
        <h3>Blog List</h3>
        <ul>
            <li>
                <Link href='/blog/1' passHref>One</Link>
            </li>
            <li>
                <Link href='/blog/2' passHref>Two</Link>
            </li>
        </ul>
    </>)
}

export default BlogList;