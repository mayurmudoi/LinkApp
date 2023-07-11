import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LinkScreen({onLinkAdded}) {
  const [links, setLinks] = useState([]);
  const [linkInput, setLinkInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editLink, setEditLink] = useState('');
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedLinks = await AsyncStorage.getItem('links');

      if (storedLinks !== null) {
        setLinks(JSON.parse(storedLinks));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('links', JSON.stringify(links));
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  

const handleAddLink = () => {
  // Validate link and title inputs
  if (!linkInput || !titleInput) {
    return;
  }

  // Check if link follows a valid URL format (example: "https://www.example.com")
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/;
  if (!urlPattern.test(linkInput)) {
    return;
  }

  // Create a new link object and add it to the links array
  const newLink = {
    link: linkInput,
    title: titleInput,
  };
  setLinks([...links, newLink]);

  // Clear the link and title inputs
  setLinkInput('');
  setTitleInput('');

  // Save the updated links array in AsyncStorage
  saveData();onLinkAdded(linkInput, titleInput);
};


  const handleDeleteLink = (index) => {
    // Remove the link from the links array based on the provided index
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const handleEditLink = (index) => {
    const linkToEdit = links[index];
    setEditIndex(index);
    setEditLink(linkToEdit.link);
    setEditTitle(linkToEdit.title);
  };

  const handleSaveLink = (index) => {
    if (!editLink || !editTitle) {
      return;
    }

    const updatedLinks = [...links];
    updatedLinks[index] = {
      link: editLink,
      title: editTitle,
    };
    setLinks(updatedLinks);
    setEditIndex(-1);
    setEditLink('');
    setEditTitle('');
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setEditLink('');
    setEditTitle('');
  };

  useEffect(() => {
    saveData();
  }, [links]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter URL Link"
            value={linkInput}
            onChangeText={setLinkInput}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter URL Title"
            value={titleInput}
            onChangeText={setTitleInput}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddLink}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
        {links.map((link, index) => (
          <View key={index} style={styles.linkContainer}>
            <View style={styles.linkRow}>
              <Text style={styles.linkText}>{link.link}</Text>
              <Text style={styles.titleText}>{link.title}</Text>
            </View>
            {editIndex !== index ? (
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteLink(index)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEditLink(index)}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.editRow}>
                <TextInput
                  style={styles.editInput}
                  value={editLink}
                  onChangeText={setEditLink}
                />
                <TextInput
                  style={styles.editInput}
                  value={editTitle}
                  onChangeText={setEditTitle}
                />
                <View style={styles.saveOption}>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => handleSaveLink(index)}
                  >
                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => handleCancelEdit()}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  linkContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  linkText: {
    fontSize: 16,
    marginRight: 10,
  },
  titleText: {
    fontSize: 16,
    color: 'gray',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteButton: {
    marginRight: 10,
  },
  editButton: {},
  saveOption: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  saveButton: {
    backgroundColor: 'lightgray',
    width: '40%',
    alignItems: 'center',
    marginRight: 4,
    borderRadius: 10,
    height: 25,
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: 'lightgray',
    width: '40%',
    alignItems: 'center',
    marginRight: 4,
    borderRadius: 10,
    height: 25,
    justifyContent: 'center',
}})
