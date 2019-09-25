import styled from "styled-components";

const TextInput = styled.input`
  border: #547fb3 solid 2.5px;
  border-radius: 12px;
  color: #707070;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  width: 304px;
  border-color: #547fb3;
  &::placeholder {
    color: lightgrey;
  }
`;

export default TextInput;
