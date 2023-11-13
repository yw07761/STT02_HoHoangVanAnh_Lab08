import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native'
  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  
  const Screen2 = (props) => {
    // Lấy navigate và route từ props
    const { navigation, route } = props
    const { navigate, goBack } = navigation
  
    // Lấy kích thước toàn màn hình
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
  
    const [data, setData] = useState([])
    const getData = () => {
      axios
        .get('https://653f48f29e8bd3be29e029cd.mockapi.io/Shops')
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
            }}
          >
            Shops
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
        {data &&
          data.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigate('Screen3')
              }}
            >
              <View
                style={{
                  height: screenHeight * 0.3,
                  width: screenWidth * 0.9,
                  alignSelf: 'center',
                }}
              >
                {item.image != '' ? (
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: screenHeight * 0.13,
                      width: screenWidth * 0.9,
                      borderRadius: 8,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      height: screenHeight * 0.13,
                      width: screenWidth * 0.9,
                      backgroundColor: '#c9c9c9',
                      borderRadius: 8,
                    }}
                  ></View>
                )}
                <View
                  style={{
                    marginTop: 3,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      backgroundColor: '#e5e5e5',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require('../assets/tick.png')}
                      style={{
                        height: 20,
                        width: 20,
                        marginRight: 5,
                      }}
                    />
                    <Text>{item.order}</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#e5e5e5',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 5,
                      marginHorizontal: 4,
                    }}
                  >
                    <Image
                      source={require('../assets/clock.png')}
                      style={{
                        height: 19,
                        width: 19,
                        padding: 3,
                        marginRight: 5,
                        tintColor: '#06a056',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'red',
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  {item.name}
                </Text>
                <Text>{item.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    )
  }
  
  export default Screen2
  
  const styles = StyleSheet.create({})