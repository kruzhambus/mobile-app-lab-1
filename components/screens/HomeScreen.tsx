import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';

const HomeScreen = () => {
  const [numOne, setNumOne] = useState('');
  const [numSec, setNumSec] = useState('');
  const [symbol, setSymbol] = useState('');
  const [page, setPage] = useState(false);
  const [result, setResult] = useState(null);

  const resetAll = () => {
    setNumOne('');
    setNumSec('');
    setSymbol('');
  };

  const isCountable = numOne && numSec && symbol;
  const math = `${numOne} ${symbol} ${numSec}`;

  const count = nym => {
    switch (nym) {
      case '+':
        setResult(Number(numOne) + Number(numSec));
        setPage(true);
        break;
      case '-':
        setResult(Number(numOne) - Number(numSec));
        setPage(true);
        break;
      case '/':
        setResult(Number(numOne) / Number(numSec));
        setPage(true);
        break;
      case '*':
        setResult(Number(numOne) * Number(numSec));
        setPage(true);
        break;

      default:
        break;
    }
  };

  return (
    <View>
      {!page ? (
        <View>
          <TextInput
            placeholder="Перший символ"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setNumOne}
            value={numOne}
          />
          <View style={styles.symbolBlock}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSymbol('+')}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSymbol('-')}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSymbol('/')}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSymbol('*')}>
              <Text style={styles.text}>*</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Другий символ"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setNumSec}
            value={numSec}
          />
          <Button title="Очистити все" onPress={resetAll}></Button>
          <Button
            title={`Обрахувати ${math}`}
            disabled={!isCountable}
            onPress={() => count(symbol)}></Button>
        </View>
      ) : (
        <View>
          <Text style={styles.result}>
            {math} = {result}
          </Text>
          <Button
            title={`Назад`}
            // disabled={!isCountable}
            onPress={() => setPage(false)}></Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 100,
  },
  mainBlock: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 10,
  },
  symbolBlock: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: '20%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  result: {
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 30,
  },
});

export default HomeScreen;
