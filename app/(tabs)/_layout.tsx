import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="One" options={{
        headerTitle: "1",
        tabBarLabel: "1"
      }} />
      <Tabs.Screen name="Two" options={{
        headerTitle: "2",
        tabBarLabel: "2"
      }} />
      <Tabs.Screen name="allposts" options={{
        headerTitle: "posts",
        tabBarLabel: "posts",
        headerShown: false
      }} />
    </Tabs>
  )
}

export default _layout