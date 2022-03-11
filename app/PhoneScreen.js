import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TouchableHighlight,
  Alert,
  Dimensions,
  SafeAreaView,
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
  Icon,
  Left,
  IconNB,
  Card,
  CardItem,
  Right,
  Spinner,
  Thumbnail,
  Body,
} from 'native-base';
import axios from 'axios';


import { TextInput } from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist';
import AsyncStorage from '@react-native-community/async-storage';
import {Grid, Row, Col} from 'react-native-easy-grid';
import PhoneInput from 'react-native-phone-number-input';
import {ProgressDialog} from 'react-native-simple-dialogs';
import Toast from 'react-native-simple-toast';
const deviceWidth = Dimensions.get('window').width;
import {WebView} from 'react-native-webview';
import {Linking} from 'react-native';
const {width, height} = Dimensions.get('window');
const PhoneScreen = ({route, navigation}) => {
  const {tok, sel_url, payments, order} = route.params;
  const [userP, setUserP] = useState('');

  const handleSubmitPress2 = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:+255716974357';
    } else {
      phoneNumber = 'telprompt:+255716974357';
    }

    Linking.openURL(phoneNumber);
  };

  const handleWhatsapp = () => 
  {
    Linking.openURL('whatsapp://send?text=hello&phone=255716974357');
  };


  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      _retrieveData();
    });

    return unsubscribe;
  }, [navigation]);

  const _retrieveData = async () => {
    try {
      const pvalue = await AsyncStorage.getItem('userPhone');
      if (pvalue !== null) {
        setUserP(pvalue);
      }
    } catch (error) {}
  };

  const mobileHandle = () => {
    Toast.show('Push USSD started');
    axios
      .post('https://www.kapaya.co.tz/walletpayment', {
        certificate:
          '56BC25AA9B79A8D69266EB14A6464D3086E513CF755CF82D8DE722C1555F6E17D558F8963EDB61A704DAFD446ABE44786B066A2C47D3C8B8BC214939C6BCC27B',
        phone: userP,
        transid: payments,
        order_id: order,
      })
      .then(response => {
        Toast.show('Push USSD have been Sent ');
      })
      .catch(error => {
        Toast.show('Fail to Send Push USSD try other number ');
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.gray}}>
      <ScrollView>
        <View style={{flex: 1, marginTop: 0, marginLeft: 0}}>

        <TouchableOpacity  onPress={() => {
  handleWhatsapp();
}}>
            <CardItem
              header
           
             >
          
          <Left>
              <Image
                        source={require('../assets/w.png')}
                        style={{
                          width: 30,
                          height: 30 }}
                      />
               
                  <Text
                    style={{
                      fontFamily: 'Quicksand',
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                      {''}  {''}  {''}TAP TO CHAT WITH PIRA
                  </Text>

              </Left>

              
            </CardItem>

</TouchableOpacity>

<View
  style={{
    borderBottomColor: '#ECEFF1',
    borderBottomWidth: 0.5,
    marginLeft:20
  }}
/>
          <View style={{marginTop: 0, marginLeft: 10, marginRight: 10}}>



            
            <Card style={{flex: 1, borderRadius: 5, width: width - 40}}>
              <CardItem style={{width: width - 40, borderRadius: 5}}>
                <Left>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                      fontFamily: 'Quicksand',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 20,
                      marginBottom: 20,
                    }}>
                   
                    Pira Direct payments is currently supported
                    only by TigoPesa and AirtelMoney other mobile Operator payment if done offline using order token.
                  </Text>
                </Left>
              </CardItem>
            </Card>

            <Card style={{flex: 1, borderRadius: 5, width: width - 40}}>
              <CardItem style={{width: width - 40, borderRadius: 5}}>
                <Left>
                  <Image
                    source={require('../assets/t.png')}
                    style={{width: '50%', resizeMode: 'contain', height: 50}}
                  />
                </Left>
                <Right>
                  <Image
                    source={require('../assets/a.png')}
                    style={{width: 30, resizeMode: 'contain', height: 30}}
                  />
                </Right>
              </CardItem>
            </Card>


            <Card style={{flex: 1, borderRadius: 5, width: width - 40}}>
              <CardItem style={{width: width - 40, borderRadius: 5}}>
                <Left>
                  <Body>
                    <Text style={styles.capturebtntxt1} uppercase={false}>
                      {' '}
                      {''}PAY NUMBER
                    </Text>



<TextInput
      label="Phone Number"
      autoFocus={true}
      mode={'outlined'}
      outlineColor="grey"
      keyboardType="numeric"
      underlineColor="grey"
      value={userP}
      onChangeText={text => etUserP(text)}
      style={styles.TextStyle}
    />




                  </Body>
                </Left>
              </CardItem>

              <TouchableHighlight>
                <Button
                  style={styles.capturebtn5}
                  onPress={() => {
                    mobileHandle();
                  }}>
                  <Text style={styles.capturebtntxt} uppercase={false}>
                    {' '}
                    {''}COMPLETE PAYMENT
                  </Text>
                </Button>
              </TouchableHighlight>

              <Text
                style={{
                  color: '#03A9F4',
                  textAlign: 'center',
                  fontSize: 13,
                  fontFamily: 'Quicksand',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                {' '}
                Please unlock your phone and wait for pin request
              </Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    margin: 10,
  },
  capturebtn5: {
    marginTop: 5,
    borderColor: '#000',
    backgroundColor: '#000',
    borderWidth: 0,
    marginLeft: 35,
    marginRight: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth - 100,
  },

  TextStyle:
  {
      color:'#fff',
      height:50,
      borderRadius: 2,
      backgroundColor:'#fff',
      paddingBottom: 5,
      paddingTop: 5

  },
  dateTime: {
    paddingTop: 20,
  },
  generalCart: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 15,
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quantityText: {
    flex: 1,
    flexDirection: 'row',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#000',
    padding: 10,
    width: 150,
    height: 40,
  },

  input: {
    borderWidth: 0.3,
    borderColor: '#CE4036',
    fontSize: 20,
    fontFamily: 'Quicksand',
    width: deviceWidth - 100,
    height: 45,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 150,
    borderRadius: 1,
    color: '#000',
  },

  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#EA4135',
    padding: 10,
    width: 150,
    height: 40,
  },
  buttonDisable: {
    backgroundColor: '#cccccc',
    color: '#666666',
    alignItems: 'center',
    padding: 10,
    width: 150,
    height: 40,
    marginLeft: 20,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  decreaseButton: {
    height: 30,
    width: 30,
    backgroundColor: 'rgba(27,31,35,0.05)',
  },
  increaseButton: {
    height: 30,
    width: 30,
    backgroundColor: 'rgba(27,31,35,0.05)',
  },

  capturebtntxt: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Quicksand',
  },

  capturebtntxt1: {
    textAlign: 'left',
    fontSize: 15,
    color: '#000',
    fontWeight:"bold",
    margin:20,
    fontFamily: 'Quicksand',
  },

  capturebtntxt2: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#000',
    fontFamily: 'Quicksand',
  },

  capturebtn2: {
    elevation: 0,
    borderColor: '#000',
    backgroundColor: '#EA4135',
    borderWidth: 0,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
});
