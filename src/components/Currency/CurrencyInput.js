import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  font-size: 20px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
`;

const CurrencyInput = ({ placeholder, value, onChangeText }) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default CurrencyInput;
