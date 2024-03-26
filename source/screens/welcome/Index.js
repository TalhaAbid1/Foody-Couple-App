import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { styles } from './styles'
import { AppImages } from '../../assets/images/ImageExporter';

const Welcome = ({ navigation }) => {
    const ringParent = useSharedValue(0);
    const ringChild = useSharedValue(0);
    useEffect(() => {
        ringParent.value = 0
        ringChild.value = 0
        setTimeout(() => {
            ringChild.value = withSpring(ringChild.value + 20)
        }, 250);
        setTimeout(() => {
            ringParent.value = withSpring(ringParent.value + 30)
        }, 450);
        setTimeout(() => {
            navigation.replace('InAppStack')
        }, 2300);

    }, [])
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.ringParent, { padding: ringParent }]}>
                <Animated.View style={[styles.ringChild, { padding: ringChild }]}>
                    <Image source={AppImages.WelcomePlate} style={{ height: 200, width: 200 }} />
                </Animated.View>
            </Animated.View>
            <View style={styles.textLines}>
                <Text style={styles.tagLineText}>
                    COUPLE
                </Text>
                <Text style={styles.punchLineText}>
                    Food Is Always Right 😋
                </Text>
            </View>
        </View>
    )
}

export default Welcome;
