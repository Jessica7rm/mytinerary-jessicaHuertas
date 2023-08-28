import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail'
import Layout from './layouts/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path:'/cities', element: <Cities /> },
      { path: '/city/:id', element: <CityDetail />},
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
