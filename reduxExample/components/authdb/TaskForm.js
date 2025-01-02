import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { ref, push } from 'firebase/database';
import { db } from '../firebaseConfig';

export default function TaskForm() {
  const [projectTitle, setProjectTitle] = useState('');
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (projectTitle && taskName) {
      const projectRef = ref(db, `projects/${projectTitle}/tasks`);
      push(projectRef, {
        name: taskName,
        status: 'Pending',
      });
      setProjectTitle('');
      setTaskName('');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Project Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Project Title"
        value={projectTitle}
        onChangeText={setProjectTitle}
      />
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});