import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import Navbar from './Pages/Home/Components/Navbar/Navbar';
import Signup from './Pages/Home/Components/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
function App() {

  const User=useSelector(selectUser);

  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      }
      else{
        dispatch(logout());
      }
    })
    return unsubscribe;
},[dispatch])

  const Layout=()=>{ 
    if(User){
      return(
        <Home/>
      )
    }
    else{
      return(
        <>
          <Navbar/>
          <Login/>
        </>
        
      )
    }
  }

  const Router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/single-image",
      element:<Single/>
    }
  ])

  return(
    <RouterProvider router={Router}/>
  )
}

export default App;
