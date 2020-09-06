import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexWrap : 'wrap',
        width: 450,
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 32,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        flex: 1,
        fontSize: 20,
        backgroundColor: 'grey',
        color: 'white',
        padding: 6,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    }
})

export default styles;