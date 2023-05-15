import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

const cartData= useSelector((state) =>state.reducer )
// console.warn(cartData)
const [cartItems, setCartItems] =useState(0);
useEffect(()=>{
  setCartItems(cartData.length)
}, [cartData])
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, textAlign:'right', padding:10, backgroundColor:'orange', color:'black'}}>
 
           {cartItems }
      
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flex: 0,
    }
})