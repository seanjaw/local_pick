import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import RestaurantHeader from './restaurantheader';
import RestaurantBody from './restaurantbody';
class RestaurantContainer extends React.Component {

    render() {
        return (
            <View style={{ paddingTop: 15, backgroundColor: '#5A5A5A', height: 200, width:'90%'}}>
                <RestaurantHeader/>
                <RestaurantBody/>
            </View>
        )

    }
}

export default RestaurantContainer;