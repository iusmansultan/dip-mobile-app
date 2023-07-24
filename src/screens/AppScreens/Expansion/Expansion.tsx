import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Expansion: React.FC = () => {
  const packeges = [
    {
      id: 1,
      title: 'Basic Package',
      price: 5,
      isSelected: false,
      options: [
        {
          id: 11,
          title: '200 Target Numbers',
        },
        {
          id: 12,
          title: '500+ Different Solutions',
        },
        {
          id: 13,
          title: '5 Categories',
        },
      ],
    },
    {
      id: 2,
      title: 'Ultimate Package',
      price: 5,
      isSelected: true,
      options: [
        {
          id: 21,
          title: '200 Target Numbers',
        },
        {
          id: 22,
          title: '500+ Different Solutions',
        },
        {
          id: 23,
          title: '5 Categories',
        },
      ],
    },
    {
      id: 3,
      title: 'Supreme Package',
      price: 5,
      isSelected: false,
      options: [
        {
          id: 31,
          title: '200 Target Numbers',
        },
        {
          id: 32,
          title: '500+ Different Solutions',
        },
        {
          id: 33,
          title: '5 Categories',
        },
      ],
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/authBg.png')}
      style={styles.container}>
      <View style={styles.topIconContainer}>
        <Image
          source={require('../../../assets/icons/expansionScreenIcon.png')}
          style={styles.topIcon}
        />
      </View>
      <Text style={styles.labelText}>Expansion Packs</Text>
      <Text style={styles.desciptionText}>Choose the best package for you</Text>

      <View style={styles.scrollViewContainer}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {packeges.map((item: any, index: number) => (
            <View
              key={item.id}
              style={
                item.isSelected
                  ? styles.packegeContainerActive
                  : styles.packegeContainer
              }>
              <View>
                <Text style={styles.packageTitle}>{item.title}</Text>

                <View style={styles.packageOptionsContainer}>
                  {item.options.map((option: any, index: number) => (
                    <View key={option.id} style={styles.optionTile}>
                      <View style={styles.circle}></View>
                      <Text style={styles.optionTitleText}>{option.title}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View>
                <Text style={styles.price}>${item.price}</Text>

                <View
                  style={
                    item.isSelected
                      ? styles.radioButtonOuterActive
                      : styles.radioButtonOuterInActive
                  }>
                  <View
                    style={
                      item.isSelected
                        ? styles.radioButtonInnerActive
                        : styles.radioButtonInnerInActive
                    }></View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <PrimaryButton title="Buy Now" onPress={() => {}} />
    </ImageBackground>
  );
};

export default Expansion;
