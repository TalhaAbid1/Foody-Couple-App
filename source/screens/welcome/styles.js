import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.appOrange,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ringParent: {
        backgroundColor: 'rgba(201,201,201,0.3)',
        borderRadius: 150,
        borderColor: '#888888',
        borderWidth: 3,
    },
    ringChild: {
        backgroundColor: 'rgba(201,201,201,0.7)',
        borderRadius: 150,
        borderColor: '#999999',
        borderWidth: 3,
    },
    textLines: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25
    },
    tagLineText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    punchLineText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 15,
    },
})