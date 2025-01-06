import React from "react";
import { View, StyleSheet } from "react-native";
import BookSection from "../components/BookSection";

function BookMark() {
  return (
    <View style={styles.body}>
      <BookSection title="Fundamentals of Auditing" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Business Finance" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Bioinformatics I" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Bioinformatics Computing" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Special Topics in Bioinformatics" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Basic I-Biology" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Basic II-Chemistry" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Essentials of Genetics" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="Biological Physics" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
});

export default BookMark;
