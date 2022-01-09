import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  
  
  const nayok = ['Shakib','Tamim', 'Mushfiq','Nakib','Mashrafe','Ashraful','Rubel','Mehedi'];
  const products = [
    {name: 'Photoshop', price: '$9.90/mo'},
    {name: 'Illustrator', price: '$6.60'},
    {name: 'PDF Reader', price: '$3.33'}
  ]

  


  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Posts></Posts>
      
        <ul>
          { nayok.map(nayoksname => <li> {nayoksname}</li>)}
         
        </ul>
        {products.map(pd => <ProductList>product={pd}</ProductList>)}
        <ProductList name={products[0].name} price={products[0].price} ></ProductList>
        
        
      
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease =() => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1)
  return(
    <div>
      <h1> Count : {count} </h1>
      <button onClick={handleDecrease}> decrease </button>
      <button onClick={handleIncrease}> Increase </button>
    </div>
  )
}

function ProductList(props){
  const ProductStyle = {
    border: "2px Solid #4FBDBA",
    borderRadius: "5px",
    Padding:"",
    backgroundColor: "lightgray",
    height: '300px',
    width: '300px',
    float: "left"

  }
  return(
    <div style={ProductStyle}>
      <h3>  {props.name} </h3>
      <h1>  {props.price} </h1>
      
      <button style={{backgroundColor:"#1C6DD0", padding:"5px", borderRadius:"18px" }}> Buy Now </button>
    </div>
  )
}

function Posts(){
  const [post,setPost] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  },[])

  return(
    <div>
      <h1> Numbers Of People Post: {post.length} </h1>
      <h4> 
        {
          post.map(posts => <p> {posts.id}, {posts.title}</p>)
        }

      </h4>
    </div>
  )
}



export default App;
