import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import React from 'react';
import { View } from 'react-native';
import Hero from '../components/Hero';

const StyledView = styled(View);

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <StyledView className="flex-1 bg-white items-center justify-center p-6">
      <Hero
        imageUri="https://via.placeholder.com/300x200"
        title="Welcome to MaintainX"
        subtitle="Simplify your maintenance and operations with our modern tools."
        buttonText="Get Started"
        onPress={() => navigation.navigate('Home')}
      />
    </StyledView>
  );
};

export default LandingScreen;
