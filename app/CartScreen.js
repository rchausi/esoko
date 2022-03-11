
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
    FlatList,Linking,
  KeyboardAvoidingView,TouchableHighlight,Alert,Dimensions,SafeAreaView
} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';

import { TextInput,Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressDialog } from 'react-native-simple-dialogs';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from "react-native-feather1s";



import { CartProvider, useCart } from "react-use-cart";
const CartScreen = ({route,navigation}) => 
{
const { width, height } = Dimensions.get("window");


  const { addItem } = useCart();
  const { cartTotal } = useCart();


  const
    {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


    React.useEffect(() => 
  {
     const unsubscribe = navigation.addListener('focus', () => 
     {

       });

    return unsubscribe;

  }, [navigation]);




if (isEmpty)
{
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
   

          <View
            style={{
              flex: 1,
              borderRadius: 5,
              width: width - 50,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <View style={{width: width - 70, borderRadius: 5}}>
              <Text
                style={{
                  flex: 1,
                  color: '#000',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                {' '}
                Your cart is Empty !{' '}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

else
{

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

      <ScrollView>


        {items.map(item => (
      <View>
            <View style={{width: width - 70}}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://pira.co.tz/assets/upload/' + item.image,
                }}
              />

              <Text
                style={{
                  marginTop: 20,
                  marginBottom:10,
                  marginLeft: 20,
                  color: '#000',
                  fontSize: 15,
                }}>
                {' '}
                {item.name} {'\n'} Quantity - {item.quantity} {'\n'} Amount -{' '}
                {item.quantity * item.price}{' '}
              </Text>
            </View>

            <View style={{width: width - 70, borderRadius: 5}}>
              <Grid>
                <Row>
                  <Col>
                    <Button
                      style={{
                        backgroundColor: '#fff',
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                      }}
                      onPress={() => removeItem(item.id)}>
                      <Icon
                        name="trash"
                        size={20}
                        color="#C70101"
                        style={{paddingLeft: 8}}
                      />
                    </Button>
                  </Col>

                  <Col>
                    <Button
                      style={{
                        backgroundColor: '#fff',
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                      }}
                      onPress={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }>
                      <Icon
                        name="minus"
                        size={20}
                        color="#000"
                        style={{paddingLeft: 8}}
                      />
                    </Button>
                  </Col>

                  <Col>
                    <Button
                      style={{
                        backgroundColor: '#fff',
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                        paddingTop: 2,
                      }}
                      onPress={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }>
                      <Icon
                        name="plus"
                        size={20}
                        color="#81C784"
                        style={{paddingLeft: 8}}
                      />
                    </Button>
                  </Col>
                </Row>
                  <Text
                style={{
                  marginBottom:10,
                }}>{' '}
              </Text>
              </Grid>
            </View>


          

            <View
  style={{
    borderBottomColor: '#ECEFF1',
    borderBottomWidth: 0.5,
    marginLeft:20
  }}
/>
          </View>
        ))}

        <View
          style={{
            flex: 1,
            borderRadius: 5,
            width: width - 50,
            marginLeft: 20,
            marginRight: 20,
          }}>

          <View style={{width: width - 70, borderRadius: 5}}>
            <Text style={{color:'#000'}}>
              ORDER SUMMARY {'\n'}TOTAL AMOUNT
              {(cartTotal)}
            </Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );

}



};

export default CartScreen;


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container:{
       backgroundColor: '#4527A0',
       width: '100%',
       alignItems: 'center',
   },

     image: {
    width: 50,
height: 50,
borderRadius: 2,
       overflow: 'hidden',
                borderWidth: 0.4,
              resizeMode: "cover",
               borderColor:"#fff"
  },

    title:
  {
    fontSize:18,
    paddingHorizontal: 10,
    color:'#000',
    fontFamily:'Quicksand',
  },


  text: {
    paddingHorizontal: 10,
  },

  cartItems: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  capturebtn:{
   elevation:0,
   borderColor:'#fff',
    backgroundColor: '#EA4135',
   borderWidth:0,
   borderRadius:3,
   justifyContent:'center',
   alignItems:'center',
     width: 150,
     height:50
 },

   button2: {
     alignItems: "center",
     justifyContent: "center",
     textAlign: "center",
     backgroundColor: "#EA4135",
     marginTop:10,
     width: 110,
     height: 35,
     marginLeft:10,
      marginRight:10
   },

   button3: {
     alignItems: "center",
     justifyContent: "center",
     textAlign: "center",
     backgroundColor: "#000",
     marginTop:10,
     width: 110,
     height: 35,
     marginLeft:10,
      marginRight:10
   },

   codebitWrap: {
       borderBottomWidth: 1,
       borderBottomColor: '#4527A0',
       width: '100%',
       backgroundColor: 'transparent',
       height: 60,
       alignItems: 'center',
   },

   infoWrap: {
       flexDirection: 'row',
       marginTop: 3
   },

   icons: {
       height: 18,
       width: 18,
       marginRight: 10,
       marginTop: 4
   },

   titleText: {
       color: '#000',
       fontSize: 21,
       marginTop: 14
   },

   mainImg: {
       height: 400,
       alignItems: 'center',
       width: '100%',
   },
   capturebtntxt:{
     alignSelf:'center',
     fontSize:12,
     color:'#000',
     fontFamily:'Quicksand',
   },


   cbitText: {
      color: '#fff',
      marginTop: 15,
      marginBottom: 25,
      fontSize: 13,
      width: '80%',
      textAlign: 'center'
   },

   imgBorder: {
       borderWidth: 1,
       borderRadius: 70,
       marginTop: 30,
       padding: 12,
       borderColor: '#311B92',
       backgroundColor: '#311B92',
       alignContent: 'center'
   },

   profileImg: {
       height: 80,
       width: 80,
 },

 imgTitle: {
   height: 60,
   width: 360,
   marginTop: 20
 },

 firstText: {
     color: '#000',
     marginTop: 15,
     marginBottom: 20,
     fontSize: 11,

 },
 secondText: {
   color: '#000',
     marginTop: 4,
     fontSize: 13,

 },

 button: {
     color: '#fff',
     marginTop: 60,
     fontSize: 25
 },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width:'100%',
    height:'100%',
    margin:10
  },
  dateTime: {
    paddingTop: 20,
  },
  generalCart: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 15,
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "center",
  },
  quantityText: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    height: 40,
    width: 50,
    borderWidth: 1,
    borderColor: "rgba(27,31,35,0.05)",
    padding: 10,
    backgroundColor: "rgba(27,31,35,0.05)",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#EA4135",
    padding: 10,
    width: 150,
    height: 40,
  },

  button2: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#000",
    padding: 10,
    width: 150,
    height: 40,
  },
  buttonDisable: {
    backgroundColor: "#cccccc",
    color: "#666666",
    alignItems: "center",
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
    backgroundColor: "rgba(27,31,35,0.05)",
  },
  increaseButton: {
    height: 30,
    width: 30,
    backgroundColor: "rgba(27,31,35,0.05)",
  },

  capturebtn:{
   elevation:0,
   borderColor:'#000',
    backgroundColor: '#000',
   borderWidth:0,

   borderRadius:3,
   justifyContent:'center',
   alignItems:'center',
     width: 150,
 },

 capturebtntxt:{
   alignSelf:'center',
   fontSize:14,
   color:'#fff',
   fontFamily:'Quicksand',
   marginTop:2,
   marginBottom:2
 },


 capturebtn2:{
  elevation:0,
  borderColor:'#000',
   backgroundColor: '#EA4135',
  borderWidth:0,
  borderRadius:3,
  justifyContent:'center',
  alignItems:'center',
    width: 150,
},

  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 110,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      flexDirection: 'row'
  },


   signIn2: {
      width: 100,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontSize:12
  },
    textSign2: {
      color: '#000',
      fontWeight: 'bold'
  },
  TextStyle:
  {
      color:'#fff',
      height:50,
      borderRadius: 2,
      backgroundColor:'#fff',
      paddingBottom: 5,
      paddingTop: 5

  }

});



