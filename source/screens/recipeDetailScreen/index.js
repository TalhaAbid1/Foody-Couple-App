import { useEffect, useState } from 'react';
import axios from 'axios';
import YouTubeIframe from 'react-native-youtube-iframe';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { HeartIcon, UsersIcon, Square3Stack3DIcon } from 'react-native-heroicons/solid';
import { View, TouchableOpacity, ScrollView, Text, ActivityIndicator, } from 'react-native';
import { ChevronLeftIcon, ClockIcon, FireIcon } from 'react-native-heroicons/outline';
import { styles } from './style';
import { Colors } from '../../utils/Colors';


const RecipeDetails = ({ navigation, route }) => {
  const recipeItem = route?.params?.item;
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(false);
  const [isMaxLines, setIsMaxLines] = useState(false);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    fetchMealDetails(recipeItem?.idMeal);
  }, [])

  const fetchMealDetails = async (id) => {
    await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setRecipeDetails(response?.data?.meals[0])
        getVideoById(response?.data?.meals[0].strYoutube)
      })
      .catch((error) => {
        console.log('ERROR : ', error);
      })
  }

  const miniCards = [
    { icon: ClockIcon, value: `${Math.floor(Math.random() * 60) + 25}`, unit: 'Minutes' },
    { icon: UsersIcon, value: `0${Math.floor(Math.random() * 5) + 2}`, unit: 'Servings' },
    { icon: FireIcon, value: `${Math.floor(Math.random() * 100) + 100}`, unit: 'Calories' },
    { icon: Square3Stack3DIcon, value: `${Math.floor(Math.random() * 5) + 5}/10`, unit: 'Difficulty' }
  ];

  const recipeIng = (recipe) => {
    let mealIndexes = []
    if (!recipe) {
      return [];
    } else {
      for (let i = 1; i < 20; i++) {
        if (recipe['strMeasure' + i] !== '') {
          mealIndexes.push(i)
        }
      }

    }
    return mealIndexes;
  }

  const getVideoById = async (urlReceived) => {
    try {
      const regex = /[?&]v=([^&]+)/;
      const match = await urlReceived.match(regex);
      if (match && match[1]) {
        setVideoId(match[1])
        return;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {/* RECIPE IMAGE */}
      <Animated.Image
        sharedTransitionTag={recipeItem?.strMealThumb}
        style={styles.itemImage}
        source={{ uri: recipeItem?.strMealThumb }} />
      {/* TOP ICONS */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon}>
        <ChevronLeftIcon size={45} strokeWidth={4} color={Colors.appOrange} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.makeFavoriteIcon}>
        <HeartIcon size={45} color={isFavorite ? Colors.appOrange : Colors.darkGrey} />
      </TouchableOpacity>

      {!recipeDetails
        ? (
          <ActivityIndicator color={Colors.appOrange} size={'large'} style={{ marginTop: '10%' }} />
        ) : (
          <View style={styles.dishDetailsView}>
            <Animated.View entering={FadeInLeft.duration(700).springify()}>
              <Text style={styles.dishName}>{recipeDetails?.strMeal}</Text>
              <Text style={styles.dishRegion}>{recipeDetails?.strArea}</Text>
            </Animated.View>
            {/* MINI CARDS */}
            <View style={styles.basicDetailsTags}>
              {miniCards.map((item, index) => (
                <Animated.View entering={FadeInLeft.delay(index * 200).duration(500).springify()} style={styles.eachItemView} key={index}>
                  <View style={styles.eachItemImageView}>
                    <item.icon size={25} color={Colors.appOrange} />
                  </View>
                  <View style={styles.eachItemTextView}>
                    <Text>{item.value}</Text>
                    <Text>{item.unit}</Text>
                  </View>
                </Animated.View>
              ))}
            </View>
            {/* INGREDIENTS */}
            <Text style={styles.IngredientsText}>Ingredients</Text>
            {recipeIng(recipeDetails)?.map((item, index) => {
              return (
                <View key={index} style={styles.IngredientMapView}>
                  {recipeDetails['strIngredient' + item] &&
                    <>
                      <View style={styles.IngredientDots} />
                      <Text style={styles.IngredientItemText}>{recipeDetails['strMeasure' + item]}</Text>
                      <Text style={styles.IngredientItemText}>{recipeDetails['strIngredient' + item]}</Text>
                    </>}
                </View>
              )
            })}
            {/* INSTRUCTIONS */}
            <Text style={styles.IngredientsText}>Instructions</Text>
            <Text style={styles.IngredientItemText} numberOfLines={!isMaxLines ? 7 : undefined}>{recipeDetails?.strInstructions}</Text>
            <TouchableOpacity style={styles.showMaxLessView} onPress={() => { setIsMaxLines(!isMaxLines) }}>
              <Text style={styles.showMaxLess}>{isMaxLines ? 'Show Less' : 'Show More'}</Text>
            </TouchableOpacity>
            {/* RECIPE TUTORIAL */}
            <Text style={styles.IngredientsText}>Recipe Tutorial</Text>
            <View>
              {recipeDetails?.strYoutube &&
                <YouTubeIframe
                  videoId={videoId}
                  height={300}
                  width={'100%'}
                />}
            </View>

          </View>)}
    </ScrollView>
  )
}

export default RecipeDetails