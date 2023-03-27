import React, { useState } from 'react';
// import ModalE from './ModalE';
import Dropdown from 'react-bootstrap/Dropdown';
import './Amallar.css'
import { users } from './Users'
import img8 from './imgs/Notification.png'
import img7 from './imgs/Fill 2.png'
import img9 from './imgs/person-svgrepo-com (2) 1.png'
import img10 from './imgs/Group 73.png'
import img11 from './imgs/lock-svgrepo-com (2) 1.png'
import img12 from './imgs/lock-svgrepo-com (3) 1.png'
import img13 from './imgs/cancel-svgrepo-com (14) 1.png'
import img14 from './imgs/edit-svgrepo-com (2) 1.png'
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

export default function Amallar() {
  
  const[massiv1,Setmassiv1]=useState([...users])
  const[massiv2,Setmassiv2]=useState([...users])
  const[id2,Setid]=useState('')
  const[user3,Setuser]=useState('')
  const[tel4,Settel]=useState('')
  const[qur5,Setqurl]=useState('')
  const[jshr6,Setjshr]=useState('')

  function BasicExample() {

    return (
      <Dropdown>
  
  <Dropdown.Toggle variant="light" id="dropdown-basic">
  <img src={img10} alt="a" />
      </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1"><img src={img11} alt="q" /><span className='text-danger'>Bloklash</span></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><img src={img12} alt="q" /><span className='text-success'>Blokdan chiqarish</span></Dropdown.Item>
          <Dropdown.Item href="#/action-3"><img src={img13} alt="q" /><span className='text-danger'>Sessiyani tugatish</span></Dropdown.Item>
          <Dropdown.Item href="#/action-4"><img src={img14} alt="q" /><span className='text-primary'>Taxrirlash</span></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }



  function Add(){
     
    let currentMassiv =[...massiv1,...massiv2]
    currentMassiv.push({
  id:id2,
  user:user3,
  tel:tel4,
  qurilma:qur5,
  jshr:jshr6
   })
   console.log("l");
  Setid('')
  Setjshr('')
  Setqurl('')
Settel('')
  Setmassiv1(currentMassiv)
  
  }



        
        

function serch(val){
  let curemas=[...massiv2]
  let result=curemas.filter((arr,index)=>{
    return arr.user.toLowerCase().includes(val.toLowerCase())
  })
  Setmassiv1(result)
}
function serchid(val){
  let curemas=[...massiv2]
  let result=curemas.filter((arr,index)=>{
    return arr.id.toLowerCase().includes(val.toLowerCase())
  })
  Setmassiv1(result)
}










  return (
    <div>


      <section>
        <div className="main-top">
        <div className='top'>
           <span className='inp1 top'> <input type="text" placeholder='Search' className='inp1' onInput={(val)=>serch(val.target.value)} /><img src={img7} alt="" /></span>
        <img src={img8} alt="w" />
        <img src={img9} alt="ww" />
        </div>
<h3>ID orqali qidirish</h3>

        <div className="Id">
          <input type="text" placeholder='ID' className='id' onInput={(val)=>serchid(val.target.value)} />
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Qo'shish
</button>
        </div>
        </div>
        <div className="main-bottom">
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Telefon</th>
                <th>JShShIR</th>
                <th>Qurilma</th>
              </tr>
            </thead>
            <tbody>
             {
             
              massiv1.map((arr,index)=>{
                return(
                  <tr key={index}>
                       <td>{arr.id}</td>
                       <td>{arr.user}</td>
                     <td>{arr.tel}</td>
                  <td>{arr.jshr}</td>
                     <td style={{width:'110px'}}>{arr.qurilma} <BasicExample/> </td>
                   </tr>
                )
              })
             }
            </tbody>
          </table>
        </div>
      </section>
     



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text" className='form-control' onInput={(val)=>Setid(val.target.value)} placeholder='Id'/>
               <input type="text" className='form-control my-2' onInput={(val)=>Setuser(val.target.value)} placeholder='User' />
              <input type="text" className='form-control' onInput={(val)=>Settel(val.target.value)} placeholder='Telefon'/>
             <input type="text" className='form-control my-2' onInput={(val)=>Setjshr(val.target.value)} placeholder='Jshshir'/>
             <input type="text" className='form-control'placeholder='Qurilma' onInput={(val)=>Setqurl(val.target.value)} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={Add} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
