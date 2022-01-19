import React, { useState } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "../../../components";
import CheckBox from "react-native-check-box";
import { COLOR } from "../../../constants/Colors";
import styles from "../styles";

const BodyTypeFilter = ({
  navigation,
  bodyTypes,
  handleCheckboxChange,
}: any) => {
  return (
    <View style={styles.containerCheck}>
      <ScrollView>
        <View style={styles.rowCheck}>
          {bodyTypes.map((post: any, id: any) => (
            <View style={[styles.buttonCheck]}>
              <CheckBox
                key={id}
                onClick={() => {
                  handleCheckboxChange("bodyType", post);
                }}
                style={[styles.check]}
                boxStyle="white"
                checkBoxColor={COLOR.darkBlue}
                isChecked={post.isChecked}
                rightText={post.bodyType}
                rightTextStyle={{ color: COLOR.darkBlue }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default BodyTypeFilter;