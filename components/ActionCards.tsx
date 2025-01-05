import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
     function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
     }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}></View>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
          What's new in Javascript 21 - ES12
        </Text>
      </View>
      <Image
        source={{
          uri: 'https://tse3.mm.bing.net/th?id=OIP.XbhIGO49XCjhHxsWmFBtrAHaEK&pid=Api&P=0&h=180'
        }}
        style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>
          At Comestro, we believe in the power of innovation and technology to
          transform businesses. Based in Purnea, Bihar, we specialize in
          developing high-quality web applications, mobile apps, and custom
          websites that help our clients achieve their digital goals. Our
          passion for building innovative solutions drives us to deliver
          projects that are not only functional but also scalable and
          user-friendly.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => openWebsite("https://www.comestro.com/")}
        >
          <Text style={styles.socialLinks}>Read More...</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            openWebsite(
              "https://www.linkedin.com/company/comestro/?originalSubdomain=in"
            )
          }
        >
          <Text style={styles.footerContainer}>Follow me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "#EA7773",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 300,
    margin:30
    
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  socialLinks: {
    fontSize: 14,
    color: "#000000",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius:4
   
  },
});