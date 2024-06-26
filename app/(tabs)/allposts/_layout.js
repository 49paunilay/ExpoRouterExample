import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        title: "posts"
      }} />
      <Stack.Screen name='[id]' options={{
        title: "post Details"
      }} />
    </Stack>
  )
}

export default _layout