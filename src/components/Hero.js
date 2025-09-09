import { styled } from 'nativewind';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Hero = ({ imageUri, title, subtitle, buttonText, onPress }) => {
  return (
    <StyledView className="items-center">
      {/* Image illustrée */}
      <StyledImage
        source={{ uri: imageUri }}
        className="w-full h-48 rounded-lg"
        resizeMode="cover"
      />

      {/* Titre accrocheur */}
      <StyledText className="text-3xl font-bold text-center text-gray-800 mt-6">
        {title}
      </StyledText>

      {/* Sous-texte explicatif */}
      <StyledText className="text-lg text-center text-gray-600 mt-4">
        {subtitle}
      </StyledText>

      {/* Bouton CTA */}
      <StyledTouchableOpacity
        className="bg-blue-500 py-3 px-6 rounded-full mt-6"
        onPress={onPress}
      >
        <StyledText className="text-white text-lg font-semibold">
          {buttonText}
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default Hero;
