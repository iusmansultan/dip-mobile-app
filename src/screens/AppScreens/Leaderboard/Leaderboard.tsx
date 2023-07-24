import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import InputField from '../../../components/InputField/InputField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {SIGNUP, FORGOT_PASSWORD} from '../../../helpers/RoutesName';

const Leaderboard: React.FC = () => {
  const userData = [
    {
      id: 1,
      avatar:
        'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      userName: '@johndoe',
      points: 145,
      score: 1559,
    },
    {
      id: 2,
      avatar:
        'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      userName: '@johndoe',
      points: 145,
      score: 1559,
    },
    {
      id: 3,
      avatar:
        'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      userName: '@johndoe',
      points: 145,
      score: 1559,
    },
    {
      id: 4,
      avatar:
        'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      userName: '@johndoe',
      points: 145,
      score: 1559,
    },
    {
      id: 5,
      avatar:
        'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      userName: '@johndoe',
      points: 145,
      score: 1559,
    },
  ];
  return (
    <ImageBackground
      source={require('../../../assets/images/authBg.png')}
      style={styles.container}>
      <Text style={styles.labelText}>Leaderboard</Text>

      <View style={styles.positionContainer}>
        <View style={styles.containerLeft}></View>
        <View style={styles.containerCenter}></View>
        <View style={styles.containerRight}></View>
      </View>
      <UserPointTile data={userData[0]} isShowDivider={false} />

      <View style={styles.userDataContainer}>
        <FlatList
          data={userData}
          renderItem={item => <UserPointTile data={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </ImageBackground>
  );
};

export default Leaderboard;

const renderSeparator: React.FC = () => <View style={styles.divider} />;

const UserPointTile: React.FC<userTitleProps> = ({
  data,
  isShowDivider = true,
}) => {
  if (isShowDivider) {
    return (
      <View style={styles.userTileContianer}>
        <View style={styles.userInfoContainer}>
          <Image
            source={{
              uri: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
            }}
            style={styles.userAvatar}
          />
          <View>
            <Text style={styles.userNameText}>@username</Text>
            <Text style={styles.userPointsText}>375 Points</Text>
          </View>
        </View>
        <View style={styles.endContainer}>
          <Text style={styles.scoreText}>1559</Text>
          <Image
            source={require('../../../assets/icons/downIcon.png')}
            style={styles.indicatorIcon}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.userTileContianer, styles.containerBorder]}>
      <View style={styles.userInfoContainer}>
        <Image
          source={{
            uri: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
          }}
          style={styles.userAvatar}
        />
        <View>
          <Text style={styles.userNameText}>@username</Text>
          <Text style={styles.userPointsText}>375 Points</Text>
        </View>
      </View>
      <View style={styles.endContainer}>
        <Text style={styles.scoreText}>1559</Text>
        <Image
          source={require('../../../assets/icons/downIcon.png')}
          style={styles.indicatorIcon}
        />
      </View>
    </View>
  );
};

type userTitleProps = {
  data: any;
  isShowDivider?: boolean;
};
