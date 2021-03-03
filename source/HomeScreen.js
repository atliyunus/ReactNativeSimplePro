import React, { useEffect, useState } from 'react';
import { FlatList, View, Text,StyleSheet ,TextInput,Image,SafeAreaView,TouchableOpacity,
  ContentThatGoesAboveTheFlatList,
  ContentThatGoesBelowTheFlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({ navigation }) {
  
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    AsyncStorage.getItem('array',(e,i) =>{
    setData(JSON.parse(i)) 
  })

/*  useEffect(() => {
    fetch('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
      .then((response) => response.json())
      .then((json) => AsyncStorage.setItem('array',JSON.stringify(json)) )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
*/



  return ( 

<View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={styles.containerHome}>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Simpsons:</Text>
 <FlatList
 data={data}
 ListHeaderComponent={ContentThatGoesAboveTheFlatList}
 ListFooterComponent={ContentThatGoesBelowTheFlatList} 
 keyExtractor={(item, index) => index.toString()}
 renderItem={({ item }) => {
 
 return ( 
  <View>
  <Text onPress={() => navigation.navigate('Deneme')} >{item.name} {item.job}</Text>
</View>
 )
 }}
 />
</View>
      )}
      <View><Button title="New Record" onPress={()=> {

        navigation.navigate('NewRecords');

      } }  /></View>
       
    </View>
  );
}

function NewRecordScreen({ navigation }){

  const [textNameInputValue, setNameTextInputValue] = useState('');
  const [textJobInputValue, setJobTextInputValue] = useState('');
  const [textAboutInputValue, setAboutTextInputValue] = useState('');
  const [textLinkInputValue, setLinkTextInputValue] = useState('');
  const [getValue, setGetValue] = useState('');
  const saveValueFunction = () => {
    
    if (textNameInputValue,textJobInputValue,textAboutInputValue,textLinkInputValue) {
      
    

      let array = {
        name : textNameInputValue,
        job : textJobInputValue,
        about : textAboutInputValue,
        link : textLinkInputValue,
      };

    
      setNameTextInputValue('');
      setJobTextInputValue('');
      setAboutTextInputValue('');
      setLinkTextInputValue('');
      

      AsyncStorage.setItem('somekey', JSON.stringify(array));

      alert('Data Saved');
      navigation.navigate('Home');
      
    } else {
      alert('Please fill data');
    }
  };

  getValueFunction = async() => {
    try {
      let name =  await AsyncStorage.getItem('name');
      let job =  await AsyncStorage.getItem('job');
      let about =  await AsyncStorage.getItem('about');
      let link =  await AsyncStorage.getItem('link');
    
    }catch(error) {
      alert(error);
    }
    
    
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
            Add
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            GET VALUE
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

function DetailsScreen({route, navigation}) {
  const { avatar,name,job,about } = route.params;
    //<Text> ID: {route.params.id} </Text>
  return (
    <View style={styles.containerDetail}>
      
       <View style={{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
       <Image style={styles.image} source={{ uri: avatar}} />

      <View><Text style={styles.nameText}>{name}</Text></View>

      <View><Text style={styles.jobText}>{job}</Text></View>

      </View>

      <View><Text style={styles.paragraphText}>{about}</Text></View>

      <DetailScreen/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}  />
        <Stack.Screen name="NewRecords" component={NewRecordScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
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