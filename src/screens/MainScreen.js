import React from 'react' 
import { StyleSheet, View, FlatList, Image } from 'react-native'
import AddTodo from '../components/AddTodo'
import TodoItem from '../components/TodoItem'

export default function MainScreen ({ addTodo, todos, removeTodo, openTodo }) {
    let content = (
            <FlatList 
              data={ todos }
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (<TodoItem todo={item} onRemove={removeTodo} onOpen={openTodo} />) }
            />
    )
    if ( todos.length === 0) {
        content = (
        <View style={styles.imgWrap}>
              <Image 
                source={require('../../assets/no-items.png')}
                style={styles.image}
            />  
        </View>
        
        )
    }
    return (
        <View>
            <AddTodo onSubmit={ addTodo }/>
        
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    }, 
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})