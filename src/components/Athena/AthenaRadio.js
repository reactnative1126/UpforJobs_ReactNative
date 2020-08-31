import React from "react";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Hyperlink from 'react-native-hyperlink';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const AthenaRadio = (props) => {
  return (
    <TouchableOpacity style={[styles.button, {
      marginTop: isEmpty(props.marginTop) ? 0 : props.marginTop,
      width: isEmpty(props.width) ? '80%' : props.width
    }]} onPress={props.onPress}>
      <Icon name={props.checked ? "check-box" : "check-box-outline-blank"} type="material" size={isEmpty(props.checkSize) ? 20 : props.checkSize} color={isEmpty(props.checkColor) ? colors.WHITE : props.checkColor} />
      {isEmpty(props.hyperlinkTitle) ?
        <Text style={[styles.text, {
          width: isEmpty(props.width) ? '75%' : props.width - 30,
          fontSize: isEmpty(props.fontSize) ? 14 : props.fontSize,
          fontWeight: isEmpty(props.fontWeight) ? 'normal' : props.fontWeight,
          color: isEmpty(props.fontColor) ? colors.BLACK : props.fontColor
        }]}>
          {props.title}
        </Text> :
        <Hyperlink linkDefault
          linkStyle={{ color: props.hyperlinkColor, fontSize: props.hyperlinkSize, textDecorationLine: 'underline', textDecorationColor: props.hyperlinkColor }}
          linkText={url => url === props.hyperlinkUrl ? props.hyperlinkTitle : props.hyperlinkUrl} >
          <Text style={[styles.text, {
            width: isEmpty(props.width) ? '75%' : props.width - 30,
            fontSize: isEmpty(props.fontSize) ? 14 : props.fontSize,
            fontWeight: isEmpty(props.fontWeight) ? 'normal' : props.fontWeight,
            color: isEmpty(props.fontColor) ? colors.BLACK : props.fontColor
          }]}>
            {props.title + " " + props.hyperlinkUrl}
          </Text>
        </Hyperlink>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  text: {
    alignItems: 'flex-start'
  }
});

export default AthenaRadio;
