import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Linking,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';
import { height, width } from '../Consts';
import logo from '../assets/mentordots.png';
import { useTheme } from '@react-navigation/native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import Voice from '@react-native-voice/voice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import photo1 from '../assets/photo1.png';

const WelcomePage = ({ navigation }) => {
  const { colors } = useTheme();
  const githubFindMentor =
    'https://github.com/dishantzaveri/SIH-TeamEnemiesOfSyntaxx';
  const joinNow =
    'https://docs.google.com/forms/d/e/1FAIpQLSc3uWpEeBUCXMoGAJ5qm31p9URBppxXT5L4RJFrTOJee9TFjQ/viewform';
  const discorUrl = 'https://discord.gg/4fNygpXsaJ';

  const imageData = [
    { id: 1, source: require('../assets/photo1.png') },
    { id: 2, source: require('../assets/photo2.png') },
    { id: 3, source: require('../assets/photo3.png') },
    { id: 4, source: require('../assets/photo4.png') },
    { id: 5, source: require('../assets/photo5.png') },
    { id: 6, source: require('../assets/photo6.png') },
    // add more images here
  ];

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
    }
    console.log(e.value[0]);

  };

  function renderItem({ item }) {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
        <Image style={styles.image} source={item.source} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('VideoCall')
        }>
        <Text style={styles.text1Style}>Arts by our Artisians</Text>
      </TouchableOpacity>



      <ScrollView>
        <FlatList
          nestedScrollEnabled
          data={imageData}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />

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
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    // alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  text1View: {
    marginTop: 150,
  },
  text1Style: {
    margin: 15,
    fontSize: 25,
    color: '#007bff',
    fontWeight: 'bold',
  },
  iconView: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconStyle: {
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').height / 22,
  },
  headerText: {
    color: 'grey',
    fontSize: 17,
    fontWeight: '600',
  },
  discordView: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.8,
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 22,
  },
  webView: {
    borderRadius: 10,
  },
  discordTextView: {
    marginHorizontal: 5,
    marginBottom: 15,
  },
  linearGradient: {
    height: height * 0.07,
    width: width * 0.3,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: 300,
    margin: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  jobsText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
  },
  footer: {
    width: wp('100%'),
    height: hp('8%'),
    backgroundColor: '#B9F3FC',
    marginTop: hp('0.01%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export { WelcomePage };
