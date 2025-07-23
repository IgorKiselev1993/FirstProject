import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {NavigationButton} from '../button/NavigationButton.tsx';
import {Colors} from '../../../constant/colors.ts';
import {ModalStatus} from '../../types/StatusProps.ts';
import {Locales} from '../../../constant/locales.ts';

export const ModalStatusView = ({
  visible,
  onClose,
  selectedValue,
  onSelect,
}: ModalStatus) => {
  const statusList = [Locales.uiModal.openStatus, Locales.uiModal.closeStatus];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={'slide'}
      onRequestClose={onClose}>
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
        <NavigationButton label={Locales.uiModal.cancelButton} onPress={onClose} />
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
    flex: 0.6,
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
});
