import { StyleSheet, Text, View , Image, Button, ScrollView} from 'react-native'
import React from 'react'

import Product from './redux/Product'
import Header from './redux/Header'


const ProductWrapper = ({navigation}) => {

  const products = [
    {
      name :'samsung',
      color:'white',
      price:30000,
      image :'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
      name :'Apple iphone ',
      color:'black',
      price:130000,
      image :'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
      name :'N mobile',
      color:'green',
      price:20000,
      image :'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    }
  ]


  return (
    <View>
      <Button title='Go to User List' onPress={()=>navigation.navigate("User")}/>
      <Header />
      <ScrollView>
        {
          products.map((item)=>  <Product item={item  } /> 

          )
        }
      </ScrollView>

    
    
    </View>
  )
}

export default ProductWrapper;

const styles = StyleSheet.create({})