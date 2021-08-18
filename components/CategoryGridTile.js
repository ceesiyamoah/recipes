import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Platform,
	TouchableNativeFeedback,
} from 'react-native';

let TouchableComp = TouchableOpacity;

if (Platform.OS === 'android' && Platform.Version >= 21) {
	TouchableComp = TouchableNativeFeedback;
}

const CategoryGridTile = ({ title, onSelect, color }) => {
	return (
		<View style={styles.gridItem}>
			<TouchableComp onPress={onSelect}>
				<View style={{ ...styles.container, backgroundColor: color }}>
					<Text style={styles.title} numberOfLines={2}>
						{title}
					</Text>
				</View>
			</TouchableComp>
		</View>
	);
};
const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		padding: 10,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { height: 2, width: 0 },
		shadowRadius: 10,
		elevation: 20,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 18,
		textAlign: 'center',
	},
});
export default CategoryGridTile;
