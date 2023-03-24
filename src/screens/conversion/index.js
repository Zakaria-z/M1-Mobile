import React, { useState } from 'react';
import styled from 'styled-components/native';

import ResultConvert from '../../components/Result/ResultConvert';
import AmountInput from '../../components/Amount/AmountInput';
import CurrencyInput from '../../components/Currency/CurrencyInput';
import { fetchConvert } from '../../API/CurrencyConvertAPI';

const ConversionForm = ({ currencies }) => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    const conversionResult = await fetchConvert(baseCurrency, targetCurrency, amount);
    console.log('result:', conversionResult);
    setResult(conversionResult);
  };

  return (
    <Container>
      <Title>Que souhaitez-vous convertir ?</Title>
      
      <AmountInput amount={amount} setAmount={setAmount} />
      
      <CurrencyInput
        value={baseCurrency}
        placeholder="Devise de départ"
        onChangeText={setBaseCurrency}
      />
      
      <CurrencyInput
        value={targetCurrency}
        placeholder="Devise cible"
        onChangeText={setTargetCurrency}
      />
      
      <ConvertButton title="Convertir" onPress={handleConvert} />
     
      {result && <ResultConvert result={result} />}

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
