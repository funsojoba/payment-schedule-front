import styled from "styled-components";



const InputDiv = styled.input`
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #fff;
    width: 90%;
    margin-bottom: 15px;
    background: #e9e9e9;
`

const Label = styled.label`
    color: #9a9a9a;
    text-align:left;
`


const Input = ({type, name, value, onChange, topLabel })=>{
    return (
        <div>
            <Label>{topLabel}</Label>
            <InputDiv
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                ></InputDiv>
        </div>
)
}

export default Input