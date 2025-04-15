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
        <Text style={styles.buttonText}>
          {selectedValue || 'Select an option'}{' '}
        </Text>
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
                <Text style={styles.optionText}>{item}</Text>
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
    margin: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
});
