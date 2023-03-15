import React from 'react'
import { StackNavigator } from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	)
}
