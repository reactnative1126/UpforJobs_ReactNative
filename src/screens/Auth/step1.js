import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Background, AthenaButton, AthenaInput, LinkedinButton } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      firstname: '',
      errorFirstname: '',
      lastname: '',
      errorLastname: '',
      country: '',
      errorCounty: '',
    };
  }

  createAccout() {
    const { user_type } = this.props.route.params;
    this.props.navigation.navigate('Step2', { user_type: user_type });
  }
  useLinkedin() {
    const { user_type } = this.props.route.params;
    this.props.navigation.navigate('Linkedin', { user_type: user_type });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Background background={images.background} />
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? 57 : 27, left: Platform.OS == 'ios' ? 37 : 27, zIndex: 1000 }} onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-left" type="feather" size={25} color={colors.WHITE} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.main}>
          <Text style={styles.title}>{"Create Your Account!\nIt is Absolutely Free!"}</Text>
          <Text style={styles.email}>{this.props.route.params.user_email}</Text>
          <AthenaInput
            width={300}
            height={50}
            radius={25}
            borderWidth={isEmpty(this.state.errorFirstname) ? 0 : 2}
            borderColor={colors.RED.DEFAULT}
            backgroundColor={colors.WHITE}
            fontSize={17}
            fontWeight="300"
            fontColor={colors.WHITE}
            value={this.state.firstname}
            placeholder="First Name"
            error={this.state.errorFirstname}
            onChangeText={(firstname) => {
              isEmpty(this.state.errorFirstname) ? this.setState({ firstname, errorFirstname: '' }) : this.setState({ firstname: '', errorFirstname: '' });
            }}
          />
          <AthenaInput
            width={300}
            height={50}
            radius={25}
            borderWidth={isEmpty(this.state.errorLastname) ? 0 : 2}
            borderColor={colors.RED.DEFAULT}
            backgroundColor={colors.WHITE}
            fontSize={17}
            fontWeight="300"
            fontColor={colors.WHITE}
            value={this.state.lastname}
            placeholder="Last Name"
            error={this.state.errorLastname}
            onChangeText={(lastname) => {
              isEmpty(this.state.errorLastname) ? this.setState({ lastname, errorLastname: '' }) : this.setState({ lastname: '', errorLastname: '' });
            }}
          />
          <AthenaInput
            width={300}
            height={50}
            radius={25}
            borderWidth={isEmpty(this.state.errorCounty) ? 0 : 2}
            borderColor={colors.RED.DEFAULT}
            backgroundColor={colors.WHITE}
            fontSize={17}
            fontWeight="300"
            fontColor={colors.WHITE}
            value={this.state.country}
            placeholder="Country"
            error={this.state.errorCounty}
            onChangeText={(country) => {
              isEmpty(this.state.errorCounty) ? this.setState({ country, errorCounty: '' }) : this.setState({ country: '', errorCounty: '' });
            }}
          />
          <AthenaButton
            marginTop={Platform.OS == 'ios' ? 48 : 18}
            width={300}
            height={50}
            radius={25}
            backgroundColor={colors.GREEN.PRIMARY}
            title="Create My Account"
            fontSize={26}
            fontWeight="bold"
            fontColor={colors.WHITE}
            onPress={() => this.createAccout()}
          />
          <Text style={styles.orText}>{"- OR -"}</Text>
          <LinkedinButton
            width={300}
            height={50}
            radius={25}
            backgroundColor={colors.BLUE.PRIMARY}
            title="Use My Linkedin"
            fontSize={26}
            fontWeight="bold"
            fontColor={colors.WHITE}
            onPress={() => this.useLinkedin()}
          />
          <Text style={styles.bottomText}>{"Use Linkedin so you don't have to retype\ninformation to create your profile"}</Text>
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
    marginTop: Platform.OS == 'ios' ? 150 : 80,
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%')
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.WHITE,
    textAlign: 'center',
    lineHeight: 50
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
    marginTop: Platform == 'ios' ? 31 : 11,
    marginBottom: Platform == 'ios' ? 23 : 13,
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE,
    textAlign: 'center'
  },
  bottomText: {
    marginTop: Platform == 'ios' ? 50 : 20,
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE,
    textAlign: 'center'
  }

});

export default connect(undefined, undefined)(Step1);
