import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { themes, colors } from '@constants/themes';

export default class Loading extends Component {
	render() {
		return (
			<Modal animationType="fade" transparent={true} visible={this.props.loading} >
				<View style={{ flex: 1, backgroundColor: '#00000080', justifyContent: 'center', alignItems: 'center' }}>
					<View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, justifyContent: "center" }}>
						<ActivityIndicator style={{ height: 80 }} size="large" color={colors.WHITE} />
					</View>
				</View>
			</Modal>
		)
	}
}