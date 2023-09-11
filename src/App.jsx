import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail'
import SignUn from './pages/SignUp'
import SignIn from './pages/SignIn'
import Layout from './layouts/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getUsersAction from "./store/actions/usersActions"

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path:'/cities', element: <Cities /> },
      { path: '/city/:id', element: <CityDetail />},
      { path: '/signUp', element: <SignUn />},
      { path: '/signIn', element: <SignIn />}
    ]
  },
])

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getUsersAction.authenticate())
  }, [])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
