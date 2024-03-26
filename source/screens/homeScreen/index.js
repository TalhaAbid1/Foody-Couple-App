import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { styles } from './styles'
import { Colors } from '../../utils/Colors';
import { AppImages } from '../../assets/images/ImageExporter';
import Catalogue from '../../components/Catalogue';

const Home = () => {
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
                    <View style={styles.magnifyingGlass} >
                    <MagnifyingGlassIcon size={35} color={Colors.textGrey}/>
                    </View>
                </View>

                {/* CATALOGUE */}
                <View style={styles.catalogueContainer}>
                    <Catalogue/>
                </View>

            </ScrollView>
        </View>
    )
}

export default Home;