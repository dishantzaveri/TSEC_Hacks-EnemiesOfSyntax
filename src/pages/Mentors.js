// /* eslint-disable react-hooks/exhaustive-deps */
// import React, {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
//   StatusBar,
// } from 'react-native';
// import axios from 'axios';
// import {Card} from '../components/MentorMentees';
// import {SearchBar} from '../components/SearchBar';
// import {useSelector} from 'react-redux';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// const Mentors = ({navigation}) => {
//   const [person, setPerson] = useState(['']);
//   const [loading, setLoading] = useState(true);
//   const [text, setText] = useState('');
//   const [mentors, setMentors] = useState([]);
//   const {user} = useSelector(state => state.user);
//   // useEffect(() => {
//   //   if (text === '') getMentorsList();
//   // }, [text]);
//   // const getMentorsList = async () => {
//   //   setLoading(true);
//   //   console.log(user?.token);
//   //   var config = {
//   //     method: 'get',
//   //     url: 'http://127.0.0.1:8000/account/mentors_list/',
//   //     headers: {
//   //       Authorization: `Token ${user?.token}`,
//   //       Cookie:
//   //         'csrftoken=o4q1Ihf3JTBVbPIRuFvCtHZVT3RHp0X8; sessionid=0rx0ut9910ocx5ggaz1l6en6khbzxg1n',
//   //     },
//   //   };

//   //   axios(config)
//   //     .then(function (response) {
//   //       console.log(response.data);
//   //       setMentors(response.data);
//   //       setLoading(false);
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // };
//   // const getSearchedMentors = async () => {
//   //   var data = new FormData();
//   //   data.append('expertise', 'Tech');
//   //   var myHeaders = new Headers();
//   //   myHeaders.append('Authorization', `Token ${user?.token}`);
//   //   myHeaders.append(
//   //     'Cookie',
//   //     'csrftoken=o4q1Ihf3JTBVbPIRuFvCtHZVT3RHp0X8; sessionid=0rx0ut9910ocx5ggaz1l6en6khbzxg1n',
//   //   );
//   //   var config = {
//   //     method: 'post',
//   //     url: 'http://127.0.0.1:8000/account/search_mentors/',
//   //     headers: myHeaders,
//   //     data: data,
//   //   };

//   //   axios(config)
//   //     .then(function (response) {
//   //       console.log(JSON.stringify(response.data));
//   //       setMentors(response.data);
//   //       setLoading(false);
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // };
//   // const renderItem = ({item}) => {
//   //   return <Card navigation={navigation} data={item} />;
//   // };
//   return (
//     <SafeAreaView
//       style={{
//         width:'100%',
//         flex: 1,
//         // backgroundColor: 'white',
//         padding: 10,
//         alignSelf: 'center',
//         elevation: 3,
//         // backgroundColor: '#fff',
//         shadowOffset: {width: 3, height: 3},
//         shadowColor: '#333',
//         shadowOpacity: 0.2,
//         shadowRadius: 1,
//       }}>
//       <FlatList
//       >
        
//       </FlatList>
      
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   headerView: {
//     alignSelf: 'center',
//     marginVertical: 10,
//   },
//   headerText: {
//     fontSize: 27,
//     fontWeight: 'bold',
//     color: '#ffc400',
//   },
//   textInput: {
//     textAlign: 'center',
//     height: 42,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 8,
//   },
//   searchView: {
//     marginVertical: 10,
//     flexDirection: 'row',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottom: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

// export {Mentors};


import React, {useEffect, useState} from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity , ActivityIndicator} from 'react-native';
import Tts from 'react-native-tts';
import RNShake from 'react-native-shake';
import Mailer from 'react-native-mail';
import RNFS from 'react-native-fs';
import Voice from '@react-native-voice/voice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Apple',
    description: 'Develop and maintain iOS and macOS apps',
    logo: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Google',
    description: 'Define product strategy and drive product development',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZfEWHjOuKYnfVPZ12VuNhnl3mRdkrXypresw2aP4ZA&s',
  },
  {
    id: 3,
    title: 'Designer',
    company: 'Facebook',
    description: 'Create and iterate on product designs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Microsoft',
    description: 'Build and implement machine learning models',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQ5o5AsVIoMkANy-BpZWBQmUnqAV1wVq9Hzv8uwJpjw&s',
  },
  {
    id: 5,
    title: 'Operations Manager',
    company: 'Amazon',
    description: 'Optimize and scale operations processes',
    logo: 'https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695',
  },
];

const JobListing = ({ title, company, description, logo }) => (
  <View style={styles.jobContainer}>
    <View style={styles.logoContainer}>
      <Image source={{uri: logo}} style={styles.logo} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.jobTitle}>{title}</Text>
      <Text style={styles.jobCompany}>{company}</Text>
      <Text style={styles.jobDescription}>{description}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);


// const sendEmail = () => {
//   const options = {
//     subject: 'Subject of the Email',
//     body: 'Message body of the email',
//     recipients: ['talkshrey@gmail.com'],
//     attachments: [
//       RNFS.DocumentDirectoryPath +  '/src/assets/resume.pdf',
//     ],
//   };

//   Mailer.mail(options, (error, event) => {
//     if (error) {
//       console.error(error);
//     }
//   });
// };

const Mentors = () => {



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
    if(e.value[0]=="designer role"){
        // sendEmail();
    }
    // setIsloading(false);
    // if (e.value[0].includes('resume')) {
    //   console.log("tp");
    //   setIsloading(false);
    //   // Voice.destroy().then(Voice.removeAllListeners);
    //   navigation.navigate('Resume1');
    // }
    // else if(e.value[0]=="go to video call page"){
    //   setIsloading(false);
    //   Voice.destroy().then(Voice.removeAllListeners);
    //   navigation.navigate('VideoCall');
    // }else if(e.value[0]=="open drawer"){
    //   navigation.openDrawer();
    // }
    console.log(e.value[0]+"aaaa");

  };

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



  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      // Your code here...
      console.log('Shake!');
    })
    Tts.getInitStatus().then(() => {
      Tts.speak('Here are some of the jobs of your interest!! The first job is Software Engineer at Apple, another one is of Product Manager at Google and the third one is of Designer at Facebook. These jobs are most suitable according to your profile. To apply on the jobs shake your device and speak the job title and company name or you can click below on the mic icon.');
    });
   
    // return () => {
    //   // Your code here...
    //   // Tts.removeEventListener('tts-finish', (event) => {
    //   //   console.log('finished', event);
    //   // });
    // }
  }, []);

  return(
    <View style={{flex:1}}>
    <Text style={{color:"#007bff", fontSize:25, marginLeft:20, marginBottom:20, marginTop:10}}>Here are some of the jobs of your interest!!</Text>
    
    <FlatList
    data={jobs}
    renderItem={({ item }) => (
      <JobListing
        title={item.title}
        company={item.company}
        description={item.description}
        logo={item.logo}
      />
    )}
    keyExtractor={item => item.id.toString()}
  />
   

  <Footer/>
  </View>
  );

  
    };

const styles = StyleSheet.create({
  jobContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  logoContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"black"
  },
  jobCompany: {
    fontSize: 14,
    color: 'gray',
  },
  jobDescription: {
    fontSize: 12,
    color: '#333',
  },
  buttonContainer: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: '#B9F3FC',
    marginTop: hp('0.01%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export {Mentors};
