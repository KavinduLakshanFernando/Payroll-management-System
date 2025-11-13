import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div>
      <h1 className=" text-3xl font-bold text-blue-600">Hellow PayLoard System </h1>
      <button onClick={() => navigate('/navbar')}>Go To Dashboard</button>
      <Outlet />
    </div> 
    </>
    
  )
}

export default Home