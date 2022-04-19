import { useRouter } from 'next/router';
import Link from 'next/link';

function ProductItem() {
    const router = useRouter();
    const { productId } = router.query;
    return (<>
        <h1>Product Item Details {productId}</h1>
        <ul>
            <li>
                <Link href={`/product/${productId}/review/1`} passHref>One</Link>
            </li>
            <li>
                <Link href={`/product/${productId}/review/2`} passHref>Two</Link>
            </li>
        </ul>
    </>)
}
export default ProductItem;