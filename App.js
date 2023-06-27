import { StyleSheet, Text, View, TextInput, Button, StatusBar, Platform, SafeAreaView } from 'react-native';
import { styles } from './styles';
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imputContainer}>
          <TextInput style={styles.input} 
          placeholder='add new tasks'
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor='#A8577E'
          selectionColor='#E2E4F3'
          placeholderTextColor='#030113'
          />
          <Button title='Create' color='#160BA4' />
        </View>
      </View>
    </SafeAreaView>
    
  );
}
