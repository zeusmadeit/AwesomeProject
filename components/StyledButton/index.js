import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './style'

const StyledButton = (props) => {
    const {type, content, onPress: handlePress} = props;

    let backgroundColor = type === 'primary' ? '#171A20cc' : '#FFFFFFA6';
    let textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={style.container}>
            <Pressable
            style={[style.button, {backgroundColor: backgroundColor}]}
            onPress={() => handlePress()}
            >
                <Text style={[style.text, {color: textColor}]}> {content} </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;
