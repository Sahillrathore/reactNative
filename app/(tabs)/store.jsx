import React from 'react';
import {
    StyleSheet,
    FlatList,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const products = [
    {
        id: '1',
        name: 'Wireless Headphones',
        price: 59.99,
        image: ('../../assets/images/heart.png'),
    },
    {
        id: '2',
        name: 'Smart Watch',
        price: 129.99,
        image: '@/assets/images/heart.png',
    },
    {
        id: '3',
        name: 'Gaming Mouse',
        price: 39.99,
        image: '@/assets/images/heart.png',
    },
    {
        id: '4',
        name: 'Bluetooth Speaker',
        price: 49.99,
        image: '@/assets/images/heart.png',
    },
];

export default function ProductList() {
    const handleAddToCart = (product) => {
        alert(`${product.name} added to cart!`);
    };

    const renderProduct = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddToCart(item)}
            >
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Our Products</Text>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#343a40',
    },
    list: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 8,
        borderRadius: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
        color: '#343a40',
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#28a745',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
