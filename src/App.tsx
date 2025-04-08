import './App.css'
import dataProducts from './data';
import ProductCard from './component/ProductCard';

function App() {
  return (
    <>
      <section className="section-card">

        {dataProducts.map((product) => <ProductCard key={product.id} product={product} />)}

      </section>
    </>
  )
}

export default App
