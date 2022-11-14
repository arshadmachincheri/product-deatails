import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
export default function ProductsId() {
    const[items,setitems]=useState([])
    console.log("items",items)
    const router=useRouter()
    const productsid=router.query.productsid;
   async  function foundproductid(){
    if(productsid){
        const response=await fetch(`https://fakestoreapi.com/products/${productsid}`)
        const data= await response.json()
        setitems(data)
    }
       

    }
    useEffect(()=>{
        foundproductid()
    },[])
  return (
    <>
   <Card style={{ width: '58rem' ,margin:"100px" ,marginLeft:"200px",paddingBottom:"32px"}}>
      <Card.Img variant="top" src={items.image} style={{width:"300px",height:"300px",position:"relative",left:"327px"}} />
      <Card.Body style={{backgroundColor:"#FF5733",width:"563px",height:"180px",position:"relative",left:"186px",borderRadius:"14px",textAlign:"center"}}>
        <Card.Title>{items.title}</Card.Title>
        <Card.Title>{items.category}</Card.Title>
        <Card.Title>₹{items.price}</Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        {/* <a href="/components/productslist" style={{color:"black",textDecoration:"none",display:"block"}}>Back</a> */}
        <Nav.Link href="/components/productslist">Back</Nav.Link>
      </Card.Body>
    </Card>
  
    </>
  )
}
