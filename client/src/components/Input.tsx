import styled from "styled-components";

const StyledInput = styled.input`
  width: 427px;
  height: 45px;
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  background-color: #9B5400;
  color: #FFFFFF;
  font-family: 'Maitree';
  font-size: 20px;
  padding-left: 10px;
  outline: none;
`
interface InputProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({onChange} : InputProps) => (
    <StyledInput type="text" onChange={onChange}/>
)