import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import styles from '../styles';

const Address = () => {
    const styles = StyleSheet.create({
        card:{
            backgroundColor: '#D3D3D3',
            padding: 10

        }
    })

    return(
        <View style={{padding:12}}>
            <Text>Delivery address</Text>
            <br />
            <View style={styles.card}>
                <Text style={{fontWeight:'500'}}>Aman Tiwari</Text>
                <br />
                <Text>BLM tower, 4th floor, sector 44, gurugram, haryana, india</Text>
            </View>
        </View>
    )
};

export default Address;
