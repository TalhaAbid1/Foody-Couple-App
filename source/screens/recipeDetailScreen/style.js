import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.lightGrey,
        paddingBottom: 25,
    },
    itemImage: {
        height: 500,
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        resizeMode: 'cover'
    },
    goBackIcon: {
        backgroundColor: Colors.appWhite,
        padding: 3,
        borderRadius: 100,
        position: 'absolute',
        top: 15,
        left: 20,
    },
    makeFavoriteIcon: {
        backgroundColor: Colors.appWhite,
        padding: 3,
        borderRadius: 100,
        position: 'absolute',
        top: 15,
        right: 20,
    },
    dishDetailsView: {
        flex: 1,
        paddingHorizontal: 20
    },
    dishName: {
        fontSize: 25,
        fontWeight: '800',
        color: Colors.darkGrey,
        paddingVertical: 8
    },
    dishRegion: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.darkGrey,
    },
    basicDetailsTags: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    eachItemView: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: Colors.appOrange,
        borderRadius: 25,
        padding: 10,
    },
    eachItemImageView: {
        backgroundColor: Colors.appWhite,
        padding: 5,
        borderRadius: 100
    },
    eachItemTextView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 9,
    },
    IngredientsText: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.darkGrey,
        paddingVertical: 8
    },
    IngredientItemText: {
        color: Colors.darkGrey,
        fontSize: 16,
        marginHorizontal: 5,
    },
    IngredientMapView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    IngredientDots: {
        height: 10,
        width: 10,
        backgroundColor: Colors.appOrange,
        marginVertical: 3,
        borderRadius: 23,
    },
    showMaxLessView: {
        padding: 10,
        margin: 15,
        backgroundColor: Colors?.appOrange,
        alignSelf: 'flex-end',
        borderRadius: 23,
    },
    showMaxLess: {
        color: Colors?.darkGrey,
        fontSize: 14,
        fontWeight: 'bold',
    },
})