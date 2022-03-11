import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
  Image,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,ImageBackground
} from 'react-native';
import { TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressDialog } from 'react-native-simple-dialogs';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import { AuthContext } from '../components/context';
import Users from '../auth/users';
import AsyncStorage from '@react-native-community/async-storage';
import {useState, createRef} from 'react';
import Icon from "react-native-feather1s";
import { Linking } from 'react-native';
const {width, height} = Dimensions.get('window');
const SignInScreen = ({route,navigation}) => {

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = React.useContext(AuthContext);
       const handleSubmitPress = () => 
   {

        if (userName) 
    {

 setLoading(true);
 setLoading(false);
 let foundUser="isLogin";
 signIn(foundUser);

 setLoading(false);
    }


  };

  

    return (
      <View style={styles.container}>


<ProgressDialog
        visible={loading}
 
        message="Please, wait..."
        activityIndicatorColor="#388E3C"
            activityIndicatorSize="small"
            style={styles.bottom}
            
        />
          <StatusBar backgroundColor='#000' barStyle="light-content"/>
        <View style={styles.header}>
       

        </View>

      
 

        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >


<Text
          style={[
            styles.title,
            {
              color: "#388E3C",
            },
          ]}>
           eSoko.
        </Text>

            
            <ScrollView>
            <Text style={styles.textSign2}>Email </Text>
     <TextInput
      label="ENTER EMAIL"
      autoFocus={true}
      mode={'flat'}
      placeholderTextColor="black"
      value={userName}
      onChangeText={text => setUserName(text)}
      theme={{ colors: { primary: '#388E3C',underlineColor:'transparent',backgroundColor:'#000',color:"000"}}}
      style={{height: 45,color: 'black',backgroundColor:"#fff",justifyContent:"center",marginTop:10,  borderRadius: 5,overflow: 'hidden',}}
    />


<Text style={styles.textSign2}>Password </Text>
            <TextInput
      label="ENTER PASSWORD"
      mode={'flat'}
      placeholderTextColor="black"
      value={userPassword}
      onChangeText={text => setUserPassword(text)}
      secureTextEntry={true}  

      theme={{ colors: { primary: '#388E3C',underlineColor:'transparent',backgroundColor:'#fff'}}}
      style={{height: 45,color: 'black',backgroundColor:"#fff",justifyContent:"center",marginTop:10, borderRadius: 5,overflow: 'hidden',}}
     
    />


   
                   <View style={styles.button}>
            <TouchableOpacity  onPress={() => {handleSubmitPress()}}>
                <LinearGradient
                    colors={['#388E3C', '#388E3C']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}> LOGIN </Text>
                    <Icon
  name="arrow-right"
  size={16}
  iconStyle={styles.yourStyle}
  color="#388E3C"
  thin={false}
/>
              
                </LinearGradient>
            </TouchableOpacity>
            </View>


            <View style={styles.bottonc}>
            <Text style={styles.textSign2}>OR  </Text>
            </View>

            <View style={styles.button}>
            <TouchableOpacity  onPress={() => {handleSubmitPress()}}>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}> LOGIN WITH GOOGLE </Text>
                    <Image
        style={styles.logo}
        source={require('../assets/g.jpg')}
    />
              
                </LinearGradient>
            </TouchableOpacity>
            </View>


            <View style={styles.bottonc}>
            <Text style={styles.textSign2}>Forgot Password ? </Text>
            <Text style={styles.textSign2}>Create eSoko  Account </Text>
            </View>


            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#000'
    },

    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36
    },


    bottonc: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20
    },
    logo: {
      width: 35,
      height: 35,
    },

    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      },
    
      title2: {
        color: '#000',
        fontSize: 15,
        marginBottom:20
      },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 100
    },
         image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
   text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-start',
      marginTop: 30
  },
    signIn:
    {
      width:width-10,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      flexDirection: 'row'
  },
  textSign: {
      color: '#212121',

      fontWeight: 'bold'
  },

  textSign2: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
},
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
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
