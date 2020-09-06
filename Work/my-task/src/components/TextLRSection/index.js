import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TextLRSection = ({textL, textR, colorR='black', sizeR=14}) => {

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            alignSelf: 'center',
            marginTop: 12
        },
        textleft: {
            alignSelf: 'flex-start',
            fontSize: 14
        },
        textright: {
            alignSelf: 'flex-end',
            position: 'absolute',
            right: 0,
            color: colorR,
            fontSize: sizeR,
            fontWeight: '500'
        },
    })

    return(
        <View style={styles.container}>
            <Text style={styles.textleft}>{textL}</Text>
            <Text style={styles.textright}>{textR}</Text>
        </View>
    )
}

export default TextLRSection;