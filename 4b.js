import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, ScrollView, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';

const Items = [
  {
    image: require('./assets/cap.png'),
    title: 'Cap chuyen tu Cong USB sang PS2...',
    price: '69.900 đ',
    feedback: 15,
    promotion: '-39%'
  },
  {
    image: require('./assets/cap2.png'),
    title: 'Cap chuyen tu Cong USB sang PS2...',
    price: '69.900 đ',
    feedback: 15,
    promotion: '-39%'
  },
  {
    image: require('./assets/cap3.png'),
    title: 'Cap chuyen tu Cong USB sang PS2...',
    price: '69.900 đ',
    feedback: 15,
    promotion: '-39%'
  },
  {
    image: require('./assets/cap4.png'),
    title: 'Cap chuyen tu Cong USB sang PS2...',
    price: '69.900 đ',
    feedback: 15,
    promotion: '-39%'
  },
  {
    image: require('./assets/cap5.png'),
    title: 'Cap chuyen tu Cong USB sang PS2...',
    price: '69.900 đ',
    feedback: 15,
    promotion: '-39%'
  },
  {
    image: require('./assets/cap6.png'),
    title: 'Cap chuyen tu Cong USB sang PS2...',
    price: '69.900 đ',
    feedback: 15,
    promotion: '-39%'
  },
];

const App = () => {
  const renderItem = (item) => (
    <View key={item.title} style={styles.itemContainer}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      </TouchableOpacity>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemFeedback}>Feedback: {item.feedback}</Text>
      <Text style={styles.itemPromotion}>{item.promotion}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="arrow-left" color="white" size={28} />
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={28} style={styles.cartIcon} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.itemRowContainer}>
          {Items.map((item) => renderItem(item))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <TouchableOpacity style={styles.footerButton}>
            <Entypo name="menu" size={38} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <AntDesign name="home" size={38} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <AntDesign name="back" size={38} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF',
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
  },
  cartIcon: {
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 35
  },
  itemRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: '48%', 
    // marginVertical: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  itemFeedback: {
    fontSize: 12,
    color: '#888',
  },
  itemPromotion: {
    fontSize: 12,
    color: 'green',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#1BA9FF',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerButton: {
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1, // Để chiếm phần còn lại của header
    marginHorizontal: 10, // Khoảng cách giữa icon giỏ hàng và search
  },
  searchIcon: {
    marginRight: 10, // Khoảng cách giữa icon và TextInput
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
