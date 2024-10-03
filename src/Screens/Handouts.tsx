import React from "react";
import { View, StyleSheet } from "react-native";
import BookSection from "../components/BookSection";

const HandOuts = () => {
  return (
    <View style={styles.body}>
      <BookSection title="ACC311 - Fundamentals of Auditing" />
      <BookSection title="ACC501 - Business Finance" />
      <BookSection title="BIF401 - Bioinformatics I" />
      <BookSection title="BIF602 - Bioinformatics Computing" />
      <BookSection title="BIF604 - Special Topics in Bioinformatics" />
      <BookSection title="BIO101 - Basic I-Biology" />
      <BookSection title="BIO102 - Basic II-Chemistry" />
      <BookSection title="BIO301 - Essentials of Genetics" />
      <BookSection title="BIO503 - Biological Physics" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
});

export default HandOuts;
