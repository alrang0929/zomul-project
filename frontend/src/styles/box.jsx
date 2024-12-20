import styled from 'styled-components';

 const SmaillRoundBox = styled.div`
background-color: ${({ bgcolor }) => bgcolor || "#fff"};
border-radius: 999px;
flood-color: ${({fontcolor})=> fontcolor || "#131313"};
padding: 5px 10px;
text-align: center;
`;

export {SmaillRoundBox};