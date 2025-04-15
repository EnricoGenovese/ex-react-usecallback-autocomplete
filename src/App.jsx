import { useState, useEffect, useCallback } from 'react'
import './App.css'
import debounce from './debounce';

function App() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(debounce(async (query) => {
    if (query.trim() === '') {
      setProducts([]);
      return;
    }
    try {
      const res = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${query}`);
      const data = await res.json();
      setProducts(data)
    } catch (err) {
      console.error(err)
    }
  }, 350), [])

  useEffect(() => {
    fetchProducts(query)
  }, [query])

  return (
    <>
      <h1>Product search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search...'
      />
      <section>
        <ul>
          {products.length > 0 && (products.map((p) => (
            <li key={p.id}>{p.name}</li>
          )))}
        </ul>
      </section>
    </>
  )
}

export default App
