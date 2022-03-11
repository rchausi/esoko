import React from 'react';
import {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  Alert,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Item,
  Label,
  Input,
  Form,
  Button,
  Left,
  IconNB,
  Card,
  CardItem,
  Right,
  Thumbnail,
  Body,Fab 
} from 'native-base';

import axios from 'axios';
import FastImage from 'react-native-fast-image';
import Icon from "react-native-feather1s";
import AsyncStorage from '@react-native-community/async-storage';
import {Grid, Row, Col} from 'react-native-easy-grid';
import Toast from 'react-native-simple-toast';
const deviceWidth = Dimensions.get('window').width;
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import { CartProvider, useCart } from "react-use-cart";
import Spinner from 'react-native-loading-spinner-overlay';
import {Linking} from 'react-native';
const customData = require('./data.json');
const HomeScreen = ({navigation}) => {
  const [userItems, setUserItems] = useState([]);
  const [loading, setLoading] = useState(false);
 

  const { addItem } = useCart();
  const { totalUniqueItems } = useCart();

 

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
   
    });

    return unsubscribe;
  }, [navigation]);


  if (customData) {
    return (


      
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
   <StatusBar backgroundColor="#388E3C" barStyle="light-content" />
        <View style={{flex: 1}}>

          
          <Spinner
            visible={loading}
            textContent={'esoko ..'}
              textStyle={{color: '#388E3C', size: 'small', fontSize:13}}
          />

          <ScrollView scrollEventThrottle={16}>



      

            <View
              style={{
                borderBottomColor: '#ECEFF1',
                borderBottomWidth: 0.9,
              }}
            />

  

            <View
              style={{
                borderBottomColor: '#ECEFF1',
                borderBottomWidth: 0.9,
              }}
            />

            <View style={{flex: 1, paddingTop: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 10,
                  fontFamily: 'Quicksand',
                  color:"#000"

                }}>
               Products List
              </Text>


<View  style={{flex: 1, paddingTop: 10 ,marginLeft:20}}>

              <TouchableOpacity  style={{marginLeft:10,backgroundColor:"#000",width:50,height:50,marginRight:15,borderRadius: 50, }}  >
                      <Icon
  name="shopping-cart"
  size={20}
  
  color="#388E3C"
  thin={false}
/>
<Text
                style={{
                  color:"#fff"

                }}>   {totalUniqueItems}
                </Text>
            
                      </TouchableOpacity>


                      </View>



            </View>
            <View
              style={{
                paddingHorizontal:10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {customData.map(item => {
                return (
                  <TouchableOpacity>
                    <View
                      style={{
                        width: width / 2 - 30,
                        height: width / 2 - 10,
                        borderWidth: 0.5,
                        borderColor: '#dddddd',
                        borderRadius: 2,
                        marginTop: 15,
                        backgroundColor: '#fff',
                        shadowColor: "#212121",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4.84,
                        
                        elevation: 5,
                      }}>


                      <View style={{flex: 2}}>
                        <Image
                          resizeMode={FastImage.resizeMode.contain}
                          style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'contain',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            marginTop: 5,
                          }}
                          source={require('../assets/image.png')}
                        />
                      </View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'flex-start',
                          justifyContent: 'space-evenly',
                          paddingLeft: 10,
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Quicksand',
                            fontSize: 15,
                            fontWeight: 'bold',
                          }}
                          numberOfLines={1}>
                          {item.name}
                        </Text>


                        <Text
                          style={{
                            color: '#000',
                            fontFamily: 'Quicksand',
                            fontSize: 12,
                          }}
                          numberOfLines={1}>
                          {item.detail}
                        </Text>
                      
                      


                      </View>





                      <Row>
<Col>
<View style={{marginTop:10,marginRight:10,marginLeft:10}}>
            <TouchableOpacity   onPress={() => {
    addItem(p);
      Toast.show('Item Added to Cart ');

       
  }}>
  <Text
                          style={{
                            fontSize: 14,
                            fontFamily: 'Quicksand',
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#388E3C',
                          }}>
                          {' '}
                        
                          {(item.price)}
                        </Text>
            </TouchableOpacity>


</View>
</Col>
<Col>
<View style={{marginTop:10,marginRight:10,marginLeft:10}}>
    <TouchableOpacity   onPress={() => {
    addItem(item);
    Toast.show('Item Added to Cart ');
         //navigation.push('Cart')
       
  }}>
   
<View style={{backgroundColor:'#388E3C',width:35,height:30 ,borderRadius:5}}>
                   <Icon 
                        name="shopping-cart"
                        color="#fff"
                        size={25}
                    />
              </View>   
            </TouchableOpacity>

</View>
</Col>
</Row>













                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Spinner
              visible={loading}
              textContent={'pira.co.tz ..'}
              textStyle={{color: '#388E3C', size: 'small', fontSize:13}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hoh2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Quicksand',
    fontSize: 13,
    fontWeight: 'normal',
  },

  hoh2a: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Quicksand',
    fontSize: 15,
    fontWeight: 'normal',
  },
  hoh21: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#15568F',
    fontFamily: 'Quicksand',
    fontSize: 12,
    fontWeight: 'normal',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  mb10: {
    marginBottom: 10,
  },

  he: {
    backgroundColor: '#2355A1',
  },
  seprator: {
    marginBottom: 10,
    marginTop: 10,
  },

  mt: {
    fontSize: 12,
  },
  mh: {
    fontSize: 25,
    fontFamily: 'Source Sans Pro',
  },

  gridl2: {
    backgroundColor: '#fff',
  },
  gridl1: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: '#2355A1',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff',
  },

  inputs: {
    height: 45,
    marginLeft: 25,
    flex: 1,
    color: '#fff',
  },

  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    width: '80%',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#fff',
  },
  loginText: {
    color: '#D21B6D',
    fontWeight: 'bold',
    fontSize: 15,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
  bigBlue: {
    color: '#263238',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
  },
  login: {
    marginTop: 15,
  },
  seprator: {
    marginBottom: 10,
    marginTop: 10,
  },
});
