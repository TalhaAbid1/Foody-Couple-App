import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'

const Catalogue = () => {
  return (
    <View style={styles.container}>
      <Text>Catalogue</Text>
    </View>
  )
}

export default Catalogue

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.appOrange,
    }
})