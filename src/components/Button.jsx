import styled from "styled-components";


const ButtonTag = styled.button`
    border: solid 1px #fff;
    background: #00716c;
    border-radius:10px;
    padding: 10px 15px;
    color: #fff;
    cursor: pointer;
`

const Button = ({onClick, disabled, title})=>{
    return (
    <ButtonTag
        onClick={onClick}
        disabled={disabled}
        >{title}</ButtonTag>)
}

export default Button