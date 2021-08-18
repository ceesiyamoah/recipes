import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	Platform,
	TouchableNativeFeedback,
	Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import DefaultText from './DefaultText';
const MealItem = ({
	title,
	imageUrl,
	onSelect,
	duration,
	complexity,
	affordability,
}) => {
	let Touchable = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		Touchable = TouchableNativeFeedback;
	}

	return (
		<View style={styles.mealItem}>
			<Touchable onPress={onSelect}>
				<View style={{ flex: 1 }}>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
							<Text style={styles.title} numberOfLines={1}>
								{title}
							</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<DefaultText>{duration} m </DefaultText>
						<DefaultText>{complexity.toUpperCase()}</DefaultText>
						<DefaultText>{affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</Touchable>
		</View>
	);
};
const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5',
		marginTop: 10,
		borderRadius: 10,
		overflow: 'hidden',
	},
	mealRow: {
		flexDirection: 'row',
		textAlign: 'center',
	},
	mealHeader: {
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		height: '15%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	title: {
		fontFamily: 'open-sans',
		color: 'white',
		fontSize: 22,
		backgroundColor: 'rgba(0,0,0,.5)',
		paddingVertical: 5,
		textAlign: 'center',
	},
});
export default MealItem;
