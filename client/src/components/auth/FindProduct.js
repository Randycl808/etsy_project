import axios from "axios";
import { Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const FindProduct = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  const [sellers, setSellers] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState ([])

  useEffect(() => {
    getSellers()
    getProducts()
  }, [])

  const getSellers = async () => {
    try {
      let res = await axios.get('/api/sellers')
      console.log('s.res.data', res.data)
      setSellers(res.data)
    } catch (err) {
      alert('err in getSellers')
      console.log(err)
    }
  }

  const getCategories = (id) => {
    console.log('id:', id)
    console.log('products:', products)
    // look through products, check seller id, if seller id matches, push into new array
    let category = products.filter((p) => p.seller_id == id)
    console.log('category:', category)
    setCategories(category)
    let cat = category.map((c) => c.category)
    let uniqueCategories = [... new Set(cat)]
    setCategory(uniqueCategories)
  }

  const getProduct = (category) => {
    console.log('categories:', categories)
    console.log('category:', category)
    let product = categories.filter((c) => c.category == category)
    console.log('final product:', product)
    setProduct(product)
  }

  const getProducts = async () => {
    try {
      let res = await axios.get('/api/products/')
      console.log('c.res.data:', res.data)
      setProducts(res.data)
    } catch (error) {
      alert('Error in getCategories')
      console.log(error)
    }
  }

  const renderSellerSelect = () => {
    return (
      <Form.Select label='Select' defaultValue="" onChange = {e =>{getCategories(e.target.value)}} aria-label="Select Seller">
        <option hidden>Choose A Seller...</option>
        {sellers.map((seller) => (
          <option key={seller.id} value={seller.id}>{seller.first_name} {seller.last_name}</option>
        ))}
      </Form.Select>
    );
  };

  const renderCategorySelect = () => {
    console.log('categories:', categories)
    return (
      <Form.Select label='Select' defaultValue="" onChange= {e =>{getProduct(e.target.value)}} aria-label="Select Category">
        <option hidden>Choose A Category...</option>
        {category.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </Form.Select>
    );
  };

  const renderProducts = () => {
    if (!product) {
      return <p>product undefined this mean you haven't select a seller</p>
    }
    if(product.length === 0){
      return <p>no products match desired category for selected buyer</p>
    }
    return product.map((p)=>{
      return(
        <Table key={p.id} striped bordered hover variant="box1 table table-striped table-hover ">
          <thead className="Bgc">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.description}</td>
              </tr>
            </tbody>
        </Table>
      )
    })
  }

  return (
    <div>
      <div className="headbar">
        <h1 className="App header headbar text-white">
          Find Product
        </h1>
      </div>
      <div>
        {sellers && renderSellerSelect()}
        {categories && renderCategorySelect()}
        {renderProducts()}
      </div>
    </div>
  );
};

export default FindProduct
