import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// const ResultText = styled.Text`
//   font-size: 40px;
//   font-weight: bold;
// `; // Ne fonctionne pas

const ResultDisplay = ({ result }) => {
  return (
    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
      {result.new_amount.toFixed(2)} {result.new_currency}
    </Text>
  );
};

export default ResultConvert;
