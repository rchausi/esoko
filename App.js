
 import {useState, createRef} from 'react';
 import React, { useEffect } from 'react';
 import { View, ActivityIndicator } from 'react-native';
 import { 
   NavigationContainer, 
   DefaultTheme as NavigationDefaultTheme,
   DarkTheme as NavigationDarkTheme
 } from '@react-navigation/native';

 import SplashScreen from 'react-native-splash-screen';
 import { 
   Provider as PaperProvider, 
   DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme 
 } from 'react-native-paper';
 import { CartProvider } from "react-use-cart";
 import {AuthContext } from './components/context';
 import MainTabScreen from './app/MainTabScreen';
 import Main  from './app/Main';
 import AsyncStorage from '@react-native-community/async-storage';
 


 const App = () => 
 {
 

   const initialLoginState = 
   {
     isLoading: true,
     userName: null,
     userToken: null,
   };
 

   const loginReducer = (prevState, action) => 
   {
     switch( action.type ) {
       case 'RETRIEVE_TOKEN': 
         return {
           ...prevState,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGIN': 
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGOUT': 
         return {
           ...prevState,
           userName: null,
           userToken: null,
           isLoading: false,
         };
    
     }
   };
 
   const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
 
   const authContext = React.useMemo(() => ({
     signIn: async(foundUser) => 
     {
       const userToken = String(foundUser[0].userToken);
       const userName = foundUser[0].username;
       
       try {
         await AsyncStorage.setItem('userToken', userToken);
       } catch(e) {
         console.log(e);
       }
       dispatch({ type: 'LOGIN', id: userName, token: userToken });
     },


     signOut: async() => 
     {
 
       //AsyncStorage.setItem('ll','on');
     
       try {
         await AsyncStorage.removeItem('userToken');
       } catch(e) {
         console.log(e);
       }
       dispatch({ type: 'LOGOUT' });
 
       
     }
   
   }), []);
 
 
 
 
   useEffect(() => 
   {
     setTimeout(async() => 
     {
    
       let userToken;
       userToken = null;
       try {
         userToken = await AsyncStorage.getItem('userToken');
       } catch(e) {
         console.log(e);
       }
 
       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
     }, 1000);
   }, []);
 
 
   if( loginState.isLoading ) 
   {
     return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#388E3C"}}>
         <ActivityIndicator size="small" color="#fff"/>
       </View>
     );
   }
   return (
     <PaperProvider >
      <CartProvider>
         <AuthContext.Provider value={authContext}>
           <NavigationContainer >
             {loginState.userToken !== null ? (
  <MainTabScreen />
            
             ) : (
              <Main /> 
             )}
           </NavigationContainer>
         </AuthContext.Provider>
         </CartProvider>
     </PaperProvider>
   );
 }
 
 export default App;
 