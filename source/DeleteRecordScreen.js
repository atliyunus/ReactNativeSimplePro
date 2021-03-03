import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';

function DeleteRecordScreen({route,navigation}) {

 
    try {
         AsyncStorage.removeItem(route.params.id);
        return true;
    }
    catch(exception) {
        return false;
    }


    /*return (
        <View style={{width: 200, height: 50,alignItems: 'center'}}>
      <Text>{route.params.id}</Text>
      </View>
    );
    */

}

export default DeleteRecordScreen;