import React from 'react';
import { View } from 'react-native';
import TextLRSection from '../../TextLRSection';

const OrderSummary = () => {
    return(
        <View style={{padding: 12}}>
            <TextLRSection textL="Order Total" textR="Rs 1479.00"/>
            <TextLRSection textL="Items Discount" textR="-Rs 1479.00" colorR="red"/>
            <TextLRSection textL="Sub Total" textR="Rs 1479.00"/>
            <TextLRSection textL="Coupons discount" textR="-Rs 1479.00" colorR="red"/>
            <TextLRSection textL="shipping Charges" textR="Rs 1479.00"/>
            <TextLRSection textL="Mamapay credit" textR="-Rs 1479.00" colorR="red"/>
            <TextLRSection textL="Total" textR="Rs 1479.00" sizeR={20}/>
        </View>
    )
}

export default OrderSummary;