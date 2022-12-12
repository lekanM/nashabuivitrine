import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'


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
    <header id='header'>
    <nav id='nav' className='navbar'>
        <button className='btn' onClick={sideBarHandler}>
        <span id='open' >{
          sideBAr?<MenuIcon/>:<CloseIcon/>
        }</span>
          </button>
          <a href='#header' className='logo'><img src="images/logo.png" alt="logo" /></a>
        <ul id='lists' className='nav-list'>
           {navbarList.map((list,idx)=>(
            <li key={idx}>
              <a href={list.path} >{list.name}</a>
            </li>
           ))}
        </ul>
    </nav>
     <div className='home-page'>
     <section>
      <h3>Hi,</h3>
      <div className="animation-container">
      <ul className='animeul'>
        <li>m'nash ABUI</li>
        <li>Paint artist</li>
      </ul>
      </div>
     </section>
 </div>
 </header>
    
  )
}

export default Navbar