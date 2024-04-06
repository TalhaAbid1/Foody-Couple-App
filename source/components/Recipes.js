import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';

import { Colors } from '../utils/Colors';

const Recipes = ({ categoryBasedItem, allCategory }) => {
    const imageHeight = (value) => {
        return (
            (value % 4 === 0) ? 150 : (value % 3 === 0) ? 250 : (value % 2 === 0) ? 350 : 450
        )
    }
    const CardItem = ({ item }) => {
        return (
            <Animated.View entering={FadeInDown.delay(imageHeight(item?.idMeal)+100).duration(500).springify()}>
                <TouchableOpacity style={styles.imageShadow}>
                    <Image style={[styles.itemImage, { height: imageHeight(item?.idMeal) }]} source={{ uri: item?.strMealThumb }} />
                </TouchableOpacity>
                <Text style={styles.itemName} numberOfLines={1}>{item?.strMeal}</Text>
            </Animated.View>
        )
    };

    return (
        <View style={styles.container}>
            {allCategory?.length !== 0 && <Animated.Text entering={FadeInLeft.duration(300).springify()} style={styles.recipesText}>Recipes</Animated.Text>}
            {categoryBasedItem === null ? (
                <Text style={styles.noDataText}>Required items are not available</Text>
            ) : allCategory?.length === 0 || categoryBasedItem?.length === 0 ? (
                <ActivityIndicator color={Colors.appOrange} size={'large'} />
            ) : (
                <MasonryList
                    data={categoryBasedItem}
                    keyExtractor={(item) => item?.idMeal}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={CardItem}
                    style={styles.masonryList}
                />
            )}
        </View>
    )
};

export default Recipes

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    noDataText: {
        color: Colors.midGrey,
        fontWeight: '800',
        fontSize: 18,
        marginVertical: 35,
        alignSelf: 'center'
    },
    masonryList: {
        gap: 12,
    },
    recipesText: {
        color: Colors.darkGrey,
        fontSize: 24,
        fontWeight: '800',
        margin: 5,
    },
    itemImage: {
        width: '100%',
        borderRadius: 23,
        resizeMode: 'cover',
    },
    itemName: {
        color: Colors.darkGrey,
        marginBottom: 8,
        marginHorizontal: 7,
    },
    imageShadow: {
        shadowColor: Colors.appBlack,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 13,
        elevation: 10,
    }
})