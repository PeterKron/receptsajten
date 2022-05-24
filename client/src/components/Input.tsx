import styled from "styled-components";

const StyledInputDiv = styled.div`
  margin-left: 250px;
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
`

const StyledInput = styled.input`
  width: 427px;
  height: 45px;
  border: 2px solid #9B5400;
  border-radius: 10px;
  background-color: #FFFFFF;
  font-family: 'Maitree';
  font-size: 20px;
  padding-left: 10px;
  outline: none;
`
interface InputProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    placeholder?: string
}

export const Input = ({onChange, placeholder} : InputProps) => (
  <StyledInputDiv>
    <img src="/searchcaramel.png" alt="" />
    <StyledInput type="text" onChange={onChange} placeholder={placeholder}/>
  </StyledInputDiv>
)