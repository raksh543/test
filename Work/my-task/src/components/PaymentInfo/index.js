import React from 'react';
import { Text, View } from 'react-native';
import OrderSummary from './OrderSummary';
import Address from './Address';
import styles from './styles';

const PaymentInfo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Payment Information</Text>
            <OrderSummary />
            <View
                style={{
                    borderBottomColor:'grey',
                    borderBottomWidth: .2,
                    alignSelf: 'center',
                    width: '100%'
                }}
            />
            <Address />
        </View>
    )
};

export default PaymentInfo;