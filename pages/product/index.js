import Link from 'next/link'

function Product() {

    return(<>
        <h1>Prodct list Components</h1>
        <ul>
            <li>
                <Link href='/product/1' passHref>One</Link>
            </li>
            <li>
                <Link href='/product/2' passHref>Two</Link>
            </li>
        </ul>
    </>)
}

export default Product