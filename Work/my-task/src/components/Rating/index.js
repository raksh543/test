import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import VerticleImageText from '../VerticleImageText';

const Rating = () => {
    return(
        <View>
            <Text style={styles.text}> How was your experience</Text>
            <View style={styles.container}>
                <VerticleImageText title3="worse" image={require("./../../assets/smile.png")} imageHeight={50} />
                <VerticleImageText title3="bad" image={require("./../../assets/smile.png")} imageHeight={50} />
                <VerticleImageText title3="fine" image={require("./../../assets/smile.png")} imageHeight={50} />
                <VerticleImageText title3="good" image={require("./../../assets/smile.png")} imageHeight={50} />
                <VerticleImageText title3="great" image={require("./../../assets/smile.png")} imageHeight={50} />
            </View>
        </View>
    )
}

export default Rating;