import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebViewContainer from './components/WebViewContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebViewContainer />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
});
