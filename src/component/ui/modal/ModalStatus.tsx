import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {NavigationButton} from '../button/NavigationButton.tsx';
import {Colors} from '../../../constant/colors.ts';
import {IModalStatusProps, statusList} from './interfaceStatusProps.ts';

export const ModalStatus = ({
  visible,
  onClose,
  selectedValue,
  onSelect,
}: IModalStatusProps) => {
  return (
    <Modal visible={visible} transparent={true} animationType={'slide'}>
      <View style={styles.overlayContainer}>
        <View style={styles.modalContainer}>
            {statusList.map(status => (
              <TouchableOpacity
                key={status}
                onPress={() => {
                  onSelect(status);
                  onClose();
                }}
                style={styles.statusListItem}>
                <Text style={styles.statusText}>{status}</Text>
                <Text>{status === selectedValue && '✔'}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.buttonModal}>
        <NavigationButton label={'Close'} onPress={onClose} />
      </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.lightgray,
  },
  modalContainer: {
   height: '55%',
    borderRadius: 15,
    backgroundColor: Colors.white,
  },
  statusListItem: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'black',
  },
  buttonModal: {
    justifyContent: 'flex-end',
    bottom: 30,
  },
});
