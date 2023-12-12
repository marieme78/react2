import "./App.css";
import product from "./product";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// import picture from "./Images";
export default function App() {
  const firstName =  "mama"

  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <b>Home</b>
              </li>
              <li>
                <b>Product</b>
              </li>
              <li>
                <b>Account</b>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {/* div qui s'affiche sur la page */}
      {/* <div>
     <img src={product.image} alt="monimage" className="collier"></img>
     <div>
       <h2 style={{ fontFamily: "cursive" }}>
         <b>{product.nom}</b>
       </h2>
       <p style={{ fontFamily: "cursive" }}>
         <b>Price: {product.prix}</b>
       </p>
       <p style={{ fontFamily: "cursive" }}>
         <b>Description: {product.description}</b>
       </p>
     </div>
   </div> */}

      <div className="article">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.nom}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Pour plus</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h1 className="hello"> Hello , {firstName>1 ? firstName && <picture/>   : "there"} </h1>
      </div>
    </>
  );
}
