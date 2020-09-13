import React from 'react';
import { Text, View } from 'react-native';
import OrderSummary from './OrderSummary';
import Address from './Address';
import Cashback from './Cashback';
import TotalSavings from './TotalSavings';
import styles from './styles';

const PaymentInfo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Payment Information</Text>
            <OrderSummary />
            <TotalSavings saving={26}/>
            <Cashback cashback={22.6}/>
            <Address />
        </View>
    )
};

export default PaymentInfo;