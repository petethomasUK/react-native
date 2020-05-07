import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: () => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  DishDetail: { screen: DishDetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
}
);

const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact }
},
{
  initialRouteName: 'Contact',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8",
          textAlign: 'center',
          alignSelf: 'center',
      },
      headerTitleAlign: 'center',
      headerLayoutPreset: 'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  },
  defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: "#512DA8",
        textAlign: 'center',
        alignSelf: 'center',
    },
    headerTitleAlign: 'center',
    headerLayoutPreset: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: "#fff"            
    }
}
}
);

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    },
    Contact: 
      { screen: ContactNavigator,
        navigationOptions: {
          title: 'Contact',
          drawerLabel: 'Contact'
        }, 
      }
  }, 
  {
    drawerBackgroundColor: '#D1C4E9'
});


const App = createAppContainer(MainNavigator);



class Main extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
          <App />
      )
    }
}

export default Main;