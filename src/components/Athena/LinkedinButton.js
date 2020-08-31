import React from "react";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const LinkedinButton = (props) => {
  return (
    <TouchableOpacity style={[styles.button, {
      marginTop: isEmpty(props.marginTop) ? 0 : props.marginTop,
      width: isEmpty(props.width) ? '80%' : props.width,
      height: isEmpty(props.height) ? 50 : props.height,
      borderWidth: isEmpty(props.borderWidth) ? 0 : props.borderWidth,
      borderColor: isEmpty(props.borderColor) ? colors.WHITE : props.borderColor,
      borderRadius: isEmpty(props.radius) ? 25 : props.radius,
      backgroundColor: isEmpty(props.backgroundColor) ? '#FFFFFF00' : props.backgroundColor
    }]} onPress={props.onPress}>
      <View style={styles.linkedinButton}>
        <Image source={icons.linkedin} width={25} height={25} />
      </View>
      <View style={{width: 243}}>
        <Text style={{
          width: '100%', textAlign: 'center',
          fontSize: isEmpty(props.fontSize) ? 14 : props.fontSize,
          fontWeight: isEmpty(props.fontWeight) ? 'normal' : props.fontWeight,
          color: isEmpty(props.fontColor) ? colors.BLACK : props.fontColor
        }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 1, height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1
  },
  linkedinButton: { 
    justifyContent: 'center',
    alignItems: 'center',
    width: 57, 
    height: '100%', 
    backgroundColor: colors.BLUE.SECONDARY,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  }
});

export default LinkedinButton;
