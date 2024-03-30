import { useRouter } from 'expo-router'
import { Stack } from 'expo-router'
import React from 'react'
import { Button } from 'react-native'

function _layout() {
    const router = useRouter()
    return (
        <Stack
        >
            <Stack.Screen name='index' options={{
                title: "Home"
            }} />
            <Stack.Screen name='register/index' options={{
                title: "Register",
                headerRight: () => (
                    <Button title='Login' onPress={() => router.push("/Login")} />
                )
            }} />
            <Stack.Screen name='Login' options={{
                // Set the presentation mode to modal for our modal route.
                presentation: 'modal',
            }} />
            <Stack.Screen name='(tabs)' options={{
                headerShown: false
            }} />
            <Stack.Screen name='[missing]' options={{
                title: "404 Not Found"
            }} />
        </Stack>
    )
}

export default _layout