import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Background, AthenaButton, AthenaRadio } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";
import { color } from "react-native-reanimated";

class Linkedin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      password: '',
      errorPassword: '',
      check4: true,
      check5: false,
    };
  }

  onAllow() {
    const { user_type } = this.props.route.params;
    this.props.navigation.navigate('Step2', { user_type: user_type });
  }

  onCancel() {
    const { user_type } = this.props.route.params;
    this.props.navigation.navigate('Step1', { user_type: user_type });
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
        <View style={styles.main}>
          <View style={styles.avatarView}>
            <View style={styles.linkedinAvatar}>
              <Image source={images.avatar} style={styles.avatarImage} />
              <View style={styles.linkedinIcon}>
                <Image source={icons.linkedin} style={{ width: 17, height: 17 }} />
              </View>
            </View>
            <View style={styles.logoAvatar}>
              <Image source={images.logo} style={styles.logoImage} />
            </View>
          </View>

          <View style={{ marginTop: 60, width: wp('90%') }}>
            <Text>
              <Text style={styles.upforjobText}>UP FOR JOBS </Text>
              <Text style={styles.wouldText}>would like to</Text>
            </Text>
            <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.dot} />
              <Text style={styles.normalText}>{"Use your name & photo"}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.dot} />
              <Text style={styles.normalText}>{"Use the primary email address associated"}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 17 }} />
              <Text style={styles.normalText}>{"with your linkedin account"}</Text>
            </View>
            <Text style={{ marginTop: 30 }}>
              <Text style={styles.normalText}>{"You can stop this sync in your Linkedin\nsettings. "}</Text>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.WHITE }}>UP FOR JOBS </Text>
              <Text style={styles.normalText}>{"terms apply. "}</Text>
            </Text>
          </View>

          <AthenaRadio
            checked={this.state.check4}
            marginTop={60}
            width={wp('90%')}
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
            width={wp('90%')}
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
          <View style={styles.buttonView}>
            <AthenaButton
              width={wp('40%')}
              height={50}
              radius={25}
              backgroundColor={colors.GREEN.PRIMARY}
              title="Allow"
              fontSize={26}
              fontWeight="bold"
              fontColor={colors.WHITE}
              onPress={() => this.onAllow()}
            />
            <AthenaButton
              width={wp('40%')}
              height={50}
              radius={25}
              borderWidth={2}
              borderColor={colors.GREEN.PRIMARY}
              title="Cancel"
              fontSize={26}
              fontWeight="bold"
              fontColor={colors.WHITE}
              onPress={() => this.onCancel()}
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
    marginTop: 150,
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%')
  },
  avatarView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
  },
  linkedinAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.WHITE
  },
  logoAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.WHITE,
    backgroundColor: colors.WHITE
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  linkedinIcon: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.BLUE.PRIMARY,
    borderRadius: 20
  },
  logoImage: {
    width: 65,
    height: 50,
    marginTop: 10
  },
  upforjobText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.GREEN.PRIMARY
  },
  wouldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.WHITE
  },
  dot: {
    marginLeft: 5,
    marginRight: 5,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: colors.WHITE
  },
  normalText: {
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE
  },
  buttonView: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('90%'),
  }

});

export default connect(undefined, undefined)(Linkedin);
