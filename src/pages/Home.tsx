import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  }
})
