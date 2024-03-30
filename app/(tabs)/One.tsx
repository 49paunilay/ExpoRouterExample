import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const One = () => {
    const router = useRouter()
  return (
    <View>
      <Text style={{fontSize:20}}>One</Text>
      <Button title='Go Back' onPress={()=>router.back()}/>
    </View>
  )
}

export default One