import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';

function DetailScreen({route,navigation}) {
  
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <View style={{width: 100, height: 200}}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: route.params.avatar,
        }}
      />
      </View>

      <View style={{width: 200, height: 50,alignItems: 'center'}}>
      <Text>{route.params.name}</Text>
      <Text>{route.params.job}</Text>
      </View>

    <View >
      <Text>{route.params.about}</Text>
    </View>

    </View>
    

  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 200,
    resizeMode: 'stretch',
  },
  logo: {
    width: 66,
    height: 58,
  },
});