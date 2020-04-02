import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
    
    const goalHandler = () =>{ 
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return( 
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.Goal}>
                <TextInput placeholder="Enter content" 
                style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
                <View style={styles.button}>
                    <Button title='Cancel' color='red' onPress={props.cancelGoal}/>
                    <Button title="Add" onPress={goalHandler}/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input:{
        borderColor:'black', 
        borderWidth: 1, 
        padding:10, 
        width:'80%',
        marginBottom: 15
      },
      Goal:{
        flex: 1,
        justifyContent:'center', 
        alignItems:'center'
      },
      button:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 4,
          width: '40%',
      }
})
export default GoalInput