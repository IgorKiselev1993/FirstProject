import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {InlineDropItem} from './InlineDropItem.tsx';
import {Colors} from '../../../constant/colors.tsx';

interface InlineDropdownProps {
  statusList: string[];
  onSelect: (item: string) => void;
}

export const InlineDropdown = ({statusList, onSelect}: InlineDropdownProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Published');

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const handleSelect = (item: string) => {
    setSelectedValue(item);
    onSelect(item);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>{selectedValue}</Text>
          <Text style={styles.arrow}>{isDropdownVisible ? '▼' : '▲'}</Text>
        </View>
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={statusList}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <InlineDropItem
                item={item}
                isSelected={item === selectedValue}
                onPress={handleSelect}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
  },
  button: {
    height: 70,
    backgroundColor: Colors.bluewhite,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    paddingHorizontal: 20,
    color: Colors.black,
    fontSize: 20,
  },
  arrow: {
    marginRight: 20,
  },
  dropdown: {
    alignItems: 'stretch',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
});
