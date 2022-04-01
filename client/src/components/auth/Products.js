import axios from "axios";
import { ListGroup, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

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

  const renderData = () => {
    return sellerProducts.map((seller) => {
      console.log('seller:', seller);
      return (
        <ListGroup.Item key={seller.id}>
          <div>
            <h1>{seller.name}</h1>
            <p>{seller.email}</p>
            <p>Seller ID: {seller.id}</p>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
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
    } catch (error) {
      alert("Error occurred getting products");
      console.log(error);
    }
  };
  return (
    <>
      <h1>Products</h1>
      <ListGroup>{renderData()}</ListGroup>
      {/* {JSON.stringify(sellerProducts)} */}
    </>
  );
};

export default Products;
