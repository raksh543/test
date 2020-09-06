import React from 'react';
import {View, Text} from 'react-native';
import HorizontalImageText from '../HorizontalImageText';

const OrderedItems = () => {
    return(
        <View style={{flex:2}}>
            {/* <Text>Here is what you will find into your 'goodness inside' box.</Text> */}
            <View>
                <HorizontalImageText desc="Skin Illuminate Face serum for radiant skin with vitamin c and Turmeric 30" image={require("./../../assets/logo.png")} imageHeight='100' />
                {/* <HorizontalImageText desc="Skin Illuminate Face serum for radiant skin with vitamin c and Turmeric 30" image={require("./../../assets/logo.png")} imageHeight='100' />
                <HorizontalImageText desc="Skin Illuminate Face serum for radiant skin with vitamin c and Turmeric 30" image={require("./../../assets/logo.png")} imageHeight='100' /> */}
            </View>
        </View>
    )
};

export default OrderedItems;