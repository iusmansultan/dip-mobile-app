import {Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Styles';
import ReportCard from '../../../components/ReportCard/ReportCard';
import {ReportModal} from '../../../utils/DataModels';
import {GetAllReports} from '../../../services/ReportService';
import {useNotification} from '../../../contextApi/ApiContext';

const Home: React.FC = ({}) => {
  const {showLoading, showError} = useNotification();
  const [reportsData, setReportData] = useState<ReportModal[]>([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    showLoading(true);
    const response = await GetAllReports();
    showLoading(false);
    console.log(response.data);
    if (response.success) {
      setReportData(response.data);
    } else {
      showError(response.message);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderContainer />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}>
        {reportsData &&
          reportsData.map((item, index) => {
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
