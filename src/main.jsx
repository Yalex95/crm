import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NewClient, {action as newClientAction} from './pages/NewClient'
import Index, {loader as clientsLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditClient,{loader as editLoader, action as editClientAction} from './pages/EditClients'
import {action as removeClientAction} from './components/Client'
// define routes
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientsLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clients/new',
        element: <NewClient/>,
        action: newClientAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/client/:clientId/edit',
        element:<EditClient/>,
        loader: editLoader,
        action: editClientAction,
        errorElement: <ErrorPage/>
      },
      {
        path:'/client/:clientId/remove',
        action: removeClientAction,
        errorElement: <ErrorPage/>
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
