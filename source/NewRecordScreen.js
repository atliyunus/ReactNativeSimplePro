import React, {  useState } from 'react';
import {  View, Text,StyleSheet ,TextInput,SafeAreaView,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function NewRecordScreen({navigation}) {
  
  const [textNameInputValue, setNameTextInputValue] = useState('');
  const [textJobInputValue, setJobTextInputValue] = useState('');
  const [textAboutInputValue, setAboutTextInputValue] = useState('');
  const [textLinkInputValue, setLinkTextInputValue] = useState('');
  const [getValue, setGetValue] = useState('');

  saveValueFunction =async() => {
    
    const existingCharacters = await AsyncStorage.getItem('array');
    const parsed=JSON.parse(existingCharacters);

    //diziye eklenen last id'yi al
    const array_last_id=parsed[parsed.length-1].id;
   
    const last_id=Number(array_last_id) + 1;
    
let array = {
        id : last_id,
        name : textNameInputValue,
        job : textJobInputValue,
        about : textAboutInputValue,
        link : textLinkInputValue,
      };

     
      let newCharacter = JSON.parse(existingCharacters);
      if( !newCharacter ){
        newPronewCharacterduct = []
        }
        newCharacter.push( array )
      
      await AsyncStorage.setItem('array', JSON.stringify(newCharacter) )
        .then( ()=>{
        alert('It was saved successfully')

        navigation.navigate('Home2')

        } )
        .catch( ()=>{
        console.log('There was an error saving the product')
        } )
           
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container2}>
        <Text style={styles.titleText}>
          Add New Character
        </Text>
        <TextInput
          placeholder="Name Surname"
          value={textNameInputValue}
          onChangeText={(data) => setNameTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Job Title"
          value={textJobInputValue}
          onChangeText={(data) => setJobTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="About Him/Her"
          value={textAboutInputValue}
          onChangeText={(data) => setAboutTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Image Link"
          value={textLinkInputValue}
          onChangeText={(data) => setLinkTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Add Character
          </Text>
        </TouchableOpacity>
        
        <Text style={styles.textStyle}>
          {getValue}
        </Text>
        
        <Text style={styles.textStyle}>
          {getValue}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default NewRecordScreen;



const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    paddingTop: 22,
    marginBottom:250,
   }, 
  
   containerButton: {
    flex: 1,
    paddingTop: 22,
    
   }, 

   item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }, 
    image: {
      resizeMode: "contain",
      height: 200,
      width: 200,
      },
      nameText:{
        textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginTop: 0,
          width: 250,
      },
      jobText:{
        textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 23,
          marginTop: 0,
          width: 250,
          color:'gray'
      },
      paragraphText:{
        fontSize: 18,
        textAlign: 'center',
        marginTop:0,
      },

      container2: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
      },
      titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
      },
      textStyle: {
        padding: 10,
        textAlign: 'center',
      },
      buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        marginTop: 32,
        minWidth: 250,
      },
      buttonTextStyle: {
        padding: 5,
        color: 'white',
        textAlign: 'center',
      },
      textInputStyle: {
        textAlign: 'center',
        height: 40,
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'black',
      },

  });