import styled from 'styled-components';

const IconButton  = styled.button`
    color: #1f17ff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 15px;
    background-color: #f0f8ff;
    width: 40px;
    height: 40px;
    padding: 5px;
    border: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const BasicButton = styled.button`
    color: #fff;
    font-size: 1rem;
    background-color: ${({ bgcolor }) => bgcolor || "#1f17ff"};
    border-radius: 10px;
    border: none;
    padding: 12px 10px;
  `;

  export {BasicButton, IconButton};