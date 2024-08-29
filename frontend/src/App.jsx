import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
// import AbortControlller from ""

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading , setLoading] = useState(false)
  const [search , setSearch] = useState('')

  useEffect(()=> { 
    const controller = new AbortController()
    ;(async () => { 
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, { 
          signal: controller.signal
        })
        setProducts(response.data)
        console.log(response.data)
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)){ 
          log('Request Canceled', error.message)
        }
        setError(true)
        setLoading(false) 
      }
    })()

    //cleanup
    return () => { 
      controller.abort()
    }
  }, [search])

  return (
    <>
    <h1> Cahi aur API in react </h1>
    <input
    type='text'
    placeholder='search'
    value={search}
    onChange={(e) => setSearch(e.target.value)}/>

    {loading && (<h1> Loading...</h1>)}
    {error && (<h1> something went error</h1>)}
    <h2>Numbers of products are: {products.length} </h2>
    </>
  )
}

export default App
