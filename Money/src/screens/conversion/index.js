import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

import ResultConvert from '../../components/Result/ResultConvert';
import AmountInput from '../../components/Amount/AmountInput';
import { fetchConvert } from '../../API/CurrencyConvertAPI';
import CurrencyPicker from '../../components/SelectCurrency/CurrencyPicker'; 
import Message from '../../components/Message/message';


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
    const [message, setMessage] = useState({ type: '', content: '' });
    
    const handleConvert = async () => {
      setLoading(true);
      try {
        const conversionResult = await fetchConvert(baseCurrency, targetCurrency, amount);
        console.log('result:', conversionResult);
        setResult(conversionResult);
        showMessage('success', 'La conversion a été effectuée avec succès.');
      } catch (error) {
        console.error('Erreur lors de la conversion:', error);
        showMessage('error', "Une erreur s'est produite lors de la conversion. Veuillez réessayer."); 
      }
      setLoading(false);
    };

    const showMessage = (type, content) => {
      setMessage({ type, content });
      setTimeout(() => setMessage({ type: '', content: '' }), 5000);
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

      {message.content && <Message type={message.type}>{message.content}</Message>}


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