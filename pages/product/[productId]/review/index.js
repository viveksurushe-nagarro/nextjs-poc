import { useRouter } from 'next/router';

function ReviewList () {
    const router = useRouter();
    const { productId } = router.query;
    return (<>
        <h1>Reviews for Product {productId}</h1>
    </>)
}

export default ReviewList;