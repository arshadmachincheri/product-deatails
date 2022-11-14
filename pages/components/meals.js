import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
export default function Meals({data}) {
    console.log(data)
  return (
    <>
   <div style={{display:"flex",flexWrap:"wrap" ,backgroundColor:"#FFAE42"}}>
        {
            data.map((n)=>{
                return(
                    <>
                    
                    <Card style={{ width: '18rem' ,padding:"30px",margin:"20px" ,height:"20em"}} >
      <Card.Img variant="top" src={n.strCategoryThumb} style={{width:"150px",height:"150px",marginLeft:"30px"}} />
      <Card.Body >
        <Card.Title style={{color:"black",textAlign:"center"}}>{n.strCategory}</Card.Title>
        <Nav.Link href={'/components/productslist'} style={{textAlign:"center"}}>Back</Nav.Link>
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
   
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const posts = await res.json()
  
   
    return {
      props: {
       data: posts.categories,
      },
    }
  }