import React from 'react'
import { Button, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


function Home() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar style='light' />
            <Text>Home Page</Text>
            <Link href={"/register"} asChild>
                <Button title='Open Register Page' />
            </Link>
            <Link href={"/One"} asChild>
                <Button title='Open One Page' />
            </Link>
        </View>
    )
}

export default Home