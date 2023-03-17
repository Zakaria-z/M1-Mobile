import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Que souhaitez-vous convertir ?
      </Text>
      <TextInput
        style={{ fontSize: 16, padding: 10, marginBottom: 10 }}
        value={amount}
        keyboardType="numeric"
        onChangeText={(text) => setAmount(text)}
      />
      <TextInput
        style={{ fontSize: 16, padding: 10, marginBottom: 10 }}
        value={baseCurrency}
        onChangeText={(text) => setBaseCurrency(text.toUpperCase())}
      />
      <TextInput
        style={{ fontSize: 16, padding: 10, marginBottom: 20 }}
        value={targetCurrency}
        onChangeText={(text) => setTargetCurrency(text.toUpperCase())}
      />
      <Button title="Convertir" onPress={handleConvert} />
      {result ? (
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>
          {result.toFixed(2)} {targetCurrency}
        </Text>
      ) : (
        <Text style={{ fontSize: 20, marginTop: 20 }}>Résultat</Text>
      )}
    </View>
  );
};

export default ConversionForm;