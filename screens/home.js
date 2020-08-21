import { StatusBar } from 'expo-status-bar';
import Collapsible from 'react-native-collapsible';

import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Dimensions,
	FlatList,
	TextInput,
} from 'react-native';
import Card from '../components/Card';
import DATA from '../assets/data.json';

var _ = require('lodash');
const { width, height } = Dimensions.get('window');

export default function App() {
	const renderItem = ({ item }) => <Card key={item.key} item={item} />;
	const [search, setSearch] = useState('');

	function flowFilter(data, substr) {
		return _.filter(
			data,
			_.flow(
				_.identity,
				_.values,
				_.join,
				_.toLower,
				_.partialRight(_.includes, substr)
			)
		);
	}

	return (
		<View style={styles.container}>
			<View
				style={{
					width: width,
					paddingHorizontal: 20,
					paddingVertical: 15,
					backgroundColor: '#fff',
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 1,
					},
					shadowOpacity: 0.2,
					shadowRadius: 1.41,

					elevation: 2,
					alignItems: 'center',
				}}
			>
				<View
					style={{
						backgroundColor: '#F4F4F4',
						borderRadius: 4,
						width: width > 800 ? 600 : width - 40,
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 2,
						},
						flexDirection: 'column',
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 5,
					}}
				>
					<TextInput
						style={{
							padding: width > 800 ? 8 : 3,
							textAlign: 'center',
							color: 'black',
						}}
						placeholder="Search"
						value={search}
						onChangeText={(text) => setSearch(text)}
					/>
				</View>
			</View>
			<View>
				<FlatList
					data={_.sortBy(flowFilter(DATA, search), ['nama'])}
					renderItem={renderItem}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F4F4F4',

		alignItems: 'center',
	},
});
