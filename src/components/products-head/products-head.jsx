import { Fragment } from "react"
import { Form, InputGroup } from "react-bootstrap"
import PropTypes from "prop-types"


const ProductsHead = ({search , setSearch , category , setCategory , setCheck , check }) => {
  return (
    <Fragment >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">
          <button onClick={()=>setCheck(!check)} className="btn btn-primary me-1" >
            Desc/Asc
          </button>
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
            <option>All</option>
            <option>Technology</option>
            <option>Foot</option>
            <option>Sport</option>
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    </Fragment>
  )
}


ProductsHead.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  category: PropTypes.string,
  setCategory: PropTypes.func,
  setCheck :PropTypes.func,
  check: PropTypes.bool
}

export default ProductsHead