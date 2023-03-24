import React, { useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import { BASE_API_KEY } from '../../config/config';
import ResultConvert from '../../components/Result/ResultConvert';
import AmountInput from '../../components/Amount/AmountInput';
import CurrencyInput from '../../components/Currency/CurrencyInput';

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
      
      <AmountInput amount={amount} setAmount={setAmount} />
      
      <CurrencyInput
        value={baseCurrency}
        placeholder="Devise de départ"
        onChangeText={HandleTextChangeBaseCurrency}
      />
      
      <CurrencyInput
        value={targetCurrency}
        placeholder="Devise cible"
        onChangeText={HandleTextChangeTargetCurrency}
      />
      
      <ConvertButton title="Convertir" onPress={handleConvert} />
     
      {
        result && (
            <ResultConvert result={result} />
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

const ConvertButton = styled.Button`
  margin-top: 30px;
  width: 50%;
  border-radius: 10px;
`;

export default ConversionForm;
