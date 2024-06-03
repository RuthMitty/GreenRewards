import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardAction from '../../components/CardAction';
import Tareas from '../../data/Tareas';
import SearchBar from '../../components/SearchBar';

export default function Home() {
  const [search, setSearch] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(Tareas);

  useEffect(() => {
    const filtered = Tareas.filter(task => {
      return task.titulo.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredTasks(filtered);
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        OnChangeText={setSearch}
        placeholder="Buscar Tarea ..." 
      />
      <FlatList
        style={styles.flali}
        data={filteredTasks}
        keyExtractor={item=>(item.id.toString())}
        renderItem={({item}) => (<CardAction item={item} />)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(55, 140, 85, 0.62)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    padding: 25
  },
  flali: {
    width: '100%'
  }
});
