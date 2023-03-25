import React from 'react';
import styled from 'styled-components/native';

const StyledMessage = styled.Text`
  color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const Message = ({ type, children }) => {
  return <StyledMessage type={type}>{children}</StyledMessage>;
};

export default Message;
