import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import SearchField from '../../../components/SearchField/SearchField';
import styles from './Styles';
import ReportCard from '../../../components/ReportCard/ReportCard';
import AccountCard from '../../../components/AccountCard/AccountCard';
import PlacesCard from '../../../components/PlacesCard/PlacesCard';
import GuideCard from '../../../components/GuideCard/GuideCard';

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

  const reportsData = [];
  const accountData = [{id: 1}, {id: 2}, {id: 3}];
  const placesData = [{id: 1}, {id: 2}, {id: 3}];
  const guidesData = [{id: 1}, {id: 2}, {id: 3}];

  const onTabPress = (id: number) => {
    const updatedTabs = tabs.map((item: any) =>
      item.id === id ? {...item, isActive: true} : {...item, isActive: false},
    );

    setTabs(updatedTabs);
  };

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
        renderItem={() =>
          tabs[0].isActive ? (
            <ReportCard />
          ) : tabs[1].isActive ? (
            <AccountCard />
          ) : tabs[2].isActive ? (
            <PlacesCard />
          ) : (
            tabs[3].isActive && <GuideCard />
          )
        }
      />
    </View>
  );
};

export default Search;


