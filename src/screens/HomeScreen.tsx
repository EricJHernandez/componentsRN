import 'react-native-gesture-handler';
import React from 'react'
import { Text, View, FlatList } from 'react-native';

import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';




const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        components: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        components: 'Animation102Screen'
    }
]

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    
    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20  }} >
                <Text style={ styles.title } > OPTIONS </Text>        
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8
                }}
            />
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList 
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={item} /> }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => renderListHeader() }
                ItemSeparatorComponent={ itemSeparator } 
            />
        </View>
    )
}
