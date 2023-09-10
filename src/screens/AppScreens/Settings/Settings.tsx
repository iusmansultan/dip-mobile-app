import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Switch,
  SafeAreaView,
} from 'react-native';
import React, {useState, useLayoutEffect, useEffect} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {ACCOUNT} from '../../../helpers/RoutesName';
import {COLOR_PRIMARY} from '../../../helpers/Colors';
import {logoutUser} from '../../../redux/User/UserSlice';
import ReportCard from '../../../components/ReportCard/ReportCard';
import GuideCard from '../../../components/GuideCard/GuideCard';
import {ReportModal} from '../../../utils/DataModels';

import {useAppSelector, useAppDispatch} from '../../../redux/Hooks';
import {EDIT_PROFILE} from '../../../helpers/RoutesName';
import {GetUserGuides} from '../../../services/GuideService';
import {GetUserReports} from '../../../services/ReportService';
import {useNotification} from '../../../contextApi/ApiContext';
const Settings: React.FC = ({navigation}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user.value.user);
  const {showLoading, showError} = useNotification();

  const [tabs, setTabs] = useState<any>([
    {
      id: 1,
      title: 'Reports',
      isActive: true,
    },

    {
      id: 2,
      title: 'Guides',
      isActive: false,
    },
  ]);

  const [guidesData, setGuidesData] = useState<any[]>([]);
  const [reportsData, setReportData] = useState<any[]>([]);

  // Set the header title dynamically based on the selected item
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleEditProfile}>
          <Image
            source={require('../../../assets/icons/editIcon.png')}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    getUserReports();
    getUserGuides();
  }, []);
  const getUserReports = async () => {
    showLoading(true);
    const response = await GetUserReports(user._id);
    if (response.success) {
      setReportData(response.data);
    } else {
      showError(response.message);
    }
  };

  const getUserGuides = async () => {
    const response = await GetUserGuides(user._id);
    console.log(response);
    if (response.success) {
      setGuidesData(response.data);
    } else {
      showError(response.message);
    }
    showLoading(false);
  };

  const onHandleEditProfile = () => {
    navigation.navigate(EDIT_PROFILE);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const onTabPress = (id: number) => {
    const updatedTabs = tabs.map((item: any) =>
      item.id === id ? {...item, isActive: true} : {...item, isActive: false},
    );

    setTabs(updatedTabs);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={
            user.imageUrl !== ''
              ? {uri: user.imageUrl}
              : require('../../../assets/images/profile-avatar.jpeg')
          }
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.profileName}>{user.name}</Text>
      <Text style={styles.userNameText}>@{user.userName}</Text>

      <View style={styles.statsContainer}>
        <View style={styles.boxContainer}>
          <Text style={styles.valueText}>{reportsData.length}</Text>
          <Text style={styles.labelText}>Reports</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.valueText}>{guidesData.length}</Text>
          <Text style={styles.labelText}>Guides</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.valueText}>{user.follower}</Text>
          <Text style={styles.labelText}>Followers</Text>
        </View>
      </View>

      <Text style={styles.bioText}>{user.bio}</Text>

      <View style={styles.tabsContainer}>
        {tabs.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              onPress={() => onTabPress(item.id)}
              key={index}
              style={item.isActive ? styles.activeTab : styles.inActiveTab}>
              <Text
                style={
                  item.isActive ? styles.activeTabText : styles.inActiveTabText
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={tabs[0].isActive ? reportsData : guidesData}
        renderItem={({item}) =>
          tabs[0].isActive ? (
            <ReportCard data={item} />
          ) : (
            <GuideCard data={item} />
          )
        }
      />
    </View>
  );
};

export default Settings;
