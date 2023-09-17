import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  PanResponder,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import SearchField from '../../../components/SearchField/SearchField';
import styles from './Styles';
import ReportPostCard from '../../../components/ReportPostCard/ReportPostCard';
import AccountCard from '../../../components/AccountCard/AccountCard';
import PlacesCard from '../../../components/PlacesCard/PlacesCard';
import GuideCard from '../../../components/GuideCard/GuideCard';

// modals
import {ReportModal, UserModal} from '../../../utils/DataModels';

import {useNotification} from '../../../contextApi/ApiContext';
import {GetAllReports} from '../../../services/ReportService';
import {GetAllGuides} from '../../../services/GuideService';
import {GetAllUser} from '../../../services/UserService';
import {API_ENDPOINTS, BASE_URL} from '../../../helpers/Config';
import AxiosCall from '../../../utils/AxiosCall';

const Search = () => {
  const {showLoading, showError} = useNotification();

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

  const [reportsData, setReportData] = useState<ReportModal[]>([]);

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

  const [guidesData, setGuidesData] = useState<any[]>([]);

  const onTabPress = (id: number) => {
    const updatedTabs = tabs.map((item: any) =>
      item.id === id ? {...item, isActive: true} : {...item, isActive: false},
    );

    setTabs(updatedTabs);
    setIndex(pre => pre + 1);
  };

  useEffect(() => {
    onFetchReports();
    onFetchGuides();
    onGetAllAccounts();
  }, []);

  const onGetAllAccounts = async () => {
    showLoading(true);
    const response = await GetAllUser();
    console.log(response);
    showLoading(false);
    if (response.success) {
      setAccountsData(response.data);
    } else {
      showError(response.message);
    }
  };

  const onFetchReports = async () => {
    showLoading(true);
    const response = await GetAllReports();
    showLoading(false);
    if (response.success) {
      setReportData(response.data);
    } else {
      showError(response.message);
    }
  };

  const onFetchGuides = async () => {
    const response = await GetAllGuides();
    if (response.success) {
      setGuidesData(response.data);
    } else {
      showError(response.message);
    }
  };

  // Define a debounce function
  function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number,
  ): (...args: Parameters<T>) => void {
    let timer: NodeJS.Timeout;
    return function (...args: Parameters<T>) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  const onSearch = async (text: string) => {
    // Use the debounce function to create a debounced version of onSearch
    const debouncedOnSearch = debounce(async (searchText: string) => {
      const activeTabTitles: string[] = tabs
        .filter((item: any) => item.isActive && item.title)
        .map((item: any) => item.title);

      const url =
        BASE_URL +
        API_ENDPOINTS.SEARCH.SEARCH +
        `?type=${activeTabTitles[0]}&searchtext=${searchText}`;
      try {
        const response = await AxiosCall({url: url, method: 'get', data: ''});
        console.log(response);
        if (activeTabTitles[0] === 'Reports') setReportData(response.data);
        else if (activeTabTitles[0] === 'Accounts')
          setAccountsData(response.data);
        else if (activeTabTitles[0] === 'Places') setPlacesData(response.data);
        else if (activeTabTitles[0] === 'Guides') setGuidesData(response.data);
        else {
        }
      } catch (e: any) {
        showError(e.error);
      }
    }, 300);
    debouncedOnSearch(text);
  };

  return (
    <View style={styles.container}>
      <SearchField placeholderText="Search" onChange={text => onSearch(text)} />

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
            <ReportPostCard data={item} />
          ) : tabs[1].isActive ? (
            <AccountCard data={item} />
          ) : tabs[2].isActive ? (
            <PlacesCard data={item} />
          ) : (
            tabs[3].isActive && <GuideCard data={item} />
          )
        }
      />
    </View>
  );
};

export default Search;
