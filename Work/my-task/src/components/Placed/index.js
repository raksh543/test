import React from 'react';
import { View } from 'react-native';
import VerticleImageSection from '../VerticleImageText';

const Placed = () => {
    return(
        <View >
        <VerticleImageSection
            title2="ThankYou"
            title3= "Your order (Order ID : 123456) has been placed successfully." 
            image={require("./../../assets/logo.png")} 
            imageHeight={50} />
        </View>
    )
};

export default Placed;