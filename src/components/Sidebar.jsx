import styled from "styled-components";
import LinkTag from "./LinkTag";

import { logOut } from "../store/feature/auth/logOut";

import { useDispatch } from "react-redux";


const SidebarDiv = styled.div`
    width: 250px;
    background: #003545;
    height: 100%;
    padding: 20px;
    color: #fff;
    position: relative;

    h4{
        color: #007193;
    }

    ul{
        margin-top: 50px;
        li{
            margin-bottom: 10px;
        }
    }

`

const LogOutBtn = styled.button`
    padding: 10px 15px;
    background: #ff4b14;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    position: absolute;
    left: 10px;
    bottom: 100px;
`


const SideBar = ()=>{
    const dispatch = useDispatch()

    const handleLogOut = ()=>{
        dispatch(logOut())
    }
    return (
        <SidebarDiv>
            <div>
                <h4>SCHEDULER</h4>
            </div>
            <ul>
                <li> <LinkTag to="/dashboard">Dashboard</LinkTag> </li>
                <li> <LinkTag to="/">Schdeule a payment</LinkTag> </li>
            </ul>

            <LogOutBtn onClick={handleLogOut}>LOG OUT</LogOutBtn>

        </SidebarDiv>
    )
}


export default SideBar

