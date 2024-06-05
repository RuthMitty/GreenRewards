import React, { useContext, useState } from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import circleImage from '../user/user2.png';
import ImageBg from '../user/Group20.png';
import TaskButton from '../../components/TaskButton';
import { Usuarios } from '../../data/Usuarios';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import EmptyScreen from '../../components/EmptyScreen';

const TaskScreen = () => {
  const [expandedTask, setExpandedTask] = useState(null);
  const navigation = useNavigation();
  const {user, setUser} = useContext(AuthContext);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const handleButtonPress = (item) => {
    if (expandedTask && expandedTask.id === item.id) {
      setExpandedTask(null);
    } else {
      setExpandedTask(item);
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = user.tareasEnProceso.filter(task => task.id !== taskId);
    setUser({
      ...user,
      tareasEnProceso: updatedTasks,
    });
  };

  // const allTareasEnProceso = Usuarios.flatMap((usuario) => usuario.tareasEnProceso);

  return (
    <View style={styles.container}>
      <Text style={styles.level}>Nivel: Protector del medio ambiente</Text>
      <View style={styles.fixedImageContainer}>
        <Image source={circleImage} style={styles.circleImage} />
      </View>
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Tareas en proceso</Text>
        {user.tareasEnProceso.length > 0 ? (
          <FlatList
            data={user.tareasEnProceso}
            keyExtractor={item=>(item.id.toString())}
            renderItem={({ item }) => (
              <TaskButton
                item={item}
                onPress={() => handleButtonPress(item)}
                expanded={expandedTask && expandedTask.id === item.id}
                onDelete={() => deleteTask(item.id)}
              />
            )}
            contentContainerStyle={styles.taskList}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <EmptyScreen
            object="tareas"
            textColor="green"
          />
        )

        }
        
      </View>
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
  },
  taskContainer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: '75%',
    height:'52%',
    overflow: 'scroll'
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  fixedImageContainer: {
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  level: {
    position: 'absolute',
    top: 50,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#378C55',
    fontSize: 15,
    width: '50%'
  },
});

export default TaskScreen;