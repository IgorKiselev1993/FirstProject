import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CreatePostScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>CreatePost</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack('Home')}>
          <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default CreatePostScreen;
