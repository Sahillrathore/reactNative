import React from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ContactPage() {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header Section */}
      <ThemedView style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/heart.png')} // Add a header image
          style={styles.headerImage}
        />
        <ThemedText type="title" style={styles.headerTitle}>
          Contact Us
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          We’d love to hear from you! Fill out the form below or reach us via social platforms.
        </ThemedText>
      </ThemedView>

      {/* Contact Form */}
      <ThemedView style={styles.formContainer}>
        <TextInput placeholder="Your Name" style={styles.input} />
        <TextInput placeholder="Your Email" style={styles.input} keyboardType="email-address" />
        <TextInput
          placeholder="Your Message"
          style={[styles.input, styles.messageInput]}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button}>
          <ThemedText type="buttonText" style={styles.buttonText}>
            Send Message
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Location Section */}
      <ThemedView style={styles.locationContainer}>
        <ThemedText type="subtitle" style={styles.locationTitle}>
          Our Location
        </ThemedText>
        <ThemedText style={styles.locationText}>
          123 Contact Street, Suite 100, Example City, EX 45678
        </ThemedText>
        <TouchableOpacity onPress={() => handleLinkPress('https://www.google.com/maps')}>
          <ThemedText type="link" style={styles.mapLink}>
            View on Google Maps
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Social Media Links */}
      <ThemedView style={styles.socialMediaContainer}>
        <ThemedText type="subtitle" style={styles.socialMediaTitle}>
          Connect with Us
        </ThemedText>
        <ThemedView style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => handleLinkPress('https://facebook.com')}>
            <Image
              source={require('@/assets/images/thumb.png')} // Replace with actual icons
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://twitter.com')}>
            <Image
              source={require('@/assets/images/thumb.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://instagram.com')}>
            <Image
              source={require('@/assets/images/thumb.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: 'white'
  },
  headerImage: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'

  },
  headerSubtitle: {
    textAlign: 'center',
    marginTop: 8,
    color: '#606060',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationContainer: {
    marginBottom: 24,
    backgroundColor: 'white'
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    textAlign: 'center'
  },
  locationText: {
    marginBottom: 8,
    color: '#000',
    textAlign: 'center'
  },
  mapLink: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  socialMediaContainer: {
    alignItems: 'center',
    backgroundColor: 'white'
  },
  socialMediaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    backgroundColor: 'white'
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});
