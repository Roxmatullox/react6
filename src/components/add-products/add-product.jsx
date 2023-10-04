import { Button, Form, FormGroup, Row } from "react-bootstrap"
import PropTypes from "prop-types"


const AddProducts = ({handleChange , product , handleSubmit}) => {
  return (
    
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={product.name}
            onChange={handleChange}
            required
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={product.price}
            onChange={handleChange}
            required
            type="number"
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            value={product.quantity}
            onChange={handleChange}
            required
            type="number"
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={product.description}
            onChange={handleChange}
            required
            type="text"
          />
        </Form.Group>
        <FormGroup controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Default select example" onChange={handleChange} value={product.category}>
            <option >Technology</option>
            <option >Foot</option>
            <option >Sport</option>
          </Form.Select>
        </FormGroup>
      </Row>
      <Button type="submit">Add.</Button>
    </Form>

  )
}

AddProducts.propTypes = {
  handleChange:PropTypes.func,
  handleSubmit:PropTypes.func,
  product:PropTypes.object,

}

export default AddProducts