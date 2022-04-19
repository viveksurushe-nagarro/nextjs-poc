import { useRouter } from 'next/router'

function BlogDetails() {
    const router = useRouter();
    const { blogId } = router.query;
    return(<>
        <h1>Blog Details {blogId}</h1>
    </>)
}

export default BlogDetails;