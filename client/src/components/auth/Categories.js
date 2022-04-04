import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Form, Table } from "react-bootstrap";

const Categories = () => {
  const [{ data: products, loading, error }] = useAxios("/api/products");

  const [filteredCategories, setFilterCategories] = useState(null);
  if (error) return <p>Error occured</p>;
  if (loading) return <p>loading</p>;

  const getUniqueCategories = () => {
    return products.reduce((acumm, p) => {
      if (!acumm.includes(p.category)) {
        acumm.push(p.category);
      }
      return acumm;
    }, []);
  };

  const handleSelect = (event) => {
    let selectedCategory = event.target.value;

    setFilterCategories(
      products.filter((p) => p.category === selectedCategory)
    );
  };

  const renderSelect = (categories) => {
    console.log(categories);
    return (
      <div key={categories.id} className="selectBar">
        <Form.Select
          defaultValue=""
          label="Select"
          onChange={handleSelect}
          aria-label="Select Category"
        >
          <option value="" disabled hidden>
            Please Choose...
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </div>
    );
  };

  const getSelect = () => {
    let uniqueCategories = getUniqueCategories();
    return renderSelect(uniqueCategories);
  };

  const renderFilteredCategoryProperties = () => {
    if (!filteredCategories) {
      return <h3>Please Choose a Category to continue</h3>;
    }

    return (
      <div className="mainbox">
        <Table striped bordered hover>
          <thead>
            <tr key={filteredCategories.id} className="Bgc">
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((c) => (
              <tr key={c.id}>
                <td className="">{c.category}</td>
                <td className="">{c.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <div>
      <h1 className="App header headbar text-white">Categories</h1>
      {getSelect()}
      {renderFilteredCategoryProperties()}
    </div>
  );
};

export default Categories;

//import axios from "axios";
// import { ListGroup, Table } from "react-bootstrap";
// import { useEffect, useState } from "react";

// const Categories = () => {
//   const [sellerProducts, setSellerProducts] = useState([]);

//   useEffect(() => {
//     getSellerProducts();
//   }, []);

//   const normalizeData = (rawData) => {
//     let sellers = rawData.map((p) => p.seller_id);
//     let uniqueIds = [...new Set(sellers)];
//     let sellerProductData = uniqueIds.map((uid) => {
//       let products = rawData.filter((p) => uid == p.seller_id);
//       let { first_name, last_name, email, seller_id, category } = products[0];
//       return {
//         name: `${first_name} ${last_name}`,
//         email: email,
//         products: products,
//         id: seller_id,
//         category: category,
//       };
//     });
//     return sellerProductData;
//   };

//   const renderRows = (products) => {
//     console.log(products);
//     return products.map((p) => {
//       return (

//         <tr key={p.id}>
//             <td className="datarow">{p.category}</td>

//         </tr>
//       );
//     });
//   };

//   const renderData = () => {
//     return sellerProducts.map((seller) => {
//       console.log(seller);
//       return (
//         <ListGroup.Item key={seller.id}>

//                 <div className="datarow ">
//           <Table striped bordered hover >

//               <tbody>{renderRows(seller.products)}</tbody>

//           </Table>
//                 </div>
//         </ListGroup.Item>
//       );
//     });
//   };

//   const getSellerProducts = async () => {
//     try {
//       let res = await axios.get("/api/products");
//       let normalizedSellerProducts = normalizeData(res.data);
//       setSellerProducts(normalizedSellerProducts);
//     } catch (error) {
//       alert("Error occurred getting products");
//       console.log(error);
//     }
//   };
//   return (
//     <div className="Bgc">
//       <div className="App headbar text-white">
//         <h1 className="header headbar">Categories</h1>
//         </div>
//       <ListGroup>{renderData()}</ListGroup>
//       {JSON.stringify(sellerProducts)}
//     </div>
//   );
// };

// export default Categories;
