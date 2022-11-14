
import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';

export default function Productslist({data}) {
    console.log(data)
  return (
   <>
   
   <Header/>
     <div style={{display:"flex",flexWrap:"wrap",background:"#FFAE42"}}>
        {
            data.map((n)=>{
                return(
                    <>
                    
                    <Card style={{ width: '18rem' ,padding:"30px",margin:"20px" ,height:"25em"}} >
      <Card.Img variant="top" src={n.image} style={{width:"150px",height:"150px",marginLeft:"30px"}} />
      <Card.Body >
        <Card.Title style={{color:"black"}}>{n.title}</Card.Title>
        <Link href={"/detailspage/"+n.id} style={{textDecoration:"none"}}>more deatails</Link>
      </Card.Body>
    </Card>
   
                    </>
                )
            })
        }
     </div>
   </>
  )
}
export async function getStaticProps() {
    
    const res = await fetch('https://fakestoreapi.com/products')
    const posts = await res.json()
  
   
    return {
      props: {
        data:posts,
      },
    }
  }