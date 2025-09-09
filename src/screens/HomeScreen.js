import { styled } from 'nativewind';
import React from 'react';
import { Text, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = () => {
  return (
    <StyledView className="flex-1 bg-white items-center justify-center">
      <StyledText className="text-2xl font-bold text-gray-800">
        Welcome to the Home Screen!
      </StyledText>
    </StyledView>
  );
};

export default HomeScreen;
