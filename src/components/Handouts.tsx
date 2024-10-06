import React from "react";
import { View, StyleSheet } from "react-native";
import BookSection from "./BookSection";

const HandOuts = () => {
  return (
    <View style={styles.body}>
      <BookSection title="ACC311 - Fundamentals of Auditing" pdfUrl={"https://www.vu.edu.pk/downloads/PSP_Application.pdf"} />
      <BookSection title="ACC501 - Business Finance" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="BIF401 - Bioinformatics I" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="BIF602 - Bioinformatics Computing" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="BIF604 - Special Topics in Bioinformatics" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="BIO101 - Basic I-Biology" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="BIO102 - Basic II-Chemistry" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="BIO301 - Essentials of Genetics" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
      <BookSection title="BIO503 - Biological Physics" pdfUrl={"https://vukhanpur.com/handouts/EDU301.pdf"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
});

export default HandOuts;
