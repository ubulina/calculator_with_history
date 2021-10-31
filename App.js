import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function App() {

  const [result, setResult] = useState('') 
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [data, setData] = useState([])

 

  const plusPressed = () => {

    const first = Number(firstNumber)
    const second = Number(secondNumber)

    const sum = first + second
    setResult(sum)

    const note = `${first} + ${second} = ${sum}`

    setData([...data, { key: note}])

    setFirstNumber('')
    setSecondNumber('')

  }
  
  const minusPressed = () => {

    const first = Number(firstNumber)
    const second = Number(secondNumber)

    const subtraction = first - second
    setResult(subtraction)

    const note = `${first} - ${second} = ${subtraction}`

    setData([...data, { key: note}])

    setFirstNumber('')
    setSecondNumber('')
  }


  return (
    <View style={styles.container}>
    
      <Text>Result: {result}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={firstNumber => setFirstNumber(firstNumber)}
        value={firstNumber}
        keyboardType="numeric"
      />
      <View style={styles.space} />
      <TextInput 
        style={styles.input}
        onChangeText={secondNumber => setSecondNumber(secondNumber)}
        value={secondNumber}
        keyboardType="numeric"
      />
    
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 20}}>
      <Button onPress={plusPressed} title=" + " /> 
      <View style={styles.space} />
      <Button onPress={minusPressed} title=" - " />
    </View>  
      <Text>History</Text>
      <FlatList
        data={data}
        renderItem={({item}) => 
          <Text>{item.key}</Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50
  },
  space: {
    width: 10, 
    height: 10,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    
  }
  
});
