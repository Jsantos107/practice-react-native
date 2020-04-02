import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  
  const deleteItem = (title) => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter((goal) => goal !== title)
    })
  }

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal(currentGoal => [...courseGoal, enteredGoal])
  }
  return (
    <View style={styles.main}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        data={courseGoal}
        renderItem={itemData => <GoalItem title={itemData.item} deleteItem={deleteItem}/> }/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    padding: 50
  }
});
