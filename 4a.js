import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, ScrollView, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

const Items = [
  {
    image: require('./assets/canaulau.png'),
    title: 'Ca nau lau, nau mi mini...',
    shop: 'Devang',
  },
  {
    image: require('./assets/khoga.png'),
    title: '1Kg kho ga bo toi...',
    shop: 'LTD Food',
  },
  {
    image: require('./assets/xecancau.png'),
    title: 'Xe can cau da nang',
    shop: 'The gioi do choi',
  },
  {
    image: require('./assets/dochoi.png'),
    title: 'Do choi dang mo hinh',
    shop: 'The gioi do choi',
  },
  {
    image: require('./assets/lanhdao.png'),
    title: 'Lanh dao giang don',
    shop: 'Minh Long Book',
  },
  {
    image: require('./assets/hieulong.png'),
    title: 'Hieu long con tre',
    shop: 'Minh Long Book',
  },
  {
    image: require('./assets/thientai.png'),
    title: 'Thay gi dau????',
    shop: 'Shop ????',
  },
];

const App = () => {
  const renderItem = (item) => (
    <View key={item.title} style={styles.itemContainer}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      </TouchableOpacity>

      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemShopContainer}>
          <Text style={styles.itemShopLabel}>Shop</Text>
          <Text style={styles.itemShop}>{item.shop}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="arrow-left" color="white" size={28} />
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={28} style={styles.cartIcon} color="white" />
        </TouchableOpacity>
      </View>

      {/* Nội dung cuộn */}
      <ScrollView style={styles.scrollView}>
        <View>{Items.map((item) => renderItem(item))}</View>
      </ScrollView>

      {/* Footer luôn hiển thị */}
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
    paddingBottom: 88,  
  },
  itemContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 75,
    height: 74,
    borderRadius: 10,
  },
  itemInfo: {
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '400',
  },
  itemShopContainer: {
    flexDirection: 'row',
  },
  itemShopLabel: {
    marginRight: 10,
    fontSize: 14,
  },
  itemShop: {
    color: 'red',
    fontSize: 14,
  },
  chatButton: {
    width: 88,
    height: 38,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 18,
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
});

export default App;
