import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';



const ProductItem = ({item}) => {

  const onPress = () => {
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
    <Image style={styles.image} source={{uri: item.image}} />
    <View style={styles.rightContainer}>
      <Text style={styles.title} numberOfLines={3}>
        {item.title}
      </Text>
      {/* Ratings */}
      
      <Text style={styles.price}>
        from ${item.price.toFixed(2)}
        {item.oldPrice && (
          <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)}</Text>
        )}
      </Text>
    </View>
  </Pressable>
  );
};

export default ProductItem;