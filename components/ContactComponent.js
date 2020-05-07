import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';




class Contact extends Component {


    constructor(props){
        super(props);
      }
  

      static navigationOptions = {
        title: 'Contact Us',
        headerStyle: {
          backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
        },
        headerTitleAlign: 'center',
        headerLayoutPreset: 'center',
      };
  
      render() {
        return (
        <Card>
            <Text
                style={{margin: 10}}>
                blah</Text>
                <Text
                style={{margin: 10}}>
                blah</Text>
        </Card>
        )
      }
}

export default Contact;




