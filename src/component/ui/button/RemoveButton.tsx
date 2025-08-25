import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../constant/colors.ts';

interface RemoveButtonProps {
    onRemove?: () => void;
    label: string;
    onEdit?: () => void;
    styleButton?: ViewStyle;
}

export const RemoveButton = ({onRemove, label, onEdit, styleButton}: RemoveButtonProps) => {
    return (
        <TouchableOpacity style={[styles.removeButton, styleButton]} onPress={onRemove} onPressIn={onEdit}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    removeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.red,
        zIndex: 1,
    },
    buttonText: {
        color: 'white',
    },
});



