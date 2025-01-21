import { StyleSheet, useWindowDimensions } from 'react-native';
import WebView from 'react-native-webview';

export default function WebViewContainer() {
  const { height, width } = useWindowDimensions();

  return <WebView style={[styles.webView, { height, width }]} source={{ uri: 'https://routiful.vercel.app/' }} />;
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});
