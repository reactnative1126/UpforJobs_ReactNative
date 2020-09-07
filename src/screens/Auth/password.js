import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Background, AthenaButton, AthenaInput, AthenaRadio } from "@components";
import { isEmpty, validateEmail } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      password: '',
      errorPassword: '',
      password1: '',
      errorPassword1: '',
      check1: true,
      check2: false,
      check3: false
    };
  }

  onSubmit() {
    const { user_type } = this.props.route.params;
    this.props.navigation.navigate('Success', { user_type: user_type });
  }

  render() {
    const { user_type } = this.props.route.params;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Background background={images.background} />
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? 57 : 27, left: Platform.OS == 'ios' ? 37 : 27 }} onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-left" type="feather" size={25} color={colors.WHITE} />
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.title}>{"Enter New\nPassword"}</Text>
          <AthenaInput
            marginTop={30}
            width={300}
            height={50}
            radius={25}
            borderWidth={isEmpty(this.state.errorPassword) ? 0 : 2}
            borderColor={colors.RED.DEFAULT}
            backgroundColor={colors.WHITE}
            fontSize={17}
            fontWeight="300"
            fontColor={colors.WHITE}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
            error={this.state.errorPassword}
            onChangeText={(password) => {
              isEmpty(this.state.errorPassword) ? this.setState({ password, errorPassword: '' }) : this.setState({ password: '', errorPassword: '' });
            }}
          />
          <AthenaInput
            marginTop={10}
            width={300}
            height={50}
            radius={25}
            borderWidth={isEmpty(this.state.errorPassword1) ? 0 : 2}
            borderColor={colors.RED.DEFAULT}
            backgroundColor={colors.WHITE}
            fontSize={17}
            fontWeight="300"
            fontColor={colors.WHITE}
            value={this.state.password1}
            placeholder="Confirm Password"
            secureTextEntry={true}
            error={this.state.errorPassword1}
            onChangeText={(password1) => {
              isEmpty(this.state.errorPassword1) ? this.setState({ password1, errorPassword1: '' }) : this.setState({ password1: '', errorPassword1: '' });
            }}
          />
          <AthenaRadio
            checked={this.state.check1}
            marginTop={20}
            width={310}
            checkSize={20}
            checkColor={this.state.check1 ? colors.GREEN.SECONDARY : colors.WHITE}
            title="Must not contain your name or email"
            fontSize={17}
            fontColor={this.state.check1 ? colors.GREEN.SECONDARY : colors.WHITE}
            onPress={() => this.setState({ check1: !this.state.check1 })}
          />
          <AthenaRadio
            checked={this.state.check2}
            marginTop={15}
            width={310}
            checkSize={20}
            checkColor={this.state.check2 ? colors.GREEN.SECONDARY : colors.WHITE}
            title="At least 9 characters"
            fontSize={17}
            fontColor={this.state.check2 ? colors.GREEN.SECONDARY : colors.WHITE}
            onPress={() => this.setState({ check2: !this.state.check2 })}
          />
          <AthenaRadio
            checked={this.state.check3}
            marginTop={15}
            width={310}
            checkSize={20}
            checkColor={this.state.check3 ? colors.GREEN.SECONDARY : colors.WHITE}
            title="Contains a symbol or a number"
            fontSize={17}
            fontColor={this.state.check3 ? colors.GREEN.SECONDARY : colors.WHITE}
            onPress={() => this.setState({ check3: !this.state.check3 })}
          />
          <AthenaButton
            marginTop={65}
            width={300}
            height={50}
            radius={25}
            backgroundColor={colors.GREEN.PRIMARY}
            title="Change Password"
            fontSize={26}
            fontWeight="bold"
            fontColor={colors.WHITE}
            onPress={() => this.onSubmit()}
          />
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
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.WHITE,
    textAlign: 'center',
    lineHeight: 50
  },
  commonText: {
    marginTop: 7,
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE
  },
  socialView: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
  },
  socialButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.WHITE
  },
  forgotText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.WHITE
  },
  linkButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.GREEN.PRIMARY,
    textDecorationLine: 'underline',
    textDecorationColor: colors.GREEN.PRIMARY
  },
  fingerprint: {
    marginTop: 10,
    fontSize: 13,
    color: colors.WHITE
  }
});

export default connect(undefined, undefined)(Password);
