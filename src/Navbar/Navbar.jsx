import  style  from "./Navbar.module.css";



const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className="style.navbar__left">
            <p className='navbar__text'>HIDEVA GROUP</p>
        </div>
        <div className="navbar__menu">
            <ul className={style.ul}>
                <li><a className={style.a} href="#">Home</a></li>
                <li><a className={style.a}  href="#">Services</a></li>
                <li><a className={style.a}  href="#">About</a></li>
                <li><a className={style.a}  href="#">Blog</a></li>
                <li><a className={style.a}  href="#">Contact us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar