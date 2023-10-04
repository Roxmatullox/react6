import { Fragment, useState } from "react"



import "../index.css"
import AddProducts from "../components/add-products/add-product"
import ProductsHead from "../components/products-head/products-head"
import AllProducts from "../components/all-products/all-products"
import { v4 } from "uuid"

const Home = () => {
  const [products , setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [
    {
      id:1,
      name:"Apple",
      price:1200,
      quantity:10000,
      description:"Red apple",
      category:"Food" 
    },
    {
      id:2,
      name:"Banana",
      price:1200,
      quantity:10000,
      description:"Yellow banana",
      category:"Food" 
    },
    {
      id:3,
      name:"Tv",
      price:1200,
      quantity:10000,
      description:"Samsung TV",
      category:"Technology" 
    },
  ])

  const [product,setProduct] = useState({
    name:"",
    price:"",
    quantity:"",
    description:"",
    category:"Technology", 
  })

  const DeleteProduct = (id) => {
    let confir = confirm("Bu product ochirilsinmi?")
    if (confir) {  
      let r = products.filter((el)=> el.id !== id)
      localStorage.setItem("products" , JSON.stringify(r))
      setProducts(r)
    }
  }


  const [category , setCategory] = useState("All")


  const [selected,setSelected] = useState(null) 


  const EditProduct = (id) =>{
    let r
    setSelected(id)
    products.map((el)=>{
      if (el.id === id) {
        r = el
      }
    })
    setProduct(r)
  }


  const handleChange = (e) =>{
    setProduct({...product ,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newProduct = {...product, id:v4()}
    let r
    if (selected === null) { 
      console.log(newProduct);
      r = [...products , newProduct]
    } else if (selected !== null) {
      r = products.map((el)=>{
         if (el.id === selected) {
          return product
        } else {
          return el
        }
      })
    }
    
    localStorage.setItem("products" , JSON.stringify(r))
      setProducts(r)
      setProduct({
        name:"",
        price:"",
        quantity:"",
        description:"",
        category:"Technology", 
      })
    
  }


  const [search , setSearch] = useState("")
  const [check , setCheck] = useState(false)


  return (
    <Fragment >
      <div className="products">
        <section>
          <div className="add-product">
            <AddProducts product={product} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </section>
        <section>
          <div className="products-head" >
            <ProductsHead category={category} check={check} setCheck={setCheck} setCategory={setCategory} search={search} setSearch={setSearch} />
          </div>
          <div className="all-products">
            <AllProducts check={check} category={category} products={products} search={search} DeleteProduct={DeleteProduct} EditProduct={EditProduct} />
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default Home