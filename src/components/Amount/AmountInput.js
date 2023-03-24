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

const AmountInput = ({ amount, setAmount }) => {
  return (
    <Input
      value={amount}
      keyboardType="numeric"
      placeholder="Montant"
      onChangeText={(text) => setAmount(text)}
    />
  );
};

export default AmountInput;
