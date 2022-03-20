import logo from "./logo.svg";
import "./App.css";

function App() {
  const productsList = [
    { Name: "Laptop", Price: "144000" },
    { Name: "I Phone", Price: "94000" },
    { Name: "Watch", Price: "1000" },
    { Name: "Realme 2pro", Price: "20000" },
    { Name: "Earphone", Price: "70" },
  ];
  return (
    <div className="App">
      {productsList.map((product) => (
        <Products Name={product.Name} Price={product.Price}></Products>
      ))}
      {/* <Products Name=" Laptop"  Price=" 430000"></Products> */}
    </div>
  );
}

function Products(props) {
  return (
    <div className="products">
      <h2>Name: {props.Name}</h2>
      <p>Price: {props.Price}</p>
    </div>
  );
}

export default App;
