import React, { useState, useContext } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarContext } from '../AppContext/CarContext';
export default function Header() {

    const { userList ,setPageState,setSelected} = useContext(CarContext);
  return (
    <header>
     
      <div
      
      
      >
        <div  className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)',padding:10 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Arabam.Com</h1>
              <h5 className='mb-4'> Nasıl Devam Edeceğinizi Seçin</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
               onClick={()=>{setPageState("login")}}
                role='button'
                rel='nofollow'
                target='_blank'
              >
              Giriş Yap
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                onClick={()=>{setPageState("menu")}}
                target='_blank'
                role='button'
              >
                  
        Üyeliksiz Devam Et
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                onClick={()=>{setPageState("register")}}
                target='_blank'
                role='button'
              >
         Kayıt Ol
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}