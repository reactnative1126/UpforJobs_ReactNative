import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon, Input } from "react-native-elements";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";
import { color } from "react-native-reanimated";

const AthenaVerify = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={[styles.input, {
        marginTop: isEmpty(props.marginTop) ? 0 : props.marginTop,
        width: isEmpty(props.width) ? '80%' : props.width,
        height: isEmpty(props.height) ? 50 : props.height,
        borderWidth: isEmpty(props.borderWidth) ? 0 : props.borderWidth,
        borderColor: isEmpty(props.borderColor) ? colors.WHITE : props.borderColor,
        borderRadius: isEmpty(props.radius) ? 25 : props.radius,
        backgroundColor: isEmpty(props.backgroundColor) ? '#FFFFFF00' : props.backgroundColor
      }]} >
        <Input
          value={props.value}
          placeholder={isEmpty(props.placeholder) ? '' : props.placeholder}
          autoCapitalize={isEmpty(props.autoCapitalize) ? 'none' : props.autoCapitalize}
          keyboardType={isEmpty(props.keyboardType) ? 'default' : props.keyboardType}
          secureTextEntry={isEmpty(props.secureTextEntry) ? false : true}
          maxLength={1}
          inputContainerStyle={{ marginTop: Platform.OS == 'ios' ? 10 : 20, width: '100%', borderBottomWidth: 0 }}
          inputStyle={{
            textAlign: 'center',
            fontSize: isEmpty(props.fontSize) ? 14 : props.fontSize,
            fontWeight: isEmpty(props.fontWeight) ? 'normal' : props.fontWeight,
            color: isEmpty(props.error) ? props.fontColor : colors.RED.DEFAULT
          }}
          onChangeText={(value) => props.onChangeText(value)}
          onFocus={props.onFocus}
        />
      </View>
      <Text style={{ marginTop: 9, fontSize: 15, fontWeight: '300', color: colors.WHITE }}>{props.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 1, height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1
  }
});

export default AthenaVerify;
