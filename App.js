import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Navbar from './src/Navbar'
import AddTodo from './src/AddTodo'
import TodoItem from './src/TodoItem'

export default function  App() {
  const  [ todos, setTodos ] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View >
      <Navbar title="Todo App"/>
      <View style={styles.container}>
        <AddTodo onSubmit={ addTodo }/>
        <FlatList 
          data={ todos }
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => ( <TodoItem todo={item} onRemove={removeTodo}/> )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
