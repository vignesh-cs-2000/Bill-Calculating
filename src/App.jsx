import { useEffect, useState } from 'react'
import Second from './second'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import img1 from "./pic1.jpg"
import img2 from "./pic2.jpg"
import img3 from "./pic3.webp"
import img4 from "./pic-4.png"
import img5 from "./pic5.jpg"
import img7 from "./pic7.jpg"
import img8 from "./pic8.jpg"
import img9 from "./pic9.jpg"
import img10 from "./pic10.jpg"
import img11 from "./pic12.jpg"
import img12 from "./pic13.jpg"
import img14 from "./pic14.jpg"

function App() {
  const [count, setCount] = useState(true);
  const [count2, setCount2] = useState(true);
  const [numcount,setnumcount] = useState(0);
  const [boot,setboot] = useState(0);
  const [apparel,setapparel]=useState(0)
  const [papy,setpapy]=useState(0)
  const [cleve,setcleve]=useState(0)
  const [fashion,setfashion]=useState(0)
  const [david,setdavid] =useState(0)
  const [Boutigue,setboutique] =useState(0)
  const [tutes,settutes] =useState(0)
  const [size,setsize] =useState(0)
  const [elite,setelite] =useState(0)
  const [burbery,setburbery] =useState(0)
// console.log(numcount);
  const [Final,setfinal] =useState(0)

  const [toggle,settoggle] = useState('');
  const [searchdata,setsearchdata] = useState();
  const [incress,setincress] = useState(0)

  function clickChange(){
    setCount(!count)
  }
  function clickChange2(){
    setCount2(!count2)
  }
  function getdata(e){
    setfinal(Final+e.Price)
    setincress(incress+1)
    switch(e.Id){
      case 1:
        setnumcount(numcount+1)
        break;
      case 2:
        setboot(boot+1)
        break;
      case 3:
        setapparel(apparel+1)
        break
      case 4:
        setpapy(papy+1)
        break;
      case 5:
        setcleve(cleve+1)
        break;
      case 6:
        setfashion(fashion+1)
        break;
      case 7:
        setdavid(david+1)
        break;
      case 8:
        setboutique(Boutigue+1)
        break;
      case 9:
        settutes(tutes+1)
        break;
      case 10:
        setsize(size+1)
        break;
      case 11:
        setelite(elite+1)
        break;
      case 12:
        setburbery(burbery+1)
        break;
    }
  }
  let data = [
    {
      id : 1,
      name  : "Boot Library Lounge ",
      price : 3460,
      image : img1,
      state : numcount
    },
    {
      id : 2,
      name  : "Footlocker Apparel  ",
      price : 2460,
      image : img2,
      state : boot
    },
    {
      id : 3,
      name  : "Papyrus Bountique   ",
      price : 2863,
      image : img3,
      state : apparel
    },
    {
      id : 4,
      name  : "Cleveland Sneaker   ",
      price : 3264,
      image : img4,
      state : papy
    },
    {
      id : 5,
      name  : "Fashion Shoes Store ",
      price : 4230,
      image : img5,
      state : cleve
    },
    {
      id : 6,
      name  : "David Mack's Shoes  ",
      price : 3460,
      image : img7,
      state : fashion
    },
    {
      id : 7,
      name  : "Mens Shoe Boutigue  ",
      price : 5728,
      image : img8,
      state : david
    },
    {
      id : 8,
      name  : "Henderson Shoe Store",
      price : 1278,
      image : img9,
      state : Boutigue
    },
    {
      id : 9,
      name  : "Tutus & Dance Shoes ",
      price : 728,
      image : img10,
      state : tutes
    },
    {
      id : 10,
      name  : "Mens Shoe Boutigue  ",
      price : 3171,
      image : img11,
      state : size
    },
    {
      id : 11,
      name  : "Elite Stilettos     ",
      price : 5728,
      image : img12,
      state : elite
    },
    {
      id : 12,
      name  : "Burberry Boots      ",
      price : 5728,
      image : img14,
      state : burbery
    },
  ]
  function searchinputdata(event){
     const query = event.target.value.toLowerCase();
      settoggle(query);
      const searchresult = data.filter((item)=>item.name.toLowerCase().includes(query));
      setsearchdata(searchresult);
  }
  return (
    <>
    <div className='navbar'>
      <h1 className='brandname2'><b>Branded</b> <span className='brandname'><b>Shoes Collection</b></span></h1>
      <div className='iconbox'>
      <FaSearch className='icon' onClick={clickChange2}/>
      <IoNewspaperOutline onClick={clickChange} className='icon'/>
      <input onChange={searchinputdata} placeholder='Enter ProductName' className={count2===true?"inputname2":"inputname"}></input>
      <p className='incress'>{incress}</p>
      </div>
    </div>
      <div className='overall'>
      {(toggle==''?   data : searchdata).map((item)=>(
        <Second Id={item.id} fun={getdata} Name={item.name} Price={item.price} Image={item.image}/>
      ))}
      {/* <span className='multi'>X</span> */}
  <div className={count === true ? 'dropdown':'dropdownClick'}>
    <h3 className='margintop'><b>Billing Details :</b></h3>
    <div>
      <table>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
     {data.map((item)=>(
        <tr>
          <td>{item.name}</td>
          <td>{item.state}</td>
          <td><b>{item.price}</b></td>
          <td>{item.state * item.price}</td>
        </tr>
     ))}
     </table>
     {/* <p>{item.name} &nbsp;{item.state}<span className='multi'> X</span> {item.price} ={item.state * item.price}</p> */}
      <div className='line'></div>
      <p><b>Total: &nbsp; {Final} /only</b></p>
      <div className='bottombox'>
        <button className='btn8'>Bill</button>
        <button onClick={clickChange} className='btn8'>Close</button>
      </div>
    </div>
</div>
  </div>
    </>
  )
}
export default App


