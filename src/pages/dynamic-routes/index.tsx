//extract the route parameter
import { useRouter } from "next/router"

export default function ProductDetail(){
    const router = useRouter()  // this hook returns a router object and I can access the query parameter objects
    const productId = router.query.id
    const lang = router.locale
    return <h1> product {productId} {lang}</h1>
}