import React from 'react';
import { View } from 'react-native';
import PaymentInfo from './components/PaymentInfo';
import Placed from './components/Placed';
import Rating from './components/Rating';
import ShareAndEarn from './components/ShareAndEarn';
import Updated from './components/Updated';
import Note from './components/Note';
import OrderedItems from './components/OrderedItems';

const App = () => {
    return(
        <View>
            <Placed />
            <Rating />
            <View style={{flexDirection: 'row', padding:10, justifyContent: 'center', width:'100%', flex:1, flexWrap: 'wrap'}}>
                {/* <OrderedItems /> */}
                <Note />
                <Updated />
                <ShareAndEarn />
                <PaymentInfo />
            </View>
        </View>
    )
};

export default App;
