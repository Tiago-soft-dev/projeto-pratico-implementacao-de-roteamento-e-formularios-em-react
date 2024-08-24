import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './Component/Header'
import Home from './pages/Home'
import Create from './pages/Create'

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children :[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create',
        element: <Create />
      }
    ]
  }
])

function App() {
 

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
