import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import MyStatusBar from '../../../components/MyStatusBar/MyStatusBar';

const HowToPlay = () => {
  const examples = [
    {
      id: 1,
      title: '13 - 1 = 12',
    },
    {
      id: 2,
      title: '12 x 5 = 60',
    },
    {
      id: 3,
      title: '60 x 8 = 480',
    },
    {
      id: 4,
      title: '480 - 4 = 476',
    },
  ];

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <Text style={styles.labelText}>How to Play?</Text>

      <Text style={styles.decritpionText}>
        Your goal is to reach a target number using only the given digits and
        four math operations. You will start with a given two-digit number and
        continue building on top of it until you reach the target number, within
        a given time limit.
      </Text>
      <Text style={styles.decritpionText}>
        For example, the target number is 476 and given digits are 13, 1, 5, 8,
        and 4. To reach the target number, you could follow these steps:
      </Text>

      {examples.map((item: any) => (
        <View key={item.id} style={styles.rowContainer}>
          <Text style={styles.idText}>{item.id}.</Text>
          <Text style={styles.textRow}>{item.title}</Text>
        </View>
      ))}

      <Text style={styles.decritpionText}>
        When you reach the solution, you'll see a surprising fact about the
        number.
      </Text>
      <Text style={styles.decritpionText}>
        Don’t forget to use all of the given numbers exactly once.
      </Text>
    </View>
  );
};

export default HowToPlay;
