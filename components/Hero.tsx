import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeroProps {
  imageUri?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onPress: () => void;
}

const Hero: React.FC<HeroProps> = ({ 
  imageUri, 
  title, 
  subtitle, 
  buttonText, 
  onPress 
}) => {
  return (
    <View style={styles.container}>
      {/* Image illustrée */}
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {/* Titre accrocheur */}
      <Text style={styles.title}>
        {title}
      </Text>

      {/* Sous-texte explicatif */}
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      {/* Bouton CTA */}
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 192,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f2937',
    marginTop: 24,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Hero;
