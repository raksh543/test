import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexWrap : 'wrap',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop:32
    }
})

export default styles;