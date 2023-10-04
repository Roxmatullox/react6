import PropTypes from "prop-types"
import { Fragment } from "react";
import { Button, Card } from "react-bootstrap";

const AllProducts = ({products,DeleteProduct, EditProduct , search , category, check}) => {
  let NewProducts = products.filter((el)=>el.name.toLowerCase().includes(search))
  if (category !== "All") {
    NewProducts = NewProducts.filter((el)=>el.category === category)
  }

  if (check) {
    let l = NewProducts.map((el)=>{
      return el.price
    })

    l.map((el)=>{
      NewProducts.map((el1)=>{
        if (el1 == el) {
          console.log(el);
        }
      })
    })

  }
  return (
    <Fragment >
      {NewProducts.map((el)=>(
        <Card key={el.id}>
        <Card.Body>
          <Card.Title>{el.name}  ||            Mavjud:  {el.quantity}</Card.Title>
          <Card.Text>
            {el.category}
            <br />
            <br />
            {el.description} 
          </Card.Text>
          <Button variant="primary">{el.price} $</Button>
          <Button onClick={()=>DeleteProduct(el.id)} variant="danger">Delete</Button>
          <Button onClick={()=>EditProduct(el.id)} variant="primary">Edit</Button>
        </Card.Body>
      </Card>
      ))}
    </Fragment>
  )
}

AllProducts.propTypes = {
  products:PropTypes.array,
  DeleteProduct:PropTypes.func,
  EditProduct:PropTypes.func , 
  search : PropTypes.string,
  category : PropTypes.string,
  check: PropTypes.bool
}

export default AllProducts