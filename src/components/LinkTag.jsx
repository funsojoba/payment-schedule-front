import styled from "styled-components";
import { Link } from "react-router-dom";


export const MyLinkDiv = styled.div`
    a{  
        display: inline-block;
        color: #fff;
        cursor: pointer;
        
        text-decoration:none;
        transition: 300ms;

    &:hover{
        transform: translateX(5px);
        text-decoration: underline;
    }
    }
`


const LinkTag = ({ to, children}) => {
    return <MyLinkDiv>
        <Link to={to}> {children} </Link>
    </MyLinkDiv>
}

export default LinkTag
