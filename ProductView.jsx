import React from 'react'
import { useState , useEffect , useContext } from 'react'
import { useParams , Link } from 'react-router-dom'
import { AppContext } from './Components/store'
function ProductView() {

const {id} = useParams();

const[productsInfo , setProductsInfo] = useState({});
const myContext = useContext(AppContext);
const {products , updateProducts} = myContext;  

useEffect(()=>{
   if (products.length > 0) {
    const filterProduct = products.find((data)=>data.id == id);
   if (products) {
    setProductsInfo(filterProduct);
   }
   }
} , [])

  return (
    <div>
      <h2>{productsInfo.title}</h2>
      <p>{productsInfo.description}</p>
      <img src={productsInfo.image} alt={productsInfo.title} style={{ width: '200px' }} />
      <p>Price: ${productsInfo.price}</p>
      <Link to="/Product">Back to Products</Link>
    </div>
  );
  
}

export default ProductView
