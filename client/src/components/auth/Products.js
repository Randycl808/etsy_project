import axios from "axios";
import { ListGroup, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const Products = () => {
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    getSellerProducts();
  }, []);

  const normalizeData = (rawData) => {
    let sellers = rawData.map((p) => p.seller_id);
    let uniqueIds = [...new Set(sellers)];
    let sellerProductData = uniqueIds.map((uid) => {
      let products = rawData.filter((p) => uid == p.seller_id);
      let { first_name, last_name, email, seller_id } = products[0];
      return {
        name: `${first_name} ${last_name}`,
        email: email,
        products: products,
        id: seller_id,
      };
    });
    return sellerProductData;
  };

  const renderRows = (products) => {
    console.log(products);
    return products.map((p) => {
      return (
        <tr key={p.id}>
          <td>{p.name}</td>
          <td>{p.price}</td>
          <td>{p.description}</td>
          <td>{p.category}</td>
        </tr>
      );
    });
  };

  const renderData = () => {
    return sellerProducts.map((seller) => {
      console.log(seller);
      return (
        <ListGroup.Item key={seller.id}>
          <div>
            <h4>
              <u>Seller:</u>
            </h4>
            <h1>{seller.name}</h1>
            <h6>{seller.email}</h6>
            <hr></hr>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
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
    } catch (error) {
      alert("Error occurred getting products");
      console.log(error);
    }
  };
  return (
    <>
      <h1>Products</h1>
      <ListGroup>{renderData()}</ListGroup>
      {JSON.stringify(sellerProducts)}
    </>
  );
};

export default Products;
