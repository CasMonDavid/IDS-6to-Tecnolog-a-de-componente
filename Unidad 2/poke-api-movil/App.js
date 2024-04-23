import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Components/SearchBar';
import { Button } from 'react-bootstrap';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Buscador Pokemon</Text>
      <SearchBar/>
      <Text>Hola mi amor</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
