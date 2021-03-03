import React, { useEffect, useState } from 'react';
import { FlatList, View, Text,StyleSheet ,TextInput,Image,SafeAreaView,TouchableOpacity,
  ContentThatGoesAboveTheFlatList,
  ContentThatGoesBelowTheFlatList
} from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';



DeleteRow = async (post_id) => {
  try {
    const posts = await AsyncStorage.getItem('array');
    let postsFav = JSON.parse(posts);
    const postsItems = postsFav.filter(function(e){ return e.id !== post_id });
  
    // updating 'posts' with the updated 'postsItems'
    await AsyncStorage.setItem('array', JSON.stringify(postsItems));
  
    alert("Row Deleted");
  } catch(error) {
    console.log('error: ', error);
  }};


function Home2Screen({navigation}) {
    
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    AsyncStorage.getItem('array',(e,i) =>{
    setData(JSON.parse(i))
  }) 

  //API'dan alınan datalar Storage'a kayıtedildi
/*    useEffect(() => {
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

    <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{width: 300, height: 50}} >
    <Text style={styles.item} 
    onPress={() => navigation.navigate('Detail',{name:item.name,job:item.job,avatar:item.avatar,about:item.about})} >
      {item.name}
      </Text>
    </View>

        <View style={{width: 50, height: 50}} >
          <Button title='sil' 
          onPress={ () => DeleteRow(item.id) }></Button>
        </View>
    </View>
    
      </View>
 )
 }}
 />

<View><Button title="New Record" onPress={()=> {navigation.navigate('NewRecord');} }  /></View>


</View>
      )}
      
       
    </View>
  );
}

export default Home2Screen;

const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
      paddingTop: 22,
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