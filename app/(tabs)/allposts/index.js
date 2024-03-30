import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const AllPosts = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Posts</Text>
      <Link href={"/posts/1"}>Open Post 1</Link>
      <Link href={"/posts/2"}>Open Post 2</Link>
      <Link href={"/posts/3"}>Open Post 3</Link>

    </View>
  )
}

export default AllPosts