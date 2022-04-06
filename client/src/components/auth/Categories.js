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
      <div className="mainbox box1">
        <Table
          striped
          bordered
          hover
          className=" box1  table table-striped table-hover "
        >
          <thead className="Bgc">
            <tr key={filteredCategories.id} className="Bgc ">
              <th>Products</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((c) => (
              <tr key={c.id}>
                <td className="">{c.description}</td>
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
