import React from "react";
import { Platform, StatusBar, StyleSheet, ImageBackground, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Background = (props) => {
  return (
    <ImageBackground source={props.background} style={styles.background}>
      <View style={styles.overlay}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0, left: 0,
    width: wp('100%'), height: hp('100%')
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0,
    width: wp('100%'), height: hp('100%'),
    backgroundColor: '#9C1766',
    opacity: 0.97
  }
});

export default Background;
