import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated ,{ FadeInDown } from 'react-native-reanimated';
import { Colors } from '../utils/Colors'

const Catalogue = ({allCategory,activeCategory,changeRecipeList}) => {
  const ActiveBackgroundColor=(activeOne)=>{
    return activeCategory === activeOne ?  Colors.appOrange : Colors.lightGrey 
  }
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}>
      {allCategory?.map((cat, index)=>{
        return(
          <TouchableOpacity key={index} style={styles.categoryItem} onPress={()=>{changeRecipeList(cat?.strCategory)}}>
            <Image source={{uri:cat?.strCategoryThumb}} style={[styles.categoryImage,{backgroundColor: ActiveBackgroundColor(cat?.strCategory)}]}/>
            <Text style={styles.categoryName}>{cat?.strCategory}</Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
    </Animated.View>
  )
}

export default Catalogue

const styles = StyleSheet.create({
    categoryItem:{
      paddingHorizontal:10,
      justifyContent:'center',
      alignItems:'center', 
    },
    categoryImage:{
    padding:35,
    borderRadius:70,
    height:50,
    width:60,
    resizeMode:'contain',
  },
  categoryName:{
    color: Colors.textGrey,
    fontSize:14,
    fontWeight:'500',
  },
})