import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { styles } from './styles'
import { Colors } from '../../utils/Colors';
import { AppImages } from '../../assets/images/ImageExporter';
import Catalogue from '../../components/Catalogue';
import Recipes from '../../components/Recipes';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('Beef');
    const [allCategory, setAllCategory] = useState([]);
    const [categoryBasedItem, setCategoryBasedItem] = useState([]);

    useEffect(() => {
        fetchAllCategory();
        fetchCategoryBasedItems();
    }, [])


    const fetchAllCategory = async () => {
        await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
            .then((response) => {
                setAllCategory(response?.data?.categories)
            })
            .catch((error) => {
                console.log('FetchAllCategory Failed : ', error);
            })
    }

    const fetchCategoryBasedItems = async (activeCategory = 'beef') => {
        await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${activeCategory}`)
            .then((response) => {
                setCategoryBasedItem(response?.data?.meals)
            })
            .catch((error) => {
                console.log('FetchAllCategory Failed : ', error);
            })
    }

    const changeRecipeList = (newCategory) => {
        setActiveCategory(newCategory);
        fetchCategoryBasedItems(newCategory)
        setCategoryBasedItem([])
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                {/* HEADER VIEW */}
                <View style={styles.headerView}>
                    <Image source={AppImages.Avatar} style={styles.image} />
                    <BellIcon size={35} color={Colors.textGrey} />
                </View>

                {/* HELLO & PUNCH LINE */}
                <View style={{}}>
                    <Text style={styles.greeting}>Hello ABID</Text>
                    <Text style={styles.punchLintText}>You With Your Food</Text>
                    <Text style={styles.punchLintText}>Makes Great <Text style={styles.coupleText}>Couple</Text></Text>
                </View>

                {/* SEARCH */}
                <View style={styles.searchView}>
                    <TextInput
                        placeholder='Search Your Food...'
                        placeholderTextColor={Colors.midGrey}
                        style={styles.inputTextPlace}
                    />
                    <View style={styles.magnifyingGlass}>
                        <MagnifyingGlassIcon size={30} color={Colors.textGrey} />
                    </View>
                </View>

                {/* CATALOGUE CATEGORY */}
                {allCategory?.length > 0 && <Catalogue allCategory={allCategory} activeCategory={activeCategory} changeRecipeList={changeRecipeList} />}

                {/* RECIPES */}
                <Recipes categoryBasedItem={categoryBasedItem} allCategory={allCategory} />
            </ScrollView>
        </View>
    )
}

export default Home;