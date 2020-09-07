import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, Overview, AthenaButton } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";
import { color } from "react-native-reanimated";

class Start extends Component {
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
        <Swiper
          autoplay={false}
          containerStyle={{ position: 'absolute', width: wp('100%'), height: hp('100%') }}
          dotStyle={{ marginBottom: 302 }}
          dotColor={colors.WHITE}
          activeDotStyle={{ marginBottom: 302 }}
          activeDotColor={colors.RED.PRIMARY}
        >
          {
            dummy.start.map((item, index) => {
              return (
                <Overview key={index} item={item} />
              )
            })
          }
        </Swiper>
        <View style={styles.main}>
          <AthenaButton
            width={250}
            height={50}
            radius={25}
            backgroundColor={colors.GREEN.PRIMARY}
            title="Hire"
            fontSize={26}
            fontWeight="bold"
            fontColor={colors.WHITE}
            onPress={() => this.props.navigation.navigate('Select', { user_type: 1 })}
          />
          <AthenaButton
            marginTop={30}
            width={250}
            height={50}
            radius={25}
            backgroundColor={colors.RED.SECONDARY}
            title="Get Hired"
            fontSize={26}
            fontWeight="bold"
            fontColor={colors.WHITE}
            onPress={() => this.props.navigation.navigate('Select', { user_type: 2 })}
          />
          <View style={{ marginTop: 11, flexDirection: 'row' }}>
            <Text style={{ fontSize: 17, color: colors.WHITE }}>And automate </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 17, color: colors.GREEN.PRIMARY }}>savings goals!</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 35, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.WHITE }}>Already Have Account?</Text>
            <View style={{ width: 18 }} />
            <AthenaButton
              width={95}
              height={32}
              radius={16}
              borderWidth={2}
              borderColor={colors.GREEN.PRIMARY}
              title="Log In"
              fontSize={16}
              fontWeight="bold"
              fontColor={colors.WHITE}
              onPress={() => this.props.navigation.navigate('SignIn', { user_type: 2 })}
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
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: wp('100%'),
    height: 300,
  },
});

export default connect(undefined, undefined)(Start);
