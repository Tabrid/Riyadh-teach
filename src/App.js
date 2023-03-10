import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import AddReview from './Components/AddReview/AddReview';
import AllService from './Components/AllService/AllService';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Blog from './Components/Blog/Blog';
import PrivateRoute from './Route/PrivateRoute';


function App() {
 const router = createBrowserRouter([
{
  path:'/',
  element: <Main></Main>,
  children: [
   
    {
      path: '/login',
      element : <Login></Login>
    },
    {
      path: '/',
      element : <Home></Home>
    },
    {
      path: '/review',
      element : <PrivateRoute><Review></Review></PrivateRoute>
    },
    {
      path: '/allservice',
      element : <AllService></AllService>
    },
    {
      path: '/services/:id',
      element : <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
      loader : ({params}) => fetch(`https://service-sigma.vercel.app/services/${params.id}`)
    },
    {
      path: '/addreview',
      element : <PrivateRoute><AddReview></AddReview></PrivateRoute>
    },
    {
      path: '/blog',
      element : <Blog></Blog>
    },
    {
      path: '/signup',
      element : <Signup></Signup>
    } 
  ]
}

 ])

 return (
  <div >
   <RouterProvider router={router}></RouterProvider>
  </div>
);

}
export default App;