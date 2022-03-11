import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image ,Button, TouchableOpacity} from "react-native";
import Icon from "react-native-feather1s";
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import { CartProvider, useCart } from "react-use-cart";
const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (




  
    <Tab.Navigator
      initialRouteName="Home"
      shifting={false}
        labeled={true}
        sceneAnimationEnabled={false}
        activeColor="#EA4135"
        inactiveColor="#000"
        barStyle={{ backgroundColor: '#ffff' }}
       
    >
   <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'MAIN',
          tabBarColor: '#fff',
 

          tabBarIcon: ({ focused }) => (


            <Icon
            name="home"
            size={16}
            
            color="#388E3C"
            thin={false}
          />
          )



        }}
      />

       <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarLabel: 'ORDERS',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon
            name="shopping-cart"
            size={16}
            
            color="#388E3C"
            thin={false}
          />
          ),
        }}
      />


      <Tab.Screen
        name="Profile"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'NEWS',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon
            name="globe"
            size={16}
            
            color="#388E3C"
            thin={false}
          />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'SETTINGS',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
                          <Icon
  name="settings"
  size={16}
  
  color="#388E3C"
  thin={false}
/>
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#388E3C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'eSoko',

         headerRight: () => (

   null
        )
        }} />



            <HomeStack.Screen name="Cart" component={CartScreen} options={{
        title:'Cart Items',
        headerLeft: () => (
          null
        )
        }}/>

</HomeStack.Navigator>
);



const CartStackScreen = ({navigation}) => (
<CartStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#388E3C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>


       <CartStack.Screen name="Cart" component={CartScreen} options={{
        title:'Cart Items',
        headerLeft: () => (
          null
        )
        }} />


</CartStack.Navigator>
);




  