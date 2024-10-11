import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
       <Route path='/' index element={<HomePage />} />
       <Route path='sign-up' element={<SignUpPage />} />
       <Route path='sign-in' element={<SignInPage />} />
    </>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

