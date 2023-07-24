import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import styles from './Styles';

const Play = () => {
  const [targetedNumber, setTargetedNumber] = useState(476);

  const [selected, setSelected] = useState({
    number1: 480,
    operator: '-',
    number2: 4,
  });

  const numbers = [
    {
      id: 1,
      label: '4',
      value: 4,
      action: () => {},
    },
    {
      id: 2,
      label: '5',
      value: 5,
      action: () => {},
    },
    {
      id: 3,
      label: '3',
      value: 3,
      action: () => {},
    },
    {
      id: 4,
      label: '8',
      value: 8,
      action: () => {},
    },
    {
      id: 5,
      label: 'x',
      value: 'x',
      action: () => {},
    },
  ];

  const operators = [
    {
      id: 1,
      label: '+',

      action: () => {},
    },
    {
      id: 2,
      label: '-',

      action: () => {},
    },
    {
      id: 3,
      label: '*',

      action: () => {},
    },
    {
      id: 4,
      label: '/',

      action: () => {},
    },
    {
      id: 5,
      label: '>',
      action: () => {},
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>4/10</Text>
        <View style={styles.watchContainer}>
          <Image
            source={require('../../../assets/icons/watchIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>47</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Image
            source={require('../../../assets/icons/buldIcon.png')}
            style={styles.iconPrimary}
          />
          <Text style={styles.textPrimary}>4</Text>
        </View>
      </View>

      <Text style={styles.targetedNumberText}>{targetedNumber}</Text>
      <View style={styles.inputNumberContainer}>
        <View style={styles.inputNumbers}>
          <Text style={styles.selectedText}>{selected.number1}</Text>
          <Text style={styles.selectedText}>{selected.operator}</Text>
          <Text style={styles.selectedText}>{selected.number2}</Text>
        </View>
        <View style={styles.targetedNumberContainer}>
          <Text style={styles.numberText}>{targetedNumber}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {numbers.map((item: any) => (
          <View key={item.id} style={styles.button}>
            <Text style={styles.selectedText}>{item.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {operators.map((item: any) => (
          <View key={item.id} style={styles.button}>
            <Text style={styles.selectedText}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Play;
