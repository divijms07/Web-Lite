import React from 'react'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import Add from './pages/add/Add';
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import MyGigs from './pages/myGigs/MyGigs';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import './App.scss';
  


function App() {

  const Layout = () => {
    return (
      <div className="app">

      <Navbar />
      <Outlet />
      <Footer />
      
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      //Sub-Pages
      children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/gig/:id",
        element:<Gig/>
      },  
      {
        path:"/gigs",
        element:<Gigs/>
      },  
      {
        path:"/orders",
        element:<Orders/>
      },  
      {
        path:"/myGigs",
        element:<MyGigs/>
      },  
      {
        path:"/add",
        element:<Add/>
      },    
      {
        path:"/messages",
        element:<Messages/>
      },
      {
        path:"/message/:id",
        element:<Message/>
      }, 
      ]
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
      

    </div>
  )
}

export default App
