import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Card';
import List from './components/list';

function App() 
{

  const [item1,setItem] = useState('');
  const [item2,setItem2] = useState('');
  const [item3,setItem3] = useState('');
  const [item4,setItem4] = useState('');
  const [item5,setItem5] = useState('');

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/19')
    .then((res)=>setItem(res.data))
    .catch((err)=>setItem(err))

    axios.get('https://fakestoreapi.com/products/2')
    .then((res)=>setItem2(res.data))
    .catch((err)=>setItem2(err))

    axios.get('https://fakestoreapi.com/products/15')
    .then((res)=>setItem3(res.data))
    .catch((err)=>setItem3(err))

    axios.get('https://fakestoreapi.com/products/9')
    .then((res)=>setItem4(res.data))
    .catch((err)=>setItem4(err))

    axios.get('https://fakestoreapi.com/products/22')
    .then((res)=>setItem5(res.data))
    .catch((err)=>setItem5(err))
  })
  return (
    <>
    <div style={{display:"flex"}}>

      <h3>{item1.title}</h3>
      <h3>{item1.category}</h3>
      <h3>{item1.description}</h3>
      <h3>{item1.price}</h3>

      <img src={item1.image} width="260" /> 

      <Cards title={item1.title} img={item1.image} desc={item1.description} />
      <Cards title={item2.title} img={item2.image} desc={item2.description} />
      <Cards title={item3.title} img={item3.image} desc={item3.description} /> 
       <br />
      <Cards title={item4.title} img={item4.image} desc={item4.description} />
      <Cards title={item5.title} img={item5.image} desc={item5.description} /> 
    </div>
    <List />
    </>
  );
}

export default App;
