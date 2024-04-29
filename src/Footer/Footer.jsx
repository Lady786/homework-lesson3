import './Footer.module.css'


const Footer = () => {
  return (
    <div className='w-[auto] h-[300px]  m-[auto] bg-[#FDF6E9] flex justify-around items-center'>
<div className="footer__text ">
  <p className='text-[25px]  mt-[-70px]'>HIDEVA GROUP </p>
</div>

  <div className="services text-[20px]">
    <ul>
      <li><a href="#">Services</a></li>
      <li><a href="#">New Builds</a></li>
      <li><a href="#">Renovations</a></li>
      <li><a href="#">Conversions</a></li>
      <li><a href="#">Fit Out</a></li>
    </ul>
  </div>
  <div className="information text-[20px]">
  <ul>
      <li><a href="#">Information</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Contact us</a></li>
      <li><a href="#">Call us</a></li>
      <li><a href="#">Terms of services</a></li>
    </ul>
  </div>
  <div className="adress text-[20px]">
  <ul>
      <li><a href="#">Address</a></li>
      <li><a href="#">Nyeri Town - Nyeri</a></li>
      <li><a href="#">Call us</a></li>
      <li><a href="#">Email us</a></li>
      <li><a href="#">Terms of services</a></li>
    </ul>
  </div>

<div className="footer__icon"></div>
    </div>
  )
}

export default Footer