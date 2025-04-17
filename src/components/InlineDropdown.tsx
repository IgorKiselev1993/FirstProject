import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Colors} from '../common/colors.tsx';

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
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}>
                <View style={styles.optionContent}>
                <Text style={styles.optionText}>{item}</Text>
                {item === selectedValue && <Text style={styles.checkMark}>✓</Text>}
                </View>
              </TouchableOpacity>
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
