import "./App.css";
import Description from "./components/Description"
import Price from "./components/Price";
import Name from "./components/Name";
import Header from "./components/Header";
import Image from "./components/Image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function App() {
  return (
    <>
    <Header />
    <Image />
    <Name/>
    <Price/>
    <Description/>
    </>
  );
}
