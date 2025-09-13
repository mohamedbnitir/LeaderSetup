import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState('Work Orders');

  const tabs = ['Work Orders', 'Preventive Maintenance', 'Reporting', 'Asset Management', 'Checklists & Inspections', 'Parts Inventory'];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header avec gradient brown */}
      <LinearGradient
        colors={['#8B4513', '#A0522D']}
        style={styles.gradientHeader}
      >
        <View style={styles.headerContent}>
          {/* Icône de leadership */}
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/ffffff/leadership.png'
              }}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          
          {/* Titre principal */}
          <Text style={styles.mainTitle}>
            Bring unplanned equipment downtime to zero
          </Text>
          
          {/* Sous-titre */}
          <Text style={styles.subtitle}>
            Prevent unplanned downtime and regulatory interruptions with the industry's most intuitive and intelligent maintenance and asset management software.
          </Text>

          {/* Boutons d'action */}
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Sign up for Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Book a Tour</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.noCreditText}>No credit card required.</Text>
        </View>
      </LinearGradient>

      {/* Navigation Tabs - Structure exacte de MaintainX */}
      <View style={styles.tabsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.tabsScroll}
          contentContainerStyle={styles.tabsContentContainer}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Section des fonctionnalités principales avec tabs - Design exact de MaintainX */}
      <View style={styles.featuresSection}>
        {/* Work Orders */}
        {activeTab === 'Work Orders' && (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Plan and execute work easily</Text>
            <Text style={styles.tabDescription}>
              Create, assign, and monitor Work Orders and Work Requests. 95% of maintenance teams agree LeaderSetup helps improve how they plan, manage, and execute work.
            </Text>
            <View style={styles.tabButtons}>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Preventive Maintenance */}
        {activeTab === 'Preventive Maintenance' && (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Reduce unexpected downtime by 32%</Text>
            <Text style={styles.tabDescription}>
              Surprises can be costly. Get ahead of breakdowns with automated preventive and predictive maintenance. Schedule PMs, trigger condition-based work orders automatically, and integrate with IoT sensors to reduce production risks.
            </Text>
            <View style={styles.tabButtons}>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Reporting */}
        {activeTab === 'Reporting' && (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Turn your data into cost-saving insights</Text>
            <Text style={styles.tabDescription}>
              Drive continuous improvement with customizable dashboards and out-of-the-box reports on asset health, PM compliance, maintenance costs, and more. Use the insights to operate more efficiently and spend more wisely, at any scale.
            </Text>
            <View style={styles.tabButtons}>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Asset Management */}
        {activeTab === 'Asset Management' && (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Produce more by keeping equipment online</Text>
            <Text style={styles.tabDescription}>
              Increase asset availability with equipment health and reliability insights. Extend the life of your assets, uncover root causes of failure, and make data-driven decisions to boost production and reduce capital expenditures.
            </Text>
            <View style={styles.tabButtons}>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Checklists & Inspections */}
        {activeTab === 'Checklists & Inspections' && (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Avoid regulatory fines and shutdowns</Text>
            <Text style={styles.tabDescription}>
              Enforce safety guidelines and standardize best practices across all your sites. Satisfy OSHA, EPA, and other regulatory requirements by automating inspections, corrective actions, and your digital audit trail.
            </Text>
            <View style={styles.tabButtons}>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Parts Inventory */}
        {activeTab === 'Parts Inventory' && (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Eliminate parts shortages and overspending</Text>
            <Text style={styles.tabDescription}>
              Monitor your parts inventory, get alerts when stocks run low, and automate re-orders to keep critical parts on the shelf. Reduce your parts spend by up to 34% by avoiding emergency shipping costs and keeping your inventory lean.
            </Text>
            <View style={styles.tabButtons}>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* Section Logos Clients */}
      <View style={styles.clientsSection}>
        <Text style={styles.clientsTitle}>Leading enterprises rely on LeaderSetup</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.clientsScroll}>
          <View style={styles.clientLogos}>
            <Text style={styles.clientLogo}>ABInBev</Text>
            <Text style={styles.clientLogo}>Leggett & Platt</Text>
            <Text style={styles.clientLogo}>DHL</Text>
            <Text style={styles.clientLogo}>Titan America</Text>
            <Text style={styles.clientLogo}>Univar Solutions</Text>
            <Text style={styles.clientLogo}>McDonald's</Text>
            <Text style={styles.clientLogo}>Duracell</Text>
            <Text style={styles.clientLogo}>Marriott</Text>
            <Text style={styles.clientLogo}>Ergon</Text>
            <Text style={styles.clientLogo}>Volvo</Text>
          </View>
        </ScrollView>
      </View>

      {/* Section "Boost productivity and collaboration" */}
      <View style={styles.productivitySection}>
        <Text style={styles.sectionTitle}>Boost productivity and collaboration across teams and locations</Text>
        
        <View style={styles.productivityGrid}>
          <View style={styles.productivityCard}>
            <Text style={styles.productivityTitle}>Lean maintenance made simple</Text>
            <Text style={styles.productivityDescription}>
              Increase wrench time by automating and streamlining technicians' workflows. Make it easier than ever to record maintenance work, parts usage, equipment downtime, and more.
            </Text>
            <TouchableOpacity style={styles.productivityLink}>
              <Text style={styles.productivityLinkText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productivityCard}>
            <Text style={styles.productivityTitle}>Turn requests into resolutions faster</Text>
            <Text style={styles.productivityDescription}>
              Streamline request management to reduce MTTR at your facility. Keep your teams connected and organized to prevent critical details from slipping through the cracks.
            </Text>
            <TouchableOpacity style={styles.productivityLink}>
              <Text style={styles.productivityLinkText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productivityCard}>
            <Text style={styles.productivityTitle}>Make safety part of your culture</Text>
            <Text style={styles.productivityDescription}>
              Improve safety and compliance by increasing consistency and accountability. Ensure everyone performs work accurately, and get full inspection history at your fingertips.
            </Text>
            <TouchableOpacity style={styles.productivityLink}>
              <Text style={styles.productivityLinkText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productivityCard}>
            <Text style={styles.productivityTitle}>Streamline operations to increase production</Text>
            <Text style={styles.productivityDescription}>
              Access data-driven insights on work completion and asset reliability to operate more efficiently without sacrificing quality.
            </Text>
            <TouchableOpacity style={styles.productivityLink}>
              <Text style={styles.productivityLinkText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Section "Enterprise-grade security and scale" */}
      <View style={styles.enterpriseSection}>
        <Text style={styles.sectionTitle}>Enterprise-grade security and scale</Text>
        <Text style={styles.enterpriseSubtitle}>Increase asset availability with enterprise-grade solutions for your business.</Text>
        
        <View style={styles.enterpriseGrid}>
          <View style={styles.enterpriseCard}>
            <Text style={styles.enterpriseCardTitle}>Custom User Permissions</Text>
            <Text style={styles.enterpriseCardDescription}>LeaderSetup gives you control over how your users access the platform.</Text>
          </View>

          <View style={styles.enterpriseCard}>
            <Text style={styles.enterpriseCardTitle}>Multi-Site Management & Reporting</Text>
            <Text style={styles.enterpriseCardDescription}>Centralize your data to make operational improvements.</Text>
          </View>

          <View style={styles.enterpriseCard}>
            <Text style={styles.enterpriseCardTitle}>IoT Sensors</Text>
            <Text style={styles.enterpriseCardDescription}>Automate your work order triggers based on real-time usage data.</Text>
          </View>

          <View style={styles.enterpriseCard}>
            <Text style={styles.enterpriseCardTitle}>Resource Planning</Text>
            <Text style={styles.enterpriseCardDescription}>Manage labor by effectively scheduling work to avoid bottlenecks.</Text>
          </View>
        </View>
      </View>

      {/* Section Intégrations */}
      <View style={styles.integrationsSection}>
        <Text style={styles.sectionTitle}>Integrate critical workflows</Text>
        <Text style={styles.integrationsSubtitle}>Unleash more power from your data by connecting LeaderSetup to any system.</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.integrationsScroll}>
          <View style={styles.integrationsGrid}>
            <Text style={styles.integrationLogo}>Coupa</Text>
            <Text style={styles.integrationLogo}>Ignition</Text>
            <Text style={styles.integrationLogo}>Grainger</Text>
            <Text style={styles.integrationLogo}>QuickBooks</Text>
            <Text style={styles.integrationLogo}>Titan GPS</Text>
            <Text style={styles.integrationLogo}>Veem</Text>
            <Text style={styles.integrationLogo}>FreshBooks</Text>
            <Text style={styles.integrationLogo}>Xero</Text>
            <Text style={styles.integrationLogo}>Google Sheets</Text>
            <Text style={styles.integrationLogo}>Slack</Text>
            <Text style={styles.integrationLogo}>Google Forms</Text>
            <Text style={styles.integrationLogo}>Microsoft Power BI</Text>
            <Text style={styles.integrationLogo}>SAP</Text>
            <Text style={styles.integrationLogo}>Oracle</Text>
          </View>
        </ScrollView>
      </View>

      {/* Section Témoignages */}
      <View style={styles.testimonialsSection}>
        <Text style={styles.sectionTitle}>Leading enterprises rely on LeaderSetup</Text>
        
        <View style={styles.testimonialsGrid}>
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              "I have five inspectors working on a problem right now, collecting data, and all I hear is how much easier, faster, and more user-friendly LeaderSetup is compared to what they did before."
            </Text>
            <Text style={styles.testimonialAuthor}>Jorge Pinzon</Text>
            <Text style={styles.testimonialRole}>Senior Reliability Manager, Titan America</Text>
            <Text style={styles.testimonialStats}>30% Decrease in unplanned downtime</Text>
          </View>

          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              "Since adopting LeaderSetup, we haven't had any of our networking equipment go down due to anything preventable. It's hard to quantify exactly how much of an improvement it's been."
            </Text>
            <Text style={styles.testimonialAuthor}>Ellis Jenné</Text>
            <Text style={styles.testimonialRole}>Maas Systems Project Coordinator</Text>
            <Text style={styles.testimonialStats}>33% Reduction in unplanned downtime</Text>
          </View>

          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              "Moving to LeaderSetup was one of the smoothest integrations I've ever seen in my career."
            </Text>
            <Text style={styles.testimonialAuthor}>Jarrod Kipp</Text>
            <Text style={styles.testimonialRole}>North America Product Supply Process Transformation Manager</Text>
            <Text style={styles.testimonialStats}>30% Improvement in maintenance efficiency</Text>
          </View>
        </View>
      </View>

      {/* CTA Final */}
      <View style={styles.finalCtaSection}>
        <Text style={styles.finalCtaBadge}>2025 LEADER</Text>
        <Text style={styles.finalCtaTitle}>Award-winning software you can trust</Text>
        <Text style={styles.finalCtaSubtitle}>Get more done with LeaderSetup</Text>
        
        <View style={styles.finalButtons}>
          <TouchableOpacity style={styles.finalPrimaryButton}>
            <Text style={styles.finalPrimaryButtonText}>Sign up for Free</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.finalSecondaryButton}>
            <Text style={styles.finalSecondaryButtonText}>Book a Tour</Text>
          </TouchableOpacity>
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
  gradientHeader: {
    minHeight: 500,
    width: '100%',
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 60,
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  icon: {
    width: 60,
    height: 60,
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 48,
  },
  subtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
    maxWidth: 700,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  noCreditText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    textAlign: 'center',
  },
  // Navigation Tabs - Design exact de MaintainX
  tabsContainer: {
    backgroundColor: 'white',
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tabsScroll: {
    paddingHorizontal: 0,
  },
  tabsContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginRight: 4,
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    minWidth: 120,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'transparent',
    borderBottomColor: '#8B4513',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6c757d',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#8B4513',
    fontWeight: '700',
  },
  // Features Section - Design exact de MaintainX
  featuresSection: {
    paddingHorizontal: 24,
    paddingVertical: 80,
    backgroundColor: 'white',
    minHeight: 400,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 42,
    maxWidth: 800,
  },
  tabDescription: {
    fontSize: 20,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
    maxWidth: 700,
  },
  tabButtons: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  learnMoreButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  learnMoreText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  // Clients Section
  clientsSection: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#f8f9fa',
  },
  clientsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 32,
  },
  clientsScroll: {
    paddingHorizontal: 16,
  },
  clientLogos: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  clientLogo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6c757d',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  // Productivity Section
  productivitySection: {
    paddingHorizontal: 24,
    paddingVertical: 60,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 34,
  },
  productivityGrid: {
    gap: 32,
  },
  productivityCard: {
    backgroundColor: '#f8f9fa',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  productivityTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  productivityDescription: {
    fontSize: 16,
    color: '#6c757d',
    lineHeight: 24,
    marginBottom: 16,
  },
  productivityLink: {
    alignSelf: 'flex-start',
  },
  productivityLinkText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: '600',
  },
  // Enterprise Section
  enterpriseSection: {
    paddingHorizontal: 24,
    paddingVertical: 60,
    backgroundColor: '#f8f9fa',
  },
  enterpriseSubtitle: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 40,
  },
  enterpriseGrid: {
    gap: 24,
  },
  enterpriseCard: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  enterpriseCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  enterpriseCardDescription: {
    fontSize: 16,
    color: '#6c757d',
    lineHeight: 22,
  },
  // Integrations Section
  integrationsSection: {
    paddingHorizontal: 24,
    paddingVertical: 60,
    backgroundColor: 'white',
  },
  integrationsSubtitle: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 40,
  },
  integrationsScroll: {
    paddingHorizontal: 16,
  },
  integrationsGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  integrationLogo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6c757d',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  // Testimonials Section
  testimonialsSection: {
    paddingHorizontal: 24,
    paddingVertical: 60,
    backgroundColor: '#f8f9fa',
  },
  testimonialsGrid: {
    gap: 32,
  },
  testimonialCard: {
    backgroundColor: 'white',
    padding: 32,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  testimonialText: {
    fontSize: 18,
    color: '#2c3e50',
    fontStyle: 'italic',
    lineHeight: 26,
    marginBottom: 20,
  },
  testimonialAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 4,
  },
  testimonialRole: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 12,
  },
  testimonialStats: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  // Final CTA Section
  finalCtaSection: {
    paddingHorizontal: 24,
    paddingVertical: 60,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  },
  finalCtaBadge: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginBottom: 16,
  },
  finalCtaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  finalCtaSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 32,
  },
  finalButtons: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  finalPrimaryButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  finalPrimaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  finalSecondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  finalSecondaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
