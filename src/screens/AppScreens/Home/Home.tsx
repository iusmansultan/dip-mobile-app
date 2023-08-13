import {Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import ReportCard from '../../../components/ReportCard/ReportCard';
import {ReportModal} from '../../../utils/DataModels';

const Home: React.FC = ({}) => {
  const [reportsData, setReportData] = useState<ReportModal[]>([
    {
      id: '343434',
      name: 'John Doe',
      description: 'this is test',
      images: [
        'https://blizin.com/public/images/uploads/articles/budgetfriendlynorthernareasinpakistanforhoneymoon-A-1564311831.webp',
      ],
      guideId: '2312312',
      createdAt: new Date(),
      updatedAt: new Date(),
      postedBy: {},
    },
    {
      id: '3344566',
      name: 'Johns ',
      description: 'this is test',
      images: [
        'https://www.visitswatvalley.com/images/Northern-Areas-of-Pakistan.jpg',
        'https://hunzaadventuretours.com/wp-content/uploads/2022/03/k2-base-camp-trek-Karakoram-Pakistan.jpg',
      ],
      guideId: '2312312',
      createdAt: new Date(),
      updatedAt: new Date(),
      postedBy: {},
    },
  ]);
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}>
        {reportsData.map((item, index) => {
          return (
            <View key={index}>
              <ReportCard data={item} />
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
        style={styles.icon}
      />
    </View>
  );
};
