import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: center;
`;

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
`;

const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-top: 20px;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <BackgroundImage source={require('../../images/background.jpg')}>
        <Logo source={require('../../images/logo.png')} />
        <Title>Money Maze</Title>
        <Description>Tous les chemins mènent à la conversion - choisissez celui qui vous convient avec notre application.</Description>
        <Button title="Commencer" onPress={() => navigation.navigate('Conversion')} />
      </BackgroundImage>
    </Container>
  );
};

export default HomeScreen;
