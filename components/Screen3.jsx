import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Screen3 = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  // Lấy kích thước toàn màn hình
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const [data, setData] = useState([])
  const getData = () => {
    axios
      .get('https://653f48f29e8bd3be29e029cd.mockapi.io/Drinks')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getData()
    console.log(data)
  }, [])
  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          height: screenHeight * 0.08,
          width: screenWidth,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/back.png')}
          style={{
            marginHorizontal: screenWidth * 0.05,
            height: screenHeight * 0.03,
            width: screenWidth * 0.03,
          }}
        />
        <Text
          style={{
            flex: 1,
            fontSize: 19,
            fontWeight: 'bold',
            color: '#000',
          }}
        >
          Drinks
        </Text>
        <Image
          source={require('../assets/search.png')}
          style={{
            marginHorizontal: screenWidth * 0.05,
            height: screenHeight * 0.04,
            width: screenWidth * 0.04,
            padding: 18,
          }}
        />
      </View>
      {data.map((item, index) => (
        <View
          style={{
            marginTop: 15,
            height: screenHeight * 0.08,
            width: screenWidth - 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: '#d3d3d3',
            marginHorizontal: 10,
            borderRadius: 5,
          }}
        >
          {item.image != '' ? (
            <Image
              source={{ uri: item.image }}
              style={{
                height: screenHeight * 0.08,
                width: screenHeight * 0.08,
                borderRadius: 5,
              }}
            />
          ) : (
            <View
              style={{
                height: screenHeight * 0.08,
                width: screenHeight * 0.08,
                borderRadius: 5,
                backgroundColor: '#d3d3d3',
              }}
            ></View>
          )}

          <View
            style={{
              height: screenHeight * 0.08,
              flex: 1,
              flexDirection: 'column',
              marginStart: 10,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                marginTop: 2,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 12,
              }}
            >
              {item.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: screenHeight * 0.08,
              width: screenWidth * 0.15,
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}
          >
            <Image
              source={require('../assets/plus.png')}
              style={{
                height: 20,
                width: 20,
              }}
            />
            <Image
              source={require('../assets/minus.png')}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </View>
        </View>
      ))}

      <View
        style={{
          marginTop: 16,
          height: screenHeight * 0.05,
          width: screenWidth - 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#efb034',
          alignSelf: 'center',
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: '#fff',
          }}
        >
          Go to cart
        </Text>
      </View>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})