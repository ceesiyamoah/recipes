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
const MealItem = ({ title, imageUrl }) => {
	let Touchable = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		Touchable = TouchableNativeFeedback;
	}
	return (
		<Touchable>
			<View style={styles.screen}>
				<Image
					source={{ uri: imageUrl }}
					style={{ width: 30, height: 30, borderWidth: 2 }}
				/>
				<Text>{title}</Text>
			</View>
		</Touchable>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default MealItem;
