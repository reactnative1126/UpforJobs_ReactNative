import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login } from "@modules/auth/actions";
import { Loading, AthenaButton } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <View style={styles.main}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Splash')}>
          <Icon name="check" type="simple-line-icon" size={88} color="#DBDBDB" />
          </TouchableOpacity>
          <Text style={styles.successText}>Success!</Text>
          <Text style={styles.descriptionText}>{"Your account has been created successfully.\n\nWe now need 3 sets of information\nwhich help us maximize your\nearnings"}</Text>
          {
            this.props.route.params.user_type == 2 && (
              <View style={{alignItems: 'center'}}>
                <AthenaButton
                  marginTop={45}
                  width={235}
                  height={53}
                  radius={27}
                  backgroundColor={colors.RED.DARK}
                  title="Add Information"
                  fontSize={22}
                  fontWeight="bold"
                  fontColor={colors.WHITE}
                  onPress={() => alert("Login")}
                />
                <Text style={{ marginTop: 15, fontSize: 17, color: colors.GREEN.PRIMARY, textDecorationLine: 'underline', textDecorationColor: colors.GREEN.PRIMARY }}>skip for now</Text>
              </View>
            )
          }
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
  successText: {
    marginTop: 38,
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.GREEN.PRIMARY
  },
  descriptionText: {
    marginTop: 38,
    fontSize: 17,
    fontWeight: '300',
    color: colors.GREEN.PRIMARY,
    textAlign: 'center'
  }
});

export default connect(undefined, undefined)(Success);
