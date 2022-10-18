
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
    const [state, setState] = React.useState('very satisfied')

    const home = () => {
        return (
     <View style={{height: 200, backgroundColor: 'white', width: '94%', flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
      <Text style={{fontSize: 20, fontWeight: '600', padding: 14}}>How satisfyed are you with our customer support performance?</Text>
      <View style={{flex: 1, flexDirection:'row',}}>
        <TouchableOpacity style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😊</Text>
        <Text>Very Satisfied</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😭</Text>
        <Text>Very Sad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😟</Text>
        <Text>Not Bad</Text>
        </TouchableOpacity>
      </View> 
    </View>
        )
    }

  return (
    <View>
        {home()}
    </View>
  )
}

export default Home

// const styles = StyleSheet.create({})