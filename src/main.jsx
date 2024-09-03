import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routes} />
      <Toaster
        position="top-center"
      />
    </Provider>
  </StrictMode>,
)
