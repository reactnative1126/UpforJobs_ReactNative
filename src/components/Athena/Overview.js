import React from "react";
import { Platform, StatusBar, StyleSheet, ImageBackground, View, Text } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Overview = (props) => {
  return (
    <ImageBackground source={props.item.image} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.textView}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.description}>{props.item.description}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    width: wp('100%'), height: hp('100%'),
  },
  overlay: {
    width: wp('100%'), height: hp('100%'),
    backgroundColor: '#9C1766',
    opacity: 0.4
  },
  textView: {
    position: 'absolute',
    bottom: 360
  },
  title: {
    marginBottom: 15,
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.WHITE,
    textAlign: 'center'
  },
  description: {
    fontSize: 17,
    fontWeight: '300',
    color: colors.WHITE,
    textAlign: 'center'
  }
});

export default Overview;
