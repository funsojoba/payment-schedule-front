import styled from "styled-components";
import { Link } from "react-router-dom";


export const MyLinkDiv = styled.div`
    a{  
        display: inline-block;
        color: #155fa8;
        cursor: pointer;
        
        text-decoration:none;

    &:hover{
        transform: translateX(5px);
    }
    }
`


const LinkTag = ({ to, children}) => {
    return <MyLinkDiv>
        <Link to={to}> {children} </Link>
    </MyLinkDiv>
}

export default LinkTag
