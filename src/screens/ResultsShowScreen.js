import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';
import { useEffect, useState } from 'react';

const ResultsShowScreen = ({route}) => {
  const [result, SetResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const id =route.params.id ;
  
  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      SetResult(response.data);
    } catch (error) {
      setErrorMessage("Something went wrong!");
      console.log(error)
    }
  }

  useEffect(() => {
    getResult(id);
  }, [])
  
  if(!result) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Text>Loading...</Text>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
    )
  }

  return (
    <View>
      
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    marginLeft: 15,
    marginVertical: 5
  },
  image: {
    width: 200,
    height: 200,
  }
});

export default ResultsShowScreen