import styled from "styled-components";

export const Button = styled.button`
  cursor: ${(props) => props.cursor || "pointer"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || "normal"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.color || "black"};
  float: ${(props) => props.float || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
`;

export const TextBox = styled.div`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "10px"};
  float: ${(props) => props.float || "none"};
  padding: ${(props) => props.padding || "0"};
  line-height: ${(props) => props.lineHeight || "normal"};
  display: ${(props) => props.display || "block"};
  cursor: ${(props) => props.cursor || "auto"};
`;

export const LoginWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: ${(props) => props.top || "50%"};
  transform: ${(props) => props.transform || "translate(-50%, -50%)"};
  text-align: center;
  padding: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  letter-spacing: ${(props) => props.letterSpacing};
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
