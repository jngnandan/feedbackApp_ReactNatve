
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
    const [state, setState] = React.useState('')

    const home = () => {
        return (
     <View style={{height: 200, backgroundColor: 'white', width: '94%', flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
      <Text style={{fontSize: 20, fontWeight: '600', padding: 14}}>How satisfyed are you with our customer support performance?</Text>
      <View style={{flex: 1, flexDirection:'row',}}>
        <TouchableOpacity onPress={() => setState('verySatisfied')} style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😊</Text>
        <Text>Very Satisfied</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setState('verySad')} style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😭</Text>
        <Text>Very Sad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setState('verySad')} style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😟</Text>
        <Text>Not Bad</Text>
        </TouchableOpacity>
      </View> 
    </View>
        )
    }

    const verySatisfied = () => {
        return (
     <View style={{height: 200, backgroundColor: 'white', width:'99%', flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
      <Text style={{fontSize: 20, fontWeight: '600', padding: 14}}>Thank you for your feedback!</Text>
      <View style={{flex: 1, flexDirection:'row',}}>
        <TouchableOpacity onPress={() => setState('')} style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😊</Text>
        <Text>Very Satisfied</Text>
        </TouchableOpacity>
      </View> 
    </View>
        )
    }

        const verySad = () => {
        return (
     <View style={{height: 200, backgroundColor: 'white', width:'99%', flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
      <Text style={{fontSize: 20, fontWeight: '600', padding: 14}}>Thank you for your feedback!</Text>
      <View style={{flex: 1, flexDirection:'row',}}>
        <TouchableOpacity onPress={() => setState('')} style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😊</Text>
        <Text>Not Bad</Text>
        </TouchableOpacity>
      </View> 
    </View>
        )
    }

const notBad = () => {
        return (
     <View style={{height: 200, backgroundColor: 'white', width:'99%', flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
      <Text style={{fontSize: 20, fontWeight: '600', padding: 14}}>Thank you for your feedback!</Text>
      <View style={{flex: 1, flexDirection:'row',}}>
        <TouchableOpacity onPress={() => setState('')} style={{alignItems: 'center', width: 105}}>
        <Text style={{fontSize: 50}}>😊</Text>
        <Text>Very Satisfied</Text>
        </TouchableOpacity>
      </View> 
    </View>
        )
    }
  return (
    <View>
        {state === "" && home()}
        {state === "verySatisfied" && verySatisfied()}
        {state === "verySad" && verySad()}
        {state === "notBad" && notBad()}
    </View>
  )
}

export default Home

// const styles = StyleSheet.create({})