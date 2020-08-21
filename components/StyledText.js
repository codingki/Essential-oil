import * as React from 'react';
import { Text } from 'react-native';

export default function NunitoText(props) {
	return (
		<Text
			{...props}
			style={[
				props.style,
				{ fontFamily: props.bold ? 'Nunito_900Black' : 'Nunito_400Regular' },
			]}
		/>
	);
}
