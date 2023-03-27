import React from 'react'
import './Statistika.css'
import img7 from './imgs/Fill 2.png'
import img8 from './imgs/Notification.png'
import img9 from './imgs/person-svgrepo-com (2) 1.png'
import img10 from './imgs/Group 71.png'
import img12 from './imgs/Group 71 (1).png'
import img13 from './imgs/Group 2535608.png'
import img11 from './imgs/Group (3).png'
export default function Statistika() {
  return (
    <div className='stat m-auto'>
        <div className='top'>
           <span className='inp1 top'> <input type="text" placeholder='Search' className='inp1' /><img src={img7} alt="" /></span>
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        </div>
        <h3  style={{margin:'50px 20px'}}>Ro’yxatdan o’tanlar</h3>
        <div className='ruyhat top'>
   <img src={img10} alt="" />
   <span style={{color: "#325ECD",fontSize:'70px',margin:'0 170px'}}>1 712 001  </span>
<img src={img11} alt="i" />
        </div>
        <div className='d-flex row mt-3'>
           <div className="card col-4 text-center ">
           <div className="p-1">
           <div className='d-flex align-items-center'><span>Faol foydalanuvchilar</span><img src={img12} alt="" /></div>
            <h1>1.5 mln</h1>
<div className=''><img src={img13} alt="" /><span className='text-primary'>Batafsil</span></div>
          </div>
           </div>
           <div className="card col-4 text-center ">
           <div className="p-1">
           <div className='d-flex align-items-center'><span>Shaxsini tasdiqlagan</span><img src={img12} alt="" /></div>
            <h1>625.1k</h1>
<div className=''><img src={img13} alt="" /><span className='text-primary'>Batafsil</span></div>
          </div>
           </div>
           <div className="card col-4 text-center ">
           <div className="p-1">
           <div className='d-flex align-items-center'><span>Shubhali foydalanuvchi</span><img src={img12} alt="" /></div>
            <h1>5.1k</h1>
<div className=''><img src={img13} alt="" /><span className='text-primary'>Batafsil</span></div>
          </div>
           </div>
           <div className="card col-4 text-center ">
           <div className="m-3">
           <div className='d-flex align-items-center'><span>Faol bo’lmagan </span><img src={img12} alt="" /></div>
            <h1>25.1k</h1>
<div className=''><img src={img13} alt="" /><span className='text-primary'>Batafsil</span></div>
          </div>
           </div>
           <div className="card col-4 text-center ">
           <div className="p-1">
           <div className='d-flex align-items-center'><span>Soliq xodimlari</span><img src={img12} alt="" /></div>
            <h1>2.1k</h1>
<div className=''><img src={img13} alt="" /><span className='text-primary'>Batafsil</span></div>
          </div>
           </div>
           <div className="card col-4 text-center ">
           <div className="p-1">
           <div className='d-flex align-items-center'><span>Yuklab olingan</span><img src={img12} alt="" /></div>
            <h1>1.7 mln</h1>
<div className=''><img src={img13} alt="" /><span className='text-primary'>Batafsil</span></div>
          </div>
           </div>
          
          
        </div>
    </div>
  )
}
