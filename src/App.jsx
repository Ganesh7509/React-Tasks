
import './index.css'
import Alltasks from './Alltasks';
import Task1 from "./Task1";
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task6 from './Task6';
import Task7 from './Task7';
import Task8 from './Task8';
import {Routes,Route,NavLink} from 'react-router-dom';
import Task9 from './Task9';
import Notfound from './Notfound';
import Welcome from './Welcome';
import Task10 from './Task10';
import UserDetails from './UserDetails';
import React, { Suspense } from 'react';
import Login from './Login';

import { useAuth } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Counter from './Counter';
import Themeh from './Themeh';
import Task11 from './Task11';


const LazyTask5=React.lazy(()=>import('./Task5'));

function App(){
  console.log(useAuth())
  const{user,logout}=useAuth()
  if(user){console.log(`${user} is there`)}
  return(
    <>
    <main className='all-tasks'>
      <h1 className="main-heading">All React Tasks</h1>
     {/* <ClickCounter></ClickCounter>
     <HoverCounter></HoverCounter>
     <Counter></Counter>
     <Themeh></Themeh> */}
      <nav className='navbar'>
             <NavLink to={'/'} className='nav-link'>Home</NavLink>
     <NavLink to={'/task1'} className="nav-link">Task1</NavLink>
     <NavLink  to={'/task2'} className="nav-link">Task2</NavLink>
     <NavLink  to={'/task3'}  className="nav-link">Task3</NavLink>
     <NavLink  to={'/task4'} className="nav-link">Task4</NavLink>
     <NavLink  to={'/task5'} className="nav-link">Task5</NavLink>
     <NavLink  to={'/task6'} className="nav-link">Task6</NavLink>
     <NavLink  to={'/task7'} className="nav-link">Task7</NavLink>
     <NavLink  to={'/task8'}className="nav-link">Task8</NavLink>
     <NavLink  to={'/task9'}className="nav-link">Task9</NavLink>
     <NavLink to={'/task10'}className="nav-link">Task10</NavLink>
     <NavLink to={'/task11'} className="nav-link">Task11</NavLink>
     {
      user?
      <NavLink to={'/'} onClick={logout}className="logout-btn">Logout</NavLink>:
      <NavLink to={'/login'} className="login-btn">Login</NavLink>
     }
         </nav>

      <Routes>
        <Route path='/' element={ <Alltasks></Alltasks>} />
      <Route path='/task1' element={<Task1></Task1>}></Route>
      <Route path='/task2' element={<Task2></Task2>}></Route>
      <Route path='/task3' element={<Task3></Task3>}></Route>
      <Route path='/task4' element={<Task4></Task4>}></Route>
      {/* <Route path='/task5' element={<Task5></Task5>}></Route> */}
      <Route path='/task5' element={<Suspense fallback={<h2>Loading Task5...</h2>}><LazyTask5></LazyTask5></Suspense>}></Route>
      <Route path='/task6' element={<Task6></Task6>}></Route>
      <Route path='/task7' element={<Task7></Task7>}></Route>
      <Route path='/task8' element={<Task8></Task8>}></Route>
      <Route path='/task9' element={<Task9></Task9>}></Route>
      <Route path='/welcome' element={<Welcome></Welcome>}></Route>
      {/* <Route path='/task10' element={<Task10></Task10>}></Route> */}
      <Route path='/task10' element={<PrivateRoute><Task10></Task10></PrivateRoute>}></Route>
       <Route path='/task10/:id' element={<UserDetails></UserDetails>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/task11' element={<Task11></Task11>}></Route>
      
      <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
    </main>
    </>
  )
}


export default App;