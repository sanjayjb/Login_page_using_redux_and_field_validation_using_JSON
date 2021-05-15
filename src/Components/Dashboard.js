import React from 'react';
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const DashBoard = () => {

    const data = useSelector(selectUser);
    const dispatch = useDispatch();
    console.log("data", data);

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
    }
    return(
        <div> 
            <h1> Welcome  </h1>
            <button className="logout__btn" onClick = {(e) => handleLogout(e)}> log out </button>
            <table>
              <thead>  
                  <tr>
                    <th key = "id">id</th>
                    <th key = "name">name</th>
                    <th key = "age">age</th>
                    <th key = "gender">gender</th>
                    <th key = "email">E-mail</th>
                    <th key = "phone">PhoneNo</th>
                  </tr>
              </thead>

              {data.data.user.map((item, i) => {
                return (<tbody key = {i}>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNo}</td>
                    </tr>    
                </tbody>)
            })}
            </table>
            
        </div>
    )
}

export default DashBoard;