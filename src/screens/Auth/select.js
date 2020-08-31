import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Background, AthenaButton } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { user_type } = this.props.route.params;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Background background={images.background} />
        <View style={styles.main}>
          <TouchableOpacity style={{ position: 'absolute', top: 57, left: 37 }} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" type="feather" size={25} color={colors.WHITE} />
          </TouchableOpacity>
          <View style={styles.topView}>
            <Text style={styles.title}>{user_type == 1 ? "Sign Up as\nEmployer" : "Sign Up as\nFreelancer"}</Text>
          </View>
          <View style={styles.bottomView}>
            <AthenaButton
              width={250}
              height={50}
              radius={25}
              backgroundColor={colors.GREEN.PRIMARY}
              title="Sign Up"
              fontSize={26}
              fontWeight="bold"
              fontColor={colors.WHITE}
              onPress={() => this.props.navigation.navigate('SignUp', { user_type: user_type })}
            />
            <Text style={{ marginTop: 45, fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Already Have Account?</Text>
            <AthenaButton
              marginTop={17}
              width={250}
              height={50}
              radius={25}
              borderWidth={2}
              borderColor={colors.GREEN.PRIMARY}
              title="Login"
              fontSize={26}
              fontWeight="bold"
              fontColor={colors.WHITE}
              onPress={() => this.props.navigation.navigate('SignIn', { user_type: user_type })}
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
    marginBottom: 48,
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.WHITE,
    textAlign: 'center'
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: wp('100%'),
    height: hp('50%'),
  }
});

export default connect(undefined, undefined)(Select);
