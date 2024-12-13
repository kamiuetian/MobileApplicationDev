import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';
import { ref, onValue, remove, update } from 'firebase/database';

export default function ProjectList() {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const projectRef = ref(db, 'projects');
    onValue(projectRef, (snapshot) => {
      if (snapshot.exists()) {
        setProjects(snapshot.val());
      } else {
        setProjects({});
      }
    });
  }, []);

  const deleteTask = (projectTitle, taskId) => {
    const taskRef = ref(db, `projects/${projectTitle}/tasks/${taskId}`);
    remove(taskRef);
  };

  const toggleStatus = (projectTitle, taskId, currentStatus) => {
    const taskRef = ref(db, `projects/${projectTitle}/tasks/${taskId}`);
    update(taskRef, {
      status: currentStatus === 'Pending' ? 'Complete' : 'Pending',
    });
  };

  return (
    <View>
      {Object.keys(projects).length === 0 ? (
        <Text>No Projects Available</Text>
      ) : (
        Object.keys(projects).map((projectTitle) => (
          <View key={projectTitle} style={styles.projectContainer}>
            <Text style={styles.projectTitle}>{projectTitle}</Text>
            <FlatList
              data={Object.entries(projects[projectTitle].tasks || {})}
              keyExtractor={([taskId]) => taskId}
              renderItem={({ item: [taskId, task] }) => (
                <View style={styles.taskItem}>
                  <Text style={styles.taskText}>
                    {task.name} - {task.status}
                  </Text>
                  <View style={styles.buttonGroup}>
                    <Button
                      title={task.status === 'Pending' ? 'Complete' : 'Pending'}
                      onPress={() => toggleStatus(projectTitle, taskId, task.status)}
                    />
                    <Button
                      title="Delete"
                      color="red"
                      onPress={() => deleteTask(projectTitle, taskId)}
                    />
                  </View>
                </View>
              )}
            />
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  projectContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});