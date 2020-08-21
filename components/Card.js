import Collapsible from 'react-native-collapsible';
import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from './StyledText';
const { width, height } = Dimensions.get('window');
export default function Card(props) {
	const [collapsed, setCollapsed] = useState(true);
	const item = props.item;
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				setCollapsed(!collapsed);
			}}
		>
			<View
				style={{
					width: width > 800 ? 600 : width - 40,
					marginHorizontal: 20,

					marginVertical: 8,
					paddingHorizontal: 20,
					paddingVertical: 10,
					borderRadius: 4,
					backgroundColor: '#fff',
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					flexDirection: 'column',
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,
					borderColor: 'black',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 20, color: '#161925' }} bold>
						{item.nama}
					</Text>
					<Ionicons
						name={collapsed ? 'ios-arrow-forward' : 'ios-arrow-down'}
						size={18}
						color="black"
					/>
				</View>

				<Collapsible collapsed={collapsed}>
					{item.manfaat.map((item, index) => {
						return (
							<View style={{ marginTop: 5, flexDirection: 'row' }} key={index}>
								<Ionicons
									name="ios-square"
									size={16}
									style={{ marginTop: 3, marginRight: 5 }}
									color="black"
								/>
								<Text style={{ fontSize: 16, color: '#161925' }}>{item}</Text>
							</View>
						);
					})}
				</Collapsible>
			</View>
		</TouchableWithoutFeedback>
	);
}
