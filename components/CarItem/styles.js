import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
      },
      titles: {
        marginTop: '24%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
      subTitle: {
        fontSize: 16,
        color: '#5c5e62',
      },
      subTitleCTA: {
        textDecorationLine: 'underline',
        // fontWeight: 'bold',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsContainer: {
          position: 'absolute',
          bottom: 50,
          width: '100%',
      }
});

export default styles;
