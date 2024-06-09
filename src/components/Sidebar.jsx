import styled from "styled-components";
import LinkTag from "./LinkTag";


const SidebarDiv = styled.div`
    width: 250px;
    background: #003545;
    height: 100%;
    padding: 20px;
    color: #fff;

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


const SideBar = ()=>{
    return (
        <SidebarDiv>
            <div>
                <h4>SCHEDULER</h4>
            </div>
            <ul>
                <li> <LinkTag to="/dashboard">Dashboard</LinkTag> </li>
                <li> <LinkTag to="/">Schdeule a payment</LinkTag> </li>
            </ul>
        </SidebarDiv>
    )
}


export default SideBar

