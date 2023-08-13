import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  PanResponder,
} from 'react-native';
import React, {useState, useRef} from 'react';
import SearchField from '../../../components/SearchField/SearchField';
import styles from './Styles';
import ReportCard from '../../../components/ReportCard/ReportCard';
import AccountCard from '../../../components/AccountCard/AccountCard';
import PlacesCard from '../../../components/PlacesCard/PlacesCard';
import GuideCard from '../../../components/GuideCard/GuideCard';

// modals
import {ReportModal, UserModal} from '../../../utils/DataModels';

const Search = () => {
  const [tabs, setTabs] = useState<any>([
    {
      id: 1,
      title: 'Reports',
      isActive: true,
    },
    {
      id: 2,
      title: 'Accounts',
      isActive: false,
    },
    {
      id: 3,
      title: 'Places',
      isActive: false,
    },
    {
      id: 4,
      title: 'Guides',
      isActive: false,
    },
  ]);
  const [index, setIndex] = useState(0);

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

  const [accountData, setAccountsData] = useState<UserModal[]>([
    {
      _id: '232424',
      email: 'test@gmail.com',
      name: 'John Doe',
      imageUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      follower: 0,
      following: 0,
      like: 0,
      bio: '',
      userName: '',
      isDeleted: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '2324344',
      email: 'test@gmail.com',
      name: 'Jama',
      imageUrl:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
      follower: 0,
      following: 0,
      like: 0,
      bio: '',
      userName:
        'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg',
      isDeleted: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '232434324',
      email: 'test@gmail.com',
      name: 'John Doe',
      imageUrl: '',
      follower: 0,
      following: 0,
      like: 0,
      bio: '',
      userName: '',
      isDeleted: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const [placesData, setPlacesData] = useState<any[]>([
    {
      id: '1',
      image: 'https://www.holidify.com/images/cmsuploads/square/attr_1294.jpg',
      name: '24 Places To Visit In Bangalore With Friends',
    },
    {
      id: '2',
      image:
        'https://www.treebo.com/blog/wp-content/uploads/2018/06/22-Cool-Places-to-Hangout-in-Bangalore.jpg',
      name: 'The 22 Best Places to Hangout in Bangalore (2022) Treebo Blogs',
    },
  ]);

  const guidesData = [{id: 1}, {id: 2}, {id: 3}];

  const onTabPress = (id: number) => {
    const updatedTabs = tabs.map((item: any) =>
      item.id === id ? {...item, isActive: true} : {...item, isActive: false},
    );

    setTabs(updatedTabs);
    setIndex(pre => pre + 1);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < -50) {
          // User swiped from right to left
          // console.log('Swiped from right to left');
          onTabPress(index + 1);
        }
      },
      onPanResponderEnd: () => {},
    }),
  ).current;

  return (
    <View style={styles.container}>
      <SearchField placeholderText="Search" onChange={() => {}} />

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
        data={
          tabs[0].isActive
            ? reportsData
            : tabs[1].isActive
            ? accountData
            : tabs[2].isActive
            ? placesData
            : tabs[3].isActive && guidesData
        }
        renderItem={({item}) =>
          tabs[0].isActive ? (
            <ReportCard data={item} />
          ) : tabs[1].isActive ? (
            <AccountCard data={item} />
          ) : tabs[2].isActive ? (
            <PlacesCard data={item} />
          ) : (
            tabs[3].isActive && <GuideCard />
          )
        }
      />
    </View>
  );
};

export default Search;
