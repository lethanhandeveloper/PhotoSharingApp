import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Albums from '../src/components/Albums';
import SharedAlbum from '../src/components/SharedAlbum';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Albums" component={Albums}/>
            <Stack.Screen name="Shared Album" component={SharedAlbum}/>
        </Stack.Navigator>
    );
}

export default Navigator;