import  header  from "./Header.module.css";
import  home  from "../assets/home.png";

const Header = () => {
  return (
    <div className={header.main}>
 <div className={header.main__text}>
<p className="text-xl text-red-600">We are Hideva Group</p>
<h1 className="font-bold text-6xl">Design and Build Contractor</h1>
<p className="text-xl">With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship</p>
<button className="bg-[#EC9706] rounded-xl p-[5px] w-[150px] text-white">Get a quote</button>
 </div>
 <div className={header.main__photo}>

 <img  src={home} alt="" />
 </div>
    </div>
  )
}

export default Header