import React from 'react';
import { Text } from 'react-native';

const ResultDisplay = ({ result }) => {
  return (
    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
      {result.new_amount.toFixed(2)} {result.new_currency}
    </Text>
  );
};

export default ResultDisplay;
