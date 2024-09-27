import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function App() {

    const [data, setData] = useState();
    const getData = async() => {
        try {
            const response = await fetch('https://66f5f94f436827ced9759263.mockapi.io/api/hehe/Item');
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return ( <
        SafeAreaView style = { styles.container } >
        <
        View style = {
            {
                height: 60,
                backgroundColor: '#1BA9FF',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }
        } >
        <
        AntDesign name = 'arrowleft'
        size = { 24 }
        color = 'white' > < /AntDesign> <
        Text style = {
            { color: 'white', fontSize: 22 } } > Chat < /Text> <
        AntDesign name = 'shoppingcart'
        size = { 24 }
        color = 'white' > < /AntDesign> <
        /View>

        <
        View style = {
            { justifyContent: 'center', alignItems: 'center', margin: 10 } } >
        <
        Text > Ban co thac mac voi san pham vua xem, dung ngai chat voi shop < /Text> <
        /View>

        <
        View style = {
            { flex: 1, padding: 24 } } >
        <
        FlatList data = { data }
        keyExtractor = {
            ({ id }) => id }
        renderItem = {
            ({ item }) => ( <
                Text > { item.item_name } <
                /Text>
            )
        }
        />

        <
        /View> <
        /SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',

    },

});