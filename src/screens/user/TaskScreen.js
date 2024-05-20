import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import circleImage from '../user/user2.png';
import ImageBg from '../user/Group20.png';
import BottomBar from '../../components/BottomBar';
import TaskButton from '../../components/TaskButton'; 
import { Tareas } from '../../data/Tareas';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


const TaskScreen = () => {
  const [expandedTask, setExpandedTask] = useState(null);
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const handleButtonPress = (item) => {
    if (expandedTask && expandedTask.id === item.id) {
      setExpandedTask(null); // Close if the same task is pressed again
    } else {
      setExpandedTask(item);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixedImageContainer}>
        <Image source={circleImage} style={styles.circleImage} />
      </View>

      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Tareas en proceso</Text>
        <FlatList
          data={Tareas}
          renderItem={({ item }) => (
            <TaskButton
              item={item}
              onPress={() => handleButtonPress(item)}
              expanded={expandedTask && expandedTask.id === item.id}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.taskList}
        />
      </View>

      <BottomBar />
      <ImageBackground source={ImageBg} style={styles.backgroundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: '35%',
    left: 0,
    right: 0,
    width: '100%',
    height: '65%',
    zIndex: -1,
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  taskContainer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: '75%',
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'flex-start',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  fixedImageContainer: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center', 
  },
});

export default TaskScreen;
