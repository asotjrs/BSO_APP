import React,{useState,useEffect} from 'react';
import {View, Text,Image,useWindowDimensions,StyleSheet,FlatList} from 'react-native';
import {Auth} from 'aws-amplify';
import Logo from '../../../assets/images/bso_logo.png';
import ProductItem from '../../components/ProductItem';



const index = () => {
  const {height} = useWindowDimensions();
  const [data, setData] = useState();


  useEffect( () => {
     fetch("http://44.196.164.217:5000/properties").then((res)=>res.json()).then((dt)=>setData(dt));

    

  }, [])

  console.log("==================",data)


  


  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={{flex: 1}}>
    
    <FlatList
        data={data}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
     <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 40,
          fontSize: 24,
          borderColor:"red",
        }}>
        Sign out
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  logo: {
    marginLeft: 40 ,
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});


export default index;
