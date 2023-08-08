import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities';
import Layout from './layouts/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path:'/cities', element: <Cities /> },
      { path:'/cities/:id', element: <Cities /> }
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
