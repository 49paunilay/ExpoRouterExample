import { Link } from 'expo-router'
import React from 'react'
import {Button, Text, View} from 'react-native'


function Register() {
  return (
    <View>
      <Text>Register</Text>
      <Link href={"/Login"}asChild>
        <Button title='Open login model'/>
      </Link>
    </View>
  )
}

export default Register