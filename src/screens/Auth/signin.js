import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      errorEmail: '',
      password: '',
      errorPassword: '',
      check: true
    };
  }

  onSubmit() {
    const { user_type } = this.props.route.params;
    if (isEmpty(this.state.email) || !validateEmail(this.state.email)) {
      this.setState({ email: "Enter correct email", errorEmail: "E.g, example@gmail.com" });
    } else {
      this.props.navigation.navigate('Success', { user_type: user_type });
    }
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
        <View  style={styles.main}>
          <Text style={styles.title}>{"Welcome Back!\nPlease Log In!"}</Text>
          <Text style={styles.commonText}>with</Text>
          <View style={styles.socialView}>
            <TouchableOpacity style={styles.socialButton} onPress={() => this.props.navigation.navigate('Success', { user_type: user_type })}>
              <Image source={icons.facebook} style={{ width: 15, height: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => this.props.navigation.navigate('Success', { user_type: user_type })}>
              <Image source={icons.google} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => this.props.navigation.navigate('Success', { user_type: user_type })}>
              <Image source={icons.linkedinBlue} style={{ width: 27, height: 25 }} />
            </TouchableOpacity>
          </View>
          <AthenaInput
            marginTop={Platform.OS == 'ios' ? 30 : 30}
            width={300}
            height={50}
            radius={25}
            borderWidth={isEmpty(this.state.errorEmail) ? 0 : 2}
            borderColor={colors.RED.DEFAULT}
            backgroundColor={colors.WHITE}
            fontSize={17}
            fontWeight="300"
            fontColor={colors.WHITE}
            value={this.state.email}
            placeholder="Email Address"
            error={this.state.errorEmail}
            keyboardType="email-address"
            onChangeText={(email) => {
              isEmpty(this.state.errorEmail) ? this.setState({ email, errorEmail: '' }) : this.setState({ email: '', errorEmail: '' });
            }}
          />
          <AthenaInput
            marginTop={Platform.OS == 'ios' ? 30: 10}
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.forgotText}>Forgot your passowrd? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot', { user_type: user_type })}>
              <Text style={styles.linkButton}>Click Here</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 7, flexDirection: 'row' }}>
            <Text style={styles.forgotText}>New here? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp', { user_type: user_type })}>
              <Text style={styles.linkButton}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <AthenaButton
            marginTop={18}
            width={225}
            height={50}
            radius={25}
            backgroundColor={colors.GREEN.PRIMARY}
            title="Log In"
            fontSize={26}
            fontWeight="bold"
            fontColor={colors.WHITE}
            onPress={() => this.onSubmit()}
          />
          <Text style={[styles.commonText, { marginTop: 26 }]}>Log in using your biometric credential</Text>
          <TouchableOpacity style={{ marginTop: 10 }}>
            <Image source={icons.fingerprint} style={{ width: 55, height: 80 }} />
          </TouchableOpacity>
          <Text style={styles.fingerprint}>touch the fingerprint sensor</Text>

          <AthenaRadio
            checked={this.state.check}
            marginTop={15}
            width={300}
            checkSize={20}
            checkColor={this.state.check ? colors.GREEN.PRIMARY : colors.WHITE}
            title={"Remember me for future login"}
            fontSize={17}
            fontColor={this.state.check ? colors.GREEN.PRIMARY : colors.WHITE}
            onPress={() => this.setState({ check: !this.state.check })}
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
    marginTop: Platform.OS == 'ios' ? 100 : 80,
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
    marginTop: Platform.OS == 'ios' ? 7 : 0,
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE
  },
  socialView: {
    marginTop: Platform.OS == 'ios' ? 16 : 10,
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

export default connect(undefined, undefined)(SignIn);
