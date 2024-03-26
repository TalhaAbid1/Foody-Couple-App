import React from 'react'
import { StatusBar, StyleSheet} from 'react-native'
import { Navigator } from './source/routes'

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'#c9743a'} barStyle={'light-content'}/>
      <Navigator />
    </>
  )
}

export default App

const styles = StyleSheet.create({})