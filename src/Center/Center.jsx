import './Center.module.css'
import  img1  from "../assets/img1.png";
import  img2  from "../assets/img2.png";
import  img3  from "../assets/img3.png";
import  img4  from "../assets/img4.png";
import  img5  from "../assets/img5.png";
import  img6  from "../assets/img6.png";
import  home2  from "../assets/home2.png";



const Center = () => {
  return (
    <div className='bg-white mt-[-30px]'>
      <div className="cards w-[1200px] h-[590px] m-[auto]  bg-white">
        <div className="top text-center">
          <p className='text-[24px] text-[#EC9706] font-bold  mt-[30px] ' >Services</p>
          <p className='text-[32px]'>Building Dreams, Crafting Realities</p>
        </div>
        <div className="card flex justify-between mt-[30px]">
<div className="card1 w-[380px] h-[406px]  bg-gray-100 rounded-[10px] ">
<img src={img2} alt="" />
<p className='text-[24px] mt-[10px] ml-[10px]'>General Construction</p>
<ul className='ml-[10px] mt-[10px]'>
  <li><a className='text-[18px]' href="#">Windows & Doors Fitting</a></li>
  <li><a href="#">Siding Repairs</a></li>
  <li><a href="#">Plumbing</a></li>
  <li><a href="#">Electrical &Solar Fitting</a></li>
  <li><a href="#">HVAC</a></li>
  <li><a href="#">Remodeling</a></li>
</ul>
</div>
<div className="card1 w-[380px] h-[406px]  bg-gray-100  rounded-[10px]">
<img src={img3} alt="" />
<p className='text-[24px] mt-[10px] ml-[10px]'>Maintenance Services</p>
<ul className='ml-[10px] mt-[10px]'>
  <li><a className='text-[18px]' href="#">New Construction</a></li>
  <li><a href="#">Building Addition</a></li>
  <li><a href="#">Renovation</a></li>
  <li><a href="#">Restoration</a></li>
  <li><a href="#">Rebuilding from Drainage</a></li>
  <li><a href="#">Drainage</a></li>
</ul>
</div>
<div className="card1 w-[380px] h-[406px]  bg-gray-100  rounded-[10px] ">
<img src={img1} alt="" />
<p className='text-[24px] mt-[10px] ml-[10px]'>Consultation Services</p>
<ul className='ml-[10px] mt-[10px]'>
  <li><a className='text-[18px]' href="#">Design & Build</a></li>
  <li><a href="#">Cost analysis</a></li>
  <li><a href="#">Permits & Processes</a></li>
  <li><a href="#">Scheduling</a></li>
  <li><a href="#">Phasing</a></li>
  <li><a href="#">Resource management</a></li>
</ul>
</div>
        </div>
      </div>
      <div className="about w-[auto] h-[752px] bg-[#FDF6E9] pt-[25px] ">
<div className="centerInfo w-[1200px] h-[700px]  m-[auto] flex justify-between items-center  "  >
<img  className="w-[650px] h-[600px] " src={home2} alt="" />
<div className="about__us h-[300px] w-[530px]" >
  <p className='text-[#EC9706] text-[24px]'>About us</p>
  <p className='text-[32px] text-[bold]'>Efficiency, Building, Budget & Time</p>
  <p className='text-18px'>Hideva Group is a team of skilled construction professionals with a passion for building and a 
    commitment to excellence. We provide a range of services, from small-scale renovations to large-scale
     commercial construction. We believe in transparency and communication, and we work closely with our clients
     to ensure their needs are met. Thank you for considering us for your construction needs.</p>
</div>
</div>
      </div>
      <div className="blog w-[1200px] h-[786px] m-[auto] mt-[30px]">
      <div className="cards w-[1200px] h-[786px] m-[auto]  bg-white">
        <div className="top text-center">
          <p className='text-[24px] font-bold mt-[30px] text-[#EC9706] ' >Blog</p>
          <p className='text-[32px] '>Insightful blogs about the construction industry.</p>
        </div>
        <div className="card flex justify-between mt-[30px]">
<div className="card1 w-[380px] h-[580px]  bg-gray-100 rounded-[10px] ">
<img src={img5} alt="" />
<p className='mt-[5px] ml-[5px]'>3 November 2022</p>
<p className=' text-[#EC9706] text-[24px] mt-[15px] ml-[5px]'>What is Minimalist Architecture and Minimal Design Space?</p>
<p className='mt-[5px] ml-[5px]'>Minimalism in architecture is a form that can be characterized using various aspects with the sole aim of reducing clutter and...</p>
<button className="bg-[#EC9706] rounded-xl p-[5px] w-[150px] text-white mt-[20px] ml-[5px]">Read more</button>
</div>
<div className="card1 w-[380px] h-[580px] bg-gray-100 rounded-[10px] ">
<img src={img6} alt="" />
<p className='mt-[5px] ml-[5px]'>5 January 2023</p>
<p className=' text-[#EC9706] text-[24px] mt-[15px] ml-[5px]'>Integrating Technology for Modern Construction</p>
<p className='mt-[5px] ml-[5px]'>In the realm of modern construction, the integration of smart home innovations has emerged as a transformative force...</p>
<button className="bg-[#EC9706] rounded-xl p-[5px] w-[150px] text-white mt-[20px] ml-[5px]">Read more</button>
</div>
<div className="card1 w-[380px] h-[580px]  bg-gray-100 rounded-[10px] ">
<img src={img4} alt="" />
<p className='mt-[5px] ml-[5px]'>24 October 2022</p>
<p className=' text-[#EC9706] text-[24px] mt-[15px] ml-[5px]'>What are the processes involved in putting up a building?</p>
<p className='mt-[5px] ml-[5px]'>The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...</p>
<button className="bg-[#EC9706] rounded-xl p-[5px] w-[150px] text-white mt-[20px] ml-[5px]">Read more</button>
</div>


        </div>
      </div>
      </div>
      <div className="contact w-[1000px] h-[880px]  m-[auto] mt-[30px]">
      <p className='text-[24px] font-bold mt-[30px] text-[#EC9706] text-center ' >Get in Touch</p>
          <p className='text-[32px] text-center '>Reach out to us and lets turn your construction dreams into reality</p>
          <div className="input__info bg-gray-100 w-[100%] h-[700px] mt-[30px] flex flex-col items-center pt-[40px]">
       
      
       <div className="name">
       <p className='text-[25px]'>Name</p>
       <input className='w-[600px] h-[50px] rounded-xl shadow-black p-[10px] text-[20px]' type="text" placeholder='Robiyaxon' />
       </div>
       <div className="email">
        <p className='text-[25px]'>Email</p>
        <input className='w-[600px] h-[50px] rounded-xl shadow-black p-[10px] text-[20px]' type="email" placeholder='robiyaxonisroiolova@gmail.com' />
       </div>
       <div className="message">
        <p className='text-[25px]'>Message</p>
        <input className='w-[600px] h-[400px] rounded-xl shadow-black text-[20px]'   type="text" />
       </div>
          </div>
      </div>
    </div>
  )
}

export default Center