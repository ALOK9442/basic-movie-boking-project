import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/home.jsx'
import TicketBooking from './components/ticket-screen/ticketbooking.jsx'
import Summary from './components/home/summary.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ticket-booking",
          element: <TicketBooking />,
        },
        {
          path: "/summary",
          element: <Summary />,
        },
  ],
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
