import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { colors } from '../constants/colors';
const FilterSwitch = ({ title, isPositive, onValueChange }) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{title}</Text>
			<Switch
				value={isPositive}
				trackColor={{ true: '#c0a6e0', false: 'grey' }}
				thumbColor={isPositive ? colors.primary : 'white'}
				onValueChange={onValueChange}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
	},
	filterContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
		marginVertical: 20,
	},
});
export default FilterSwitch;
