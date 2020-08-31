import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Background, AthenaButton, AthenaInput, AthenaRadio } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      password: '',
      errorPassword: '',
      check1: true,
      check2: false,
      check3: false,
      check4: true,
      check5: false,
    };
  }

  createAccount() {
    const { user_type } = this.props.route.params;
    this.props.navigation.navigate('Success', { user_type: user_type });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Background background={images.background} />
        <TouchableOpacity style={{ position: 'absolute', top: 57, left: 37, zIndex: 1000 }} onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-left" type="feather" size={25} color={colors.WHITE} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.main}>
          <Text style={styles.title}>{"Create Your\npassword"}</Text>
          <AthenaInput
            marginTop={40}
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
            placeholder="Create Password"
            secureTextEntry={true}
            error={this.state.errorPassword}
            onChangeText={(password) => {
              isEmpty(this.state.errorPassword) ? this.setState({ password, errorPassword: '' }) : this.setState({ password: '', errorPassword: '' });
            }}
          />
          <AthenaRadio
            checked={this.state.check1}
            marginTop={26}
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
          <AthenaRadio
            checked={this.state.check4}
            marginTop={60}
            width={310}
            checkSize={20}
            checkColor={this.state.check4 ? colors.GREEN.SECONDARY : colors.WHITE}
            title={"Yes please send me useful\ninformations by email"}
            fontSize={17}
            fontColor={this.state.check4 ? colors.GREEN.SECONDARY : colors.WHITE}
            onPress={() => this.setState({ check4: !this.state.check4 })}
          />
          <AthenaRadio
            checked={this.state.check5}
            marginTop={15}
            width={310}
            checkSize={20}
            checkColor={this.state.check5 ? colors.GREEN.SECONDARY : colors.WHITE}
            title={"Yes I understand agree with the\nUp For Jobs "}
            hyperlinkTitle="terms of service"
            hyperlinkUrl="https://google.com"
            hyperlinkColor={colors.GREEN.PRIMARY}
            hyperlinkSize={17}
            fontSize={17}
            fontColor={this.state.check5 ? colors.GREEN.SECONDARY : colors.WHITE}
            onPress={() => this.setState({ check5: !this.state.check5 })}
          />
          <AthenaButton
            marginTop={48}
            width={300}
            height={50}
            radius={25}
            backgroundColor={colors.GREEN.PRIMARY}
            title="Create My Account"
            fontSize={26}
            fontWeight="bold"
            fontColor={colors.WHITE}
            onPress={() => this.createAccount()}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    marginTop: 150,
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%')
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.WHITE,
    textAlign: 'center'
  },
  email: {
    marginTop: 10,
    marginBottom: 17,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.GREEN.PRIMARY,
    textAlign: 'center'
  },
  orText: {
    marginTop: 31,
    marginBottom: 23,
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE,
    textAlign: 'center'
  },
  bottomText: {
    marginTop: 50,
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE,
    textAlign: 'center'
  }

});

export default connect(undefined, undefined)(Step2);
