import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import ScaledImage from './../ScaledImage';
// import contentJson from '../../content/home.json';

const VerticleImageText = ({
  title3,
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
        <Text style={styles.header}>{title2}</Text>
        
        <Text style={styles.text}>{title3}</Text>
      </View>
    </View>
  );
};

const createStyles = (imageSide) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
      flexDirection: imageSide === 'down' ? 'column-reverse' : 'column',
      flexWrap: 'wrap',
      marginTop: 16,
    },
    subContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionImage: {
      paddingLeft: 16,
      paddingRight: 16,
      alignSelf: 'center'
    },
    text: {
      color: '#103B81',
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: 14,
      marginTop:10
    },
    header: {
      color: '#103B81',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginTop:10,
    },
  });

export default VerticleImageText;