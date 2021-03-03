import React from 'react';
import {View, Text, ImageBackground } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image} 
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at $19,000</Text>
            </View>

            <StyledButton 
                type="primary" 
                content={"custom order"}
                onPress={() => {
                    console.warn('You clicked CUSTOM ORDER')
                }}
            />
            <StyledButton 
                type="secondary" 
                content={"existing inventory"}
                onPress={() => {
                    console.warn('You clicked EXISTING INVENTORY')
                }}
            />
      </View>
    )
}

export default CarItem;
