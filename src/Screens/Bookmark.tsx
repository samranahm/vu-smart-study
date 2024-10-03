import React from "react";
import { View, StyleSheet } from "react-native";
import BookSection from "../components/BookSection";

const BookMark = () => {
  return (
    <View style={styles.body}>
      <BookSection title="Fundamentals of Auditing" />
      <BookSection title="Business Finance" />
      <BookSection title="Bioinformatics I" />
      <BookSection title="Bioinformatics Computing" />
      <BookSection title="Special Topics in Bioinformatics" />
      <BookSection title="Basic I-Biology" />
      <BookSection title="Basic II-Chemistry" />
      <BookSection title="Essentials of Genetics" />
      <BookSection title="Biological Physics" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
});

export default BookMark;
