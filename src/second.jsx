import { useState } from "react";
import './style.css'
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function Second(getelement){
    let{Id,Name,Price,Image,fun} = getelement

    const [likes,setlikes] = useState(true)
    function likeandDislike(){
        setlikes(!likes)
      }
    return(
        <>
     <div className="box">
        <img src={Image} className="image"/>
        <p className="tittle"><b>{Name}</b></p>
        <div className="content">
                        <div>
        <IoStar className="icon8"/><IoStar className="icon8"/>
        <IoStar className="icon8"/><IoStar className="icon8"/>
        <IoStar className="icon8"/>
                        </div>
            <p className="offer"><b>72% OFFER</b></p>
        </div>
        <h6 className="rate"><del>Rs: 4300</del> &nbsp;Rs : {Price} Only/.</h6>
        <div className="content3">
            <h6 className="sizenumber"><b>SIZE :</b></h6>
                <div className="sizenum">
            <h6 className="size">6</h6>
            <h6 className="size">7</h6>
            <h6 className="size">8</h6>
            <h6 className="size">9</h6>
            <h6 className="size">10</h6>
            <h6 className="size">11</h6>
            <h6 className="size">12</h6>
            </div>
        </div>
        <div className="content2">
                <button className="btn3">ADD TO CART</button>
                <button onClick={()=>fun(getelement)} className="btn4">BUY NOW</button>
        </div>
            <div className="iconouter">
           {likes==true?<FaRegHeart onClick={likeandDislike} className="heart"/>:
           <FaHeart onClick={likeandDislike} className="heart"/>} 
            
        </div>
    </div>          
        </>
    )
}