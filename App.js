import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Man2 from './components/Screen2'
import Man1 from './components/Screen1'
import Man3 from './components/Screen3'
import Screen1 from './components/Screen1'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="Screen2"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})