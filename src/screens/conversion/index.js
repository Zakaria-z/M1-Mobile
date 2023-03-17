import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const ConversionForm = ({ currencies }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    const response = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?have=${baseCurrency}&want=${targetCurrency}&amount=${amount}`, {
      headers: {
        'X-API-Key': 'yzyUsa/zCHPwf/T7l2xdrw==t1cJs3ER576Xc8AV',
      },
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <Container>
      <Title>Que souhaitez-vous convertir ?</Title>
      <Input
        value={amount}
        keyboardType="numeric"
        placeholder="Montant"
        onChangeText={(text) => setAmount(text)}
      />
      <Input
        value={baseCurrency}
        placeholder="Devise de départ"
        onChangeText={(text) => setBaseCurrency(text.toUpperCase())}
      />
      <Input
        value={targetCurrency}
        placeholder="Devise cible"
        onChangeText={(text) => setTargetCurrency(text.toUpperCase())}
      />
      <ConvertButton title="Convertir" onPress={handleConvert} />
      {result ? (
        <ResultText>
          {result.toFixed(2)} {targetCurrency}
        </ResultText>
      ) : (
        <ResultText>Résultat</ResultText>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const ConvertButton = styled.Button`
  margin-top: 20px;
`;

const ResultText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export default ConversionForm;
