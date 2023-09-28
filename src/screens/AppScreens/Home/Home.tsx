import {
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import styles from './Styles';
import ReportPostCard from '../../../components/ReportPostCard/ReportPostCard';
import {ReportModal} from '../../../utils/DataModels';
import {
  GetAllReports,
  GetFollowingReports,
} from '../../../services/ReportService';
import {useNotification} from '../../../contextApi/ApiContext';
import {useFocusEffect} from '@react-navigation/native';
import {useAppSelector} from '../../../redux/Hooks';

const Home: React.FC = ({}) => {
  const user = useAppSelector((state: any) => state.user.value.user);
  const {showLoading, showError} = useNotification();
  const [reportsData, setReportData] = useState<ReportModal[]>([]);
  const [tab, setTab] = useState<any>([
    {
      id: 1,
      title: 'Explore',
      isActive: true,
    },
    {
      id: 2,
      title: 'Following',
      isActive: false,
    },
  ]);

  useEffect(() => {
    fetchReports();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchReports();
    }, []),
  );

  const fetchReports = async () => {
    showLoading(true);
    const response = await GetAllReports();
    showLoading(false);
    if (response.success) {
      setReportData(response.data);
    } else {
      showError(response.message);
    }
  };
  const fetchFollowingReports = async () => {
    showLoading(true);
    const response = await GetFollowingReports(user.following);
    showLoading(false);
    if (response.success) {
      setReportData(response.data);
    } else {
      showError(response.message);
    }
  };

  const onHandleChangeTab = (id: number) => {
    const updatedTabs = tab.map((item: any) =>
      item.id === id ? {...item, isActive: true} : {...item, isActive: false},
    );

    setTab(updatedTabs);

    if (id === 1) {
      fetchReports();
    } else if (id === 2) {
      fetchFollowingReports();
    } else {
      fetchFollowingReports();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />

        <View style={styles.tabButtons}>
          {tab.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onHandleChangeTab(item.id)}>
              <Text
                style={item.isActive ? styles.activeText : styles.inActiveText}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Image
          source={require('../../../assets/icons/saveForLater.png')}
          style={styles.icon}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={fetchReports} />
        }>
        {reportsData &&
          reportsData.map((item, index) => {
            return (
              <View key={index}>
                <ReportPostCard data={item} />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Home;
