import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import { BASE_API_KEY } from '../../config/config';

const ConversionForm = ({ currencies }) => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState(null);

  const fetchConvert = async () => {
    try {
    const response = await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?have=${baseCurrency}&want=${targetCurrency}&amount=${amount}`, {
      headers: {
        'X-API-Key': BASE_API_KEY,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleConvert = async () => {
    const result = await fetchConvert();
    console.log('result:', result);
    setResult(result);
  };

  const HandleTextChangeBaseCurrency = (text) => {
    setBaseCurrency(text);
  };

  const HandleTextChangeTargetCurrency = (text) => {
    setTargetCurrency(text);
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
        onChangeText={HandleTextChangeBaseCurrency}
      />
      <Input
        value={targetCurrency}
        placeholder="Devise cible"
        onChangeText={HandleTextChangeTargetCurrency}
      />
      <ConvertButton title="Convertir" onPress={handleConvert} />
     
      {
        result && (
          <ResultText>
            {result.new_amount.toFixed(2)} {result.new_currency}
          </ResultText>
        )
      }


    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
`;

const ConvertButton = styled.Button`
  margin-top: 30px;
  width: 50%;
  border-radius: 10px;
`;

const ResultText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export default ConversionForm;
