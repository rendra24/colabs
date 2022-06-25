import { useRouter } from 'next/router'

export default function Blog() {
    const router = useRouter()
    const { id } = router.query

    return <p>User: {id}</p>
}