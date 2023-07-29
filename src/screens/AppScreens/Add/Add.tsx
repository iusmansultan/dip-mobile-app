import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import {
  HOW_TO_PLAY,
  EXPANSION,
  SETTINGS,
  PLAY,
} from '../../../helpers/RoutesName';

const Add: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}>
        {[1, 2, 3].map((item, index) => {
          return (
            <View key={index}>
              <PostCard />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Add;

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

const PostCard = () => {
  const imageUrl =
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg';
  return (
    <View style={styles.postCard}>
      <Image source={{uri: imageUrl}} style={styles.image} />

      <Text style={styles.userName}>User Name</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
        vulputate se... more
      </Text>
    </View>
  );
};
