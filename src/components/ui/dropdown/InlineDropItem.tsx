import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../../constant/colors.tsx';

interface InlineDropItemProps {
  item: string;
  isSelected: boolean;
  onPress: (item: string) => void;
}

export const InlineDropItem = ({
  item,
  isSelected,
  onPress,
}: InlineDropItemProps) => {
  return (
    <TouchableOpacity style={styles.option} onPress={() => onPress(item)}>
      <View style={styles.optionContent}>
        <Text style={styles.optionText}>{item}</Text>
        {isSelected && <Text style={styles.checkMark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  optionText: {
    fontSize: 20,
    color: Colors.grey,
    fontWeight: '400',
  },
  checkMark: {
    marginRight: 10,
    fontSize: 20,
    color: Colors.grey,
  },
});
