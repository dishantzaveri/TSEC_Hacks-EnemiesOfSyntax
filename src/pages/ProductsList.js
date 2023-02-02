import React, {useEffect, useState} from 'react';
import { View, Text,TouchableOpacity, FlatList, StyleSheet,ActivityIndicator } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import Voice from '@react-native-voice/voice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export function ProductsList ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }

  console. disableYellowBox = true;
  
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [results, setResults] = useState([]);
  const startRecognition = async () => {
    setIsloading(true);
    setResults([]);
    try {
      await Voice.start('en-US');
      console.log("started");
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognition = async () => {
    try {
      await Voice.stop();
      setIsloading(false);
    } catch (e) {
      console.error(e);
    }
  };

  Voice.onSpeechResults = (e) => {
    setResults(e.value);
    if (e.value[0].includes('resume')) {
      console.log("tp");
      navigation.navigate('Resume1');
    }
    else if(e.value[0]=="go to video call page"){
      navigation.navigate('VideoCall');
    }else if(e.value[0]=="open drawer"){
      navigation.openDrawer();
    }
    console.log(e.value[0]);

  };
  
  useEffect(() => {
    setProducts(getProducts());
  });

  const Footer=()=>(
    <TouchableOpacity
          onPress={isloading ? stopRecognition : startRecognition}>
          <View style={styles.footer}>
            {isloading ? <ActivityIndicator size="large" color="red"></ActivityIndicator> :
              <Ionicons
                name='mic'
                size={50}
                color="#1D1042">
              </Ionicons>}
          </View>
        </TouchableOpacity>
  )
  
  return (
    <View style={{flex:1}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("VideoCall")
        }>
        <Text style={styles.text1Style}>Arts by our Artisians</Text>
      </TouchableOpacity>
      <View style={{flex:1}}>

    <FlatList 
    // ListFooterComponent={<Footer/>}
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    
    </View>
    <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  footer: {
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: '#B9F3FC',
    marginTop: hp('0.01%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1Style: {
    margin: 15,
    fontSize: 25,
    color: '#007bff',
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
