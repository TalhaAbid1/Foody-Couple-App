import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appWhite,
    },
    image: {
        height: 70,
        width: 70,
    },
    scrollView:{
        flexGrow:1,
        paddingHorizontal:10,
        marginBottom:30,
    },
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    greeting:{
        color: Colors.textGrey,
        fontSize:14,
        fontWeight:'500',
        marginVertical:5,
    },
    punchLintText:{
        color: Colors.textGrey,
        fontSize:23,
        fontWeight:'700',
    },
    coupleText:{
        color: Colors.appOrange,
        fontWeight:'bold',
    },
    searchView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Colors.zeroGrey,
        borderRadius:20,
        paddingRight:15,
        paddingLeft:10,
        marginVertical:10,
        height:55,
        elevation:7,
        shadowColor: Colors.textGrey,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
    },
    magnifyingGlass:{
        padding:3,
        backgroundColor:Colors.appWhite,
        borderRadius:25,
        elevation:7,
        shadowColor: Colors.appOrange,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
    },
    inputTextPlace:{
        fontSize:18,
        color:Colors.textGrey,
        width:'88%',
    },
    catalogueContainer:{
        
    },
})