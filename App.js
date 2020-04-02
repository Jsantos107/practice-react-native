import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [addMode, setaddMode] = useState(false);

  const deleteItem = (title) => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter((goal) => goal !== title)
    })
  }

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal(currentGoal => [...courseGoal, enteredGoal])
    setaddMode(false)
  }

  const cancelGoal = () => {
    setaddMode(false)
  }
  return (
    <View style={styles.main}>
        <Button title="add new goal" onPress={() => setaddMode(true)}/>
        <GoalInput visible={addMode} onAddGoal={addGoalHandler} cancelGoal={cancelGoal}/>
        <FlatList 
          data={courseGoal}
          renderItem={itemData => 
          <GoalItem title={itemData.item} 
          deleteItem={deleteItem}/> }/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    padding: 50
  }
});
