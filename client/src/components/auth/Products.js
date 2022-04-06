import axios from "axios";
import { Card, ListGroup, Table, Button, Row, Col, Container, CardGroup } from "react-bootstrap";
import {useEffect,useState, useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Products = () => {
  
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    getSellerProducts();
  }, []);

  const normalizeData = (rawData) => {
    // Return all seller id's from api call in a new array
    let sellers = rawData.map((p) => p.seller_id);
    // store unique seller id's in a new array using ... and Set
    let uniqueIds = [...new Set(sellers)];
    // Search through each unique id
    let sellerProductData = uniqueIds.map((uid) => {
      // Filter out products that belong to seller
      let products = rawData.filter((p) => uid == p.seller_id);
      // Get seller info from first product
      let { first_name, last_name, email, seller_id } = products[0];
      // Return an organized object with custom data display
      return {
        name: `${first_name} ${last_name}`,
        email: email,
        products: products,
        id: seller_id,
      };
    });
    // Return the organized object
    return sellerProductData;
  };

  const renderRows = (products) => {
    console.log('product:', products);
    return products.map((p) => {
      return (
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td>{p.price}</td>
          <td>{p.description}</td>
          <td>{p.category}</td>
        </tr>
      );
    });
  };
  let auth = useContext(AuthContext)
  if(!auth.user) {
  return <p>fgsfd</p>}

  const renderData = () => {
    return sellerProducts.map((seller) => {
      console.log('seller:', seller);
      return (
        <ListGroup.Item key={seller.id}>
          <div>
           
            <h4>
              <button className="button2 Card">Seller:</button>
            </h4>
            <h1>{seller.name}</h1>
            <h6>{seller.email}</h6>
            <hr></hr>
          </div>
          <Table striped bordered hover variant="box1 table table-striped table-hover ">
            <thead className="Bgc">
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>{renderRows(seller.products)}</tbody>
          </Table>
        </ListGroup.Item>
      );
    });
  };

  const getSellerProducts = async () => {
    try {
      let res = await axios.get("/api/products");
      let normalizedSellerProducts = normalizeData(res.data);
      setSellerProducts(normalizedSellerProducts);
      console.log(normalizedSellerProducts)
    } catch (error) {
      alert("Error occurred getting products");
      console.log(error);
    }
  };
  return (
    <>
      <h1 className=" headbar header  text-white" >Products</h1>
      <Container  className="justify-content">
      <Card style={{ width: '40rem'}} className="text-center m-4 col-sm">
  <Card.Header><h2>WELCOME HOME!</h2></Card.Header>
  <Card.Body>
    <Card.Title><h2>{auth.user.email} </h2></Card.Title>
    <Card.Text>
      Discover more products that you'll love
    </Card.Text>
          <Button className="button2" href='/categories'>Search Products</Button>
  </Card.Body>
</Card>
      </Container>
      <ListGroup>{renderData()}</ListGroup>
      {/* {JSON.stringify(sellerProducts)} */}
    </>
  );
};

export default Products;
