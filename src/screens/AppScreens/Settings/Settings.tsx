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
import React, {useState} from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {ACCOUNT} from '../../../helpers/RoutesName';
import {COLOR_PRIMARY} from '../../../helpers/Colors';
import {useAppDispatch} from '../../../redux/Hooks';
import {logoutUser} from '../../../redux/User/UserSlice';
import ReportCard from '../../../components/ReportCard/ReportCard';
import GuideCard from '../../../components/GuideCard/GuideCard';
import { ReportModal } from '../../../utils/DataModels';

const Settings: React.FC = ({navigation}) => {
  const dispatch = useAppDispatch();
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
      <View style={styles.profileImageContainer}></View>

      <Text style={styles.profileName}>John Doe</Text>
      <Text style={styles.userNameText}>@johndoe</Text>

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
          <Text style={styles.valueText}>1</Text>
          <Text style={styles.labelText}>Followers</Text>
        </View>
      </View>

      <Text style={styles.bioText}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
        vulputate sem a nibh rutrum consequat. Nam quis nulla. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </Text>

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
