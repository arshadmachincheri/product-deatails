import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Header from '../components/Header';
export default function Good({data}) {
  return (
    <>
     <Header/>
   <Card style={{ width: '58rem' ,margin:"100px" ,marginLeft:"200px",paddingBottom:"32px"}}>
      <Card.Img variant="top" src={data.image} style={{width:"300px",height:"300px",position:"relative",left:"327px"}} />
      <Card.Body style={{backgroundColor:"#FF5733",width:"563px",height:"180px",position:"relative",left:"186px",borderRadius:"14px",textAlign:"center"}}>
        <Card.Title>{data.title}</Card.Title>
        <Card.Title>{data.category}</Card.Title>
        <Card.Title>₹{data.price}</Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        <Nav.Link href="/components/productslist">Back</Nav.Link>
      </Card.Body>
    </Card>
    </>
  )
}
export async function getServerSideProps(context) {
   
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.query}`)
    const data = await res.json()
  
 
    return { props: { data: data } }
  }
  