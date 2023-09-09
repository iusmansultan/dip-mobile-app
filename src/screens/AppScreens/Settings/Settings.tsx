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
import React, {useState, useLayoutEffect} from 'react';
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

const Settings: React.FC = ({navigation}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user.value.user);
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

  const guidesData = [{id: 1}, {id: 2}, {id: 3}];
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
          <Text style={styles.valueText}>300</Text>
          <Text style={styles.labelText}>Reports</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.valueText}>20K</Text>
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
          tabs[0].isActive ? <ReportCard data={item} /> : <GuideCard />
        }
      />
    </View>
  );
};

export default Settings;
