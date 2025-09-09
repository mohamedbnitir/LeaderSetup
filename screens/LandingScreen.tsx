import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Hero from '../src/components/Hero';

type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Hero
        title="Welcome to MaintainX"
        subtitle="Streamline your operations with ease."
        buttonText="Get Started"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
