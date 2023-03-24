import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

import ResultConvert from '../../components/Result/ResultConvert';
import AmountInput from '../../components/Amount/AmountInput';
import { fetchConvert } from '../../API/CurrencyConvertAPI';
import CurrencyPicker from '../../components/SelectCurrency/CurrencyPicker'; 


const currenciesList = [
  { label: 'United States Dollar', value: 'USD' },
  { label: 'Euro', value: 'EUR' },
  { label: 'Argentine Peso', value: 'ARS' },
  { label: 'Japanese Yen', value: 'JPY' },
  { label: 'Saudi Riyal', value: 'SAR' },
  { label: 'Algerian Dinar', value: 'DZD' },

];
  const ConversionForm = ({ currencies }) => {
    const [baseCurrency, setBaseCurrency] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [amount, setAmount] = useState('1');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
      setLoading(true);
      try {
        const conversionResult = await fetchConvert(baseCurrency, targetCurrency, amount);
        console.log('result:', conversionResult);
        setResult(conversionResult);
      } catch (error) {
        console.error('Erreur lors de la conversion:', error);
      }
      setLoading(false);
    };

    const isButtonDisabled = () => baseCurrency === targetCurrency || !baseCurrency || !targetCurrency;
        
  
  return (
    
    <Container>
      <Title>Que souhaitez-vous convertir ?</Title>
      <AmountInput amount={amount} setAmount={setAmount} />
      
      <CurrencyPicker
        value={baseCurrency}
        placeholder="Devise de départ"
        onValueChange={setBaseCurrency}
        items={currenciesList}
      />
      
      <CurrencyPicker
        value={targetCurrency}
        placeholder="Devise cible"
        onValueChange={setTargetCurrency}
        items={currenciesList}
      />
      
      <ConvertButton title="Convertir" onPress={handleConvert} disabled={isButtonDisabled()} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
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