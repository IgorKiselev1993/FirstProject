import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ListWithoutPosts = () => {
    return (
        <View style={styles.introductoryText}>
            <Text style={styles.textStyle}>The list of posts is empty.</Text>
            <Text style={styles.textStyle}>Create a post</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    introductoryText: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
    },
});
