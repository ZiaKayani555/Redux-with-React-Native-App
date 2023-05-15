import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from './action';
//to dispach the function
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    // console.warn('called addToCart', item);
    dispatch(addToCart(item));
  };
  useEffect(() => {
    // if (cartItems && cartItems.length) {
    //   cartItems.forEach(element => {
    //     if (element.name === item.name) {
    //       setIsAdded(true);
    //     }
    //   });
    // }
    let result = cartItems.filter((element)=>{
      return element.name === item.name;

    })
    if(result.length) {
      setIsAdded(true);
    }else {
      setIsAdded(false)
    }
  }, [cartItems]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name))
  };


  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        marginn: 5,
        padding: 10,
        marginBottom: 50,
      }}>
      <Text style={{fontSize: 30}}>{item.name}</Text>
      <Text style={{fontSize: 30}}>{item.price}</Text>
      <Text style={{fontSize: 30}}>{item.color}</Text>
      <Image style={{width: 60, height: 100}} source={{uri: item.image}} />
      {
      isAdded ? 
        <Button title="Remove to cart" onPress={() => handleRemoveFromCart(item)} />
      : 
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      }
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
