import Link from "next/link"

export default function Home(){
  return (
    <div>
    <h1> hello world</h1>
    <Link href='/dynamic-routes/100/12'> 
      about
    </Link>
    </div>
  )
  
}