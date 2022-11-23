import React,{useState} from 'react';


import {navbarList} from '../utils/constante'

const Navbar = () => {
  const [sideBAr,setSideBAr]=useState(true)
  const sideBarHandler=(e)=>{
    if(sideBAr){
      const nav=document.getElementById('nav');
      const list=document.getElementById('lists');
      list.className='nav-list sideBarList'
      nav.className='sidebar';
      setSideBAr(false);
      return;
    }
    if(!sideBAr){
      const nav=document.getElementById('nav');
      const list=document.getElementById('lists');
      list.className='nav-list '
      nav.className='navbar';
      setSideBAr(true);
      return;
    }
    
  }
  return (
    <nav id='nav' className='navbar'>
        <button onClick={sideBarHandler}>
        <i id='open' >open</i>
          </button>
          <h1 className='logo'>ABUI</h1>
        <ul id='lists' className='nav-list'>
           {navbarList.map((list,i)=>(
            <li>
              <a href={list.path} key={i} >{list.name}</a>
            </li>
           ))}
        </ul>
    </nav>
  )
}

export default Navbar