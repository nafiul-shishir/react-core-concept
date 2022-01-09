
import './App.css';


function App() {
  
  const nayok = ['Shakib','Tamim', 'Mushfiq','Nakib','Mashrafe','Ashraful','Rubel','Mehedi'];
  const products = [
    {name: 'Photoshop', price: '$9.90/mo'},
    {name: 'Illustrator', price: '$6.60'},
    {name: 'PDF Reader', price: '$3.33'}
  ]

  const nayokName = nayok.map(nayoks => nayoks.name)
  console.log(nayokName);


  return (
    <div className="App">
      <header className="App-header">
        <ProductList name={products[0].name} price={products[0].price} ></ProductList>
        
        
      
        
      </header>
    </div>
  );
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
      <h3> {props.name} </h3>
      <h1> {props.price} </h1>
      
      <button style={{backgroundColor:"#1C6DD0", padding:"5px", borderRadius:"18px" }}> Buy Now </button>
    </div>
  )
}



export default App;
