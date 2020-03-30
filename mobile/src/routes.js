import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Details from './pages/Details'
import Incidents from './pages/Incidents'

const { Navigator, Screen } = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Cases"    component={Incidents}/>
                <Screen name="Details" component={Details}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes