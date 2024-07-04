// App.js
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { BottomNavigation, BottomNavigationTab } from "react-native-paper";



const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello </Text>
          <Text style={styles.greetName}>Trung Đức</Text>
        </View>
        <Image
          source={require("./assets/profile_pic.jpg")}
          style={styles.profilePic}
        />
      </View>
      <View style={styles.insightsSection}>
        <Text style={styles.sectionTitle}>Your Insights</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem}>
          <Image
          source={require("./assets/scanner.png")}
          style={styles.profilePic}
        />
            <Text>Scan New</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
          <Image
          source={require("./assets/warning.png")}
          style={styles.profilePic}
        />
            <Text>Warning</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
          <Image
          source={require("./assets/calendar.png")}
          style={styles.profilePic}
        />
            <Text>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
          <Image
          source={require("./assets/cloud-folder.png")}
          style={styles.profilePic}
        />
            <Text>Directory</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginLeft: 5, fontSize: 18 }}>Explore more</Text>
          <Image source={require('./assets/right-arrow.png')} style={{ width: 30, height: 30, marginRight: 20 }} />
      </View >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
      <Image source={require('./assets/profile_pic.jpg')} style={{ width: 100, height: 100, marginRight: 20 }} />
      <Image source={require('./assets/profile_pic.jpg')} style={{ width: 100, height: 100, marginRight: 20 }} />
      </View>
    </ScrollView>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.bottomTab,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color="#4CAF50" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen2"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color="#FF5722" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Scanner"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="barcode" color="#9C27B0" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen3"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color="#E91E63" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen4"
          component={PlaceholderScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color="#03A9F4" size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const PlaceholderScreen = () => {
  return (
    <View style={styles.placeholderContainer}>
      <Text>Placeholder Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
  },
  greetName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  exploreSection: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    width: "23%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTab: {
    position: "absolute",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    paddingBottom: 10,
    borderTopWidth: 0,
    elevation: 10,
  },
});

export default App;
