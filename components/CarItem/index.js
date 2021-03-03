import React from 'react';
import {View, Text, ImageBackground } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    const {name, tagline, taglineCTA, image } = props;
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image}
                style={styles.image} 
            />
            <View style={styles.titles}>
                <Text style={styles.title}> {name} </Text>
                <Text style={styles.subTitle}> 
                    {tagline} <Text style={styles.subTitleCTA}> {taglineCTA} </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
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
      </View>
    )
}

export default CarItem;
