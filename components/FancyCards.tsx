import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {

  return (
    <View>
      <Text style={styles.headingText}>Trending Places </Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://3.bp.blogspot.com/-NMAsmUbM64s/WorK2743xLI/AAAAAAAAAq8/PLVm4okU-VoL2PYylY36ie1WHh9--FqIwCLcBGAs/s1600/Publication2.jpg'
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City,Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
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
    width: 470,
    height: 400,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#2C3335",
    fontSize: 14,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: "#000000",
  },
});