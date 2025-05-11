import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Person name="Aymen" age={38} />
      <Product name="Iphone" price={30000} />
    </>
  );
}

export default App;