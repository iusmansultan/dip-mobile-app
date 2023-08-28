import {View, ActivityIndicator, Modal} from 'react-native';
import React from 'react';
import styles from './Styles';
import {useApiContext} from '../../contextApi/ApiContext';

const Loader = () => {
  const {loading, setLoading, error, setError} = useApiContext();

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <Modal transparent={true} visible={true}>
          <View style={styles.Indicator}>
            <View style={styles.rectangle}>
              <ActivityIndicator
                style={{alignSelf: 'center'}}
                animating={true}
                size={'small'}
                color="white"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return <></>;
};

export default Loader;
