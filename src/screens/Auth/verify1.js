import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Background, AthenaButton, AthenaVerify } from "@components";
import { isEmpty, validateEmail } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Verify1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      error: '',
    };
  }

  onSubmit() {
    const { user_type } = this.props.route.params;
    this.props.navigation.navigate('Password', { user_type: user_type, user_email: this.state.email });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Background background={images.background} />
        <View style={styles.main}>
          <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? 57 : 27, left: Platform.OS == 'ios' ? 37 : 27 }} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" type="feather" size={25} color={colors.WHITE} />
          </TouchableOpacity>
          <View style={styles.topView}>
            <Text style={styles.title}>{"Please Enter The Code\nSent To Your Email"}</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 300 }}>
              <AthenaVerify
                width={60}
                height={60}
                radius={30}
                borderWidth={isEmpty(this.state.error) ? 0 : 2}
                borderColor={colors.RED.DEFAULT}
                backgroundColor={colors.WHITE}
                fontSize={20}
                fontWeight="bold"
                fontColor={colors.RED.VERIFY}
                value={this.state.verify1}
                secureTextEntry={true}
                error={this.state.error}
                onChangeText={(verify1) => {
                  isEmpty(this.state.error) ? this.setState({ verify1, error: '' }) : this.setState({ verify1: '', error: '' });
                }}
              />
              <AthenaVerify
                width={60}
                height={60}
                radius={30}
                borderWidth={isEmpty(this.state.error) ? 0 : 2}
                borderColor={colors.RED.DEFAULT}
                backgroundColor={colors.WHITE}
                fontSize={20}
                fontWeight="bold"
                fontColor={colors.RED.VERIFY}
                value={this.state.verify2}
                secureTextEntry={true}
                error={this.state.error}
                onChangeText={(verify2) => {
                  isEmpty(this.state.error) ? this.setState({ verify2, error: '' }) : this.setState({ verify2: '', error: '' });
                }}
              />
              <AthenaVerify
                width={60}
                height={60}
                radius={30}
                borderWidth={isEmpty(this.state.error) ? 0 : 2}
                borderColor={colors.RED.DEFAULT}
                backgroundColor={colors.WHITE}
                fontSize={20}
                fontWeight="bold"
                fontColor={colors.RED.VERIFY}
                value={this.state.verify3}
                secureTextEntry={true}
                error={this.state.error}
                onChangeText={(verify3) => {
                  isEmpty(this.state.error) ? this.setState({ verify3, error: '' }) : this.setState({ verify3: '', error: '' });
                }}
              />
              <AthenaVerify
                width={60}
                height={60}
                radius={30}
                borderWidth={isEmpty(this.state.error) ? 0 : 2}
                borderColor={colors.RED.DEFAULT}
                backgroundColor={colors.WHITE}
                fontSize={20}
                fontWeight="bold"
                fontColor={colors.RED.VERIFY}
                value={this.state.verify4}
                secureTextEntry={true}
                error={this.state.error}
                onChangeText={(verify4) => {
                  isEmpty(this.state.error) ? this.setState({ verify4, error: '' }) : this.setState({ verify4: '', error: '' });
                }}
              />
            </View>
            <AthenaButton
              marginTop={50}
              width={250}
              height={50}
              radius={25}
              backgroundColor={colors.GREEN.PRIMARY}
              title="Submit"
              fontSize={26}
              fontWeight="bold"
              fontColor={colors.WHITE}
              onPress={() => this.onSubmit()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%')
  },
  topView: {
    position: 'absolute',
    bottom: hp('50%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: wp('100%'),
  },
  title: {
    marginBottom: 25,
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.WHITE,
    textAlign: 'center',
    lineHeight: 50
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: wp('100%'),
    height: hp('50%'),
  }
});

export default connect(undefined, undefined)(Verify1);
