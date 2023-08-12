import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Styles';
import ReportCard from '../../../components/ReportCard/ReportCard';

const Home: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}>
        {[1, 2, 3].map((item, index) => {
          return (
            <View key={index}>
              <ReportCard />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const HeaderContainer = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />

      <View style={styles.tabButtons}>
        <Text style={styles.activeText}>Explore</Text>
        <Text style={styles.inActiveText}>Following</Text>
      </View>
      <Image
        source={require('../../../assets/icons/saveForLater.png')}
        style={styles.logo}
      />
    </View>
  );
};
