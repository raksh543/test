import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import ScaledImage from './../ScaledImage';
// import contentJson from '../../content/home.json';

const HorizontalImageText = ({
  desc,
  title2,
  image ,
  imageSide,
  imageHeight = 300,
}) => {
  const styles = createStyles(imageSide);
  return (
    <View style={styles.container}>
      <img
        src={image}
        height={imageHeight}
        // style={styles.sectionImage}
      />
      <View style={styles.subContainer}>        
        <Text style={styles.text}>{desc}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.link}>VIEW DETAILS</Text>
      </View>
    </View>
  );
};

const createStyles = (imageSide) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: imageSide === 'right' ? 'row-reverse' : 'row',
      marginTop: 16,
      padding:12,
      borderColor: 'grey',
      borderWidth: 1,
    },
    subContainer: {
      justifyContent: 'center'
    },
    sectionImage: {
      paddingLeft: 16,
      paddingRight: 16,
      alignSelf: 'center'
    },
    text: {
      flex:1,
      flexGrow: 1,
      color: '#103B81',
      paddingLeft:12,
      fontSize: 14,
      marginTop:10,
      top: 0
    },
    header: {
      color: '#103B81',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginTop:10,
    },
    link: {
      alignSelf: 'center',
      color: 'blue',
      fontWeight: '500',
      padding: 12
    }
  });

export default HorizontalImageText;