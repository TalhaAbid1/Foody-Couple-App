import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from './source/screens/welcome/Index'

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'#c9743a'} barStyle={'light-content'}/>
      <Index />
    </>
  )
}

export default App

const styles = StyleSheet.create({})