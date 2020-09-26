import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import './../../index.css';

const TextLRSection = ({textL, textR, colorR='black', sizeR=14}) => {

    const LRContainer = styled.div`
        display: flex;
        flex: 1;
        flex-direction: row;
        width: 100%;
        align-self: center;
        margin-top: 0.75rem;
        .left{
            align-self: flex-start;
            font-family: Roboto-Regular;
            color: #5C5C5C;
        }
        .right{
            align-self: flex-end;
            font-family: Roboto-Medium;
        }
    `
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
            fontSize: 14,
            fontFamily: 'Roboto-Regular',
            color:'#5C5C5C',
        },
        textright: {
            alignSelf: 'flex-end',
            position: 'absolute',
            right: 0,
            color: colorR,
            fontSize: sizeR,
            // fontWeight: '500',
            fontFamily: 'Roboto-Medium'
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