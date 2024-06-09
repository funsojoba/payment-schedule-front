import { useState } from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  NavLink,
  createRoutesFromElements
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={<Home />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
    </Route>
  )
);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
