import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header de bienvenue */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            Welcome to LeaderSetup! 🎉
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Your leadership and team management dashboard is ready to use.
          </Text>
        </View>

        {/* Cartes de fonctionnalités */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>📊</Text>
            <Text style={styles.featureTitle}>
              Analytics
            </Text>
            <Text style={styles.featureDescription}>
              Track team performance and identify trends
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🔧</Text>
            <Text style={styles.featureTitle}>
              Work Orders
            </Text>
            <Text style={styles.featureDescription}>
              Manage and track all your team tasks
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>📱</Text>
            <Text style={styles.featureTitle}>
              Mobile Access
            </Text>
            <Text style={styles.featureDescription}>
              Access your data anywhere, anytime
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>👥</Text>
            <Text style={styles.featureTitle}>
              Team Management
            </Text>
            <Text style={styles.featureDescription}>
              Lead and coordinate your team effectively
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>📈</Text>
            <Text style={styles.featureTitle}>
              Performance Tracking
            </Text>
            <Text style={styles.featureDescription}>
              Monitor progress and optimize workflows
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🎯</Text>
            <Text style={styles.featureTitle}>
              Goal Setting
            </Text>
            <Text style={styles.featureDescription}>
              Set and track team objectives and KPIs
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    padding: 24,
  },
  welcomeCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    lineHeight: 22,
  },
  featuresContainer: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderLeftWidth: 4,
    borderLeftColor: '#8B4513',
  },
  featureEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 20,
  },
});
