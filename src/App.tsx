import './App.css'
import dataProducts from './data';
import ProductCard from './component/ProductCard';
import Header from './component/Header';
import Nav from './component/Nav';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <section className="section-card">

        {dataProducts.map((product) => <ProductCard key={product.id} product={product} />)}

      </section>
    </>
  )
}

export default App;
