import React from 'react'
import { Text, View } from 'react-native'
import ButtonTabNavigation from '../routes/tabNavigation/ButtonTabNavigation'

export const MainNav = () => {
    return (
        <View style={{ flex: 1 }}>

            <Text>
                MainNav
            </Text>
            <ButtonTabNavigation />
        </View>
    )
}
