import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {SelectStatus} from '../../types/StatusProps.ts';

export const SelectStatusInput = ({value, onPress, isOpen}: SelectStatus) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.statusInput}>
      <View style={styles.containerStatus}>
        <Text style={styles.size}>{value}</Text>
        <Text style={styles.size}>{isOpen ? '▲' : '▼'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  statusInput: {
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    height: '20%',
    width: '90%',
    backgroundColor: Colors.whitesmoke,
    padding: 10,
  },
  containerStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  size: {
    fontSize: 20,
  },
});
