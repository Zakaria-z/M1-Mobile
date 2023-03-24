import React from 'react';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

const CurrencyPicker = ({ value, placeholder, onValueChange, items }) => {
  return (
    <PickerContainer>
      <StyledPicker
        selectedValue={value}
        onValueChange={onValueChange}
      >
        <Picker.Item label={placeholder} value="" />
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </StyledPicker>
    </PickerContainer>
  );
};

const PickerContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledPicker = styled(Picker)`
  width: 100%;
  height: 50px;
`;

export default CurrencyPicker;
