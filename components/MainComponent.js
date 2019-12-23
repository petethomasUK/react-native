import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

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

const App = createAppContainer(MenuNavigator);



class Main extends Component {
    constructor(props){
      super(props);

      this.state = {
        dishes: DISHES,
        selectedDish: null
      }
    }

    onDishSelect(dishId) {
      this.setState({selectedDish: dishId});
    }

    render() {
      return (
          <App />
      )
    }
}

export default Main;