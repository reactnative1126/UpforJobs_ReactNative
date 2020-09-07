import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Background } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Background background={images.background} />
        <TouchableOpacity style={styles.main}  onPress={() => this.props.navigation.navigate('Start')}>
          <View style={styles.logoContent}>
            <View style={styles.logoView}>
              <Image source={images.logo} style={{ marginTop: 10 }} />
            </View>
          </View>
          <View style={styles.titleView}>
            <Text style={[styles.titleText, { fontSize: 46 }]}>U</Text>
            <Text style={[styles.titleText, { fontSize: 41, marginTop: 5 }]}>P </Text>
            <Text style={[styles.titleText, { fontSize: 46 }]}>F</Text>
            <Text style={[styles.titleText, { fontSize: 41, marginTop: 5 }]}>OR </Text>
            <Text style={[styles.titleText, { fontSize: 46 }]}>J</Text>
            <Text style={[styles.titleText, { fontSize: 41, marginTop: 5 }]}>OBS</Text>
          </View>
          <View style={styles.upArrowIcon}>
            <Icon name="chevron-up" type="entypo" size={50} color={colors.GREEN.PRIMARY} />
          </View>
          <Text style={styles.descriptionText}>Doing Good by Doing Good</Text>
        </TouchableOpacity>
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
  logoContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 193,
    height: 193,
    borderRadius: 97,
    backgroundColor: '#FFFFFF4D'
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 139,
    height: 139,
    borderRadius: 69,
    backgroundColor: '#FFFFFF'
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 26,
    width: wp('100%'),
    height: 45
  },
  titleText: {
    color: colors.WHITE,
    fontWeight: 'bold'
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '300',
    color: colors.WHITE
  },
  upArrowIcon: {
    marginTop: 20
  }
});

export default connect(undefined, undefined)(Splash);
