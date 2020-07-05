import styled from "styled-components"

export const BaseForm = styled.form`
  padding: 10px;
  margin-left: 140px;
`;

export const BaseInput = styled.input`
  padding: 10px 15px 7px 15px;
  width: 200px;
  height: 20px;
  border-radius: 100px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const BaseButton = styled.button`
  border: none;
  border-radius: 100px;
  height: 40px;
  width: 60px;
  margin-left: 5px;
  padding: 7px;
  font-size: 1em;
  cursor: pointer;
  color: white;
  background-color: rgb(30, 215, 96);
  vertical-align: middle;
`;