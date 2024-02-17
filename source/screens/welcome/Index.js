import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ringParent}>
                <View style={styles.ringChild}>
                    <Image source={require('../../assets/images/CouplePlate.png')} style={{ height: 200, width: 200 }} />
                </View>
            </View>
            <View style={styles.textLines}>
                <Text style={styles.tagLineText}>
                    Foody
                </Text>
                <Text style={styles.punchLineText}>
                    Food Is Always Right
                </Text>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c9743a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ringParent: {
        backgroundColor: 'rgba(201,201,201,0.5)',
        padding: 25,
        borderRadius: 135,
    },
    textLines: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25
    },
    ringChild: {
        backgroundColor: 'rgba(201,201,201,0.5)',
        padding: 10,
        borderRadius: 110,
    },
    tagLineText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    punchLineText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
        ,
    },
})