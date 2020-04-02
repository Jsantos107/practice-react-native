import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    return( 
        <View style={styles.Goal}>
            <TextInput placeholder="Enter content" 
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enteredGoal}/>
            <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderColor:'black', 
        borderWidth: 1, 
        padding:10, width:'80%'
      },
      Goal:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
      }
})
export default GoalInput