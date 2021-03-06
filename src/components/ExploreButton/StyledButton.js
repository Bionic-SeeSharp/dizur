import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(230.82deg, #ff4747 4.95%, #f2684a 106.9%);
  text-align: center;
  border: none;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 30px;
  height: 50px;
  width: 25%;
  border-radius: 25px;
  letter-spacing: 7px;
  &:hover {
    background-color: #2c43ce;
  }
  &:focus {
    outline-width: 0;
  }
`;

export default StyledButton;
