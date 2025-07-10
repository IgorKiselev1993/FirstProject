import {Modal, TextInput, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../../constant/colors.ts';
import {ButtonSaveCancel} from '../../../component/ui/button/ButtonSaveCancel.tsx';
import {EditPost} from '../../../component/types/EditPost.ts';

export const ModalEditPost = ({
  visible,
  onClose,
  onSave,
  values,
  setValues,
}: EditPost) => {
  const handleTitleChange = (text: string) => {
    setValues(prev => (prev ? {...prev, title: text} : prev));
  };

  const handleDescriptionChange = (text: string) => {
    setValues(prev => (prev ? {...prev, description: text} : prev));
  };

const isTitleValid = values.title.trim().length > 0;
const isDescriptionValid = values.description.trim().length > 0;
const isTitleInvalid = values.title.trim().length === 0;
const isDescriptionInvalid = values.description.trim().length === 0;

  const isValid = isTitleValid && isDescriptionValid;

  return (
    <Modal visible={visible} animationType={'slide'} onRequestClose={onClose}>
      <View style={styles.containerModalView}>
        <View style={styles.containerInputPost}>
          <Text style={styles.placeholderInput}>Title</Text>
          <TextInput
            style={[styles.inputText, isTitleInvalid && styles.inputInvalid]}
            numberOfLines={2}
            value={values.title}
            onChangeText={handleTitleChange}
            placeholder={'Введите заголовок'}
            placeholderTextColor={Colors.red}
          />
          <Text style={styles.placeholderInput}>Description</Text>
          <TextInput
            style={[styles.inputText, isDescriptionInvalid && styles.inputInvalid]}
            numberOfLines={3}
            value={values.description}
            onChangeText={handleDescriptionChange}
            placeholder={'Введите описание'}
            placeholderTextColor={Colors.red}
          />
          <View style={styles.buttonModal}>
            <ButtonSaveCancel onPress={onClose} label={'Отмена'} />
            <ButtonSaveCancel
              styleSave={styles.buttonSave}
              onPress={onSave}
              label={'Сохранить'}
              disabled={!isValid}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.lightgray,
  },
  containerInputPost: {
    flex: 0.8,
    margin: 20,
    justifyContent: 'space-around',
    backgroundColor: Colors.blue,
  },
  placeholderInput: {
    fontSize: 20,
    alignSelf: 'center',
    color: Colors.yellow,
  },
  inputText: {
    textAlignVertical: 'top',
    fontSize: 16,
    borderRadius: 10,
    margin: 10,
    height: '30%',
    color: Colors.black,
    backgroundColor: Colors.white,
  },
  buttonModal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonSave: {
    backgroundColor: Colors.green,
  },
  inputInvalid: {
    borderWidth: 2,
    borderColor: Colors.red,
  },
});
