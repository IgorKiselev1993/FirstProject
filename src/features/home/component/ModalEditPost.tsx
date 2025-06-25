import {Modal, TextInput, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Post} from '../../../component/types/Post.ts';
import {Colors} from '../../../constant/colors.ts';
import {ButtonSaveCancel} from '../../../component/ui/button/ButtonSaveCancel.tsx';

interface EditPostProps {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  values: Post;
  setValues: React.Dispatch<React.SetStateAction<Post | null>>;
}

export const ModalEditPost = ({
  visible,
  onClose,
  onSave,
  values,
  setValues,
}: EditPostProps) => {
  const handleTitleChange = (text: string) => {
    setValues(prev => (prev ? {...prev, title: text} : prev));
  };

  const handleDescriptionChange = (text: string) => {
    setValues(prev => (prev ? {...prev, description: text} : prev));
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={'slide'}
      onRequestClose={onClose}>
      <View style={styles.containerModalView}>
        <View style={styles.containerInputPost}>
          <Text style={styles.placeholderInput}>Title</Text>
          <TextInput
            style={styles.inputText}
            numberOfLines={2}
            value={values.title}
            onChangeText={handleTitleChange}
            placeholder={'Title'}
          />
          <Text style={styles.placeholderInput}>Description</Text>
          <TextInput
            style={styles.inputText}
            numberOfLines={3}
            value={values.description}
            onChangeText={handleDescriptionChange}
            placeholder={'Description'}
          />
          <View style={styles.buttonModal}>
            <ButtonSaveCancel onPress={onClose} label={'Отмена'} />
            <ButtonSaveCancel
              styleSave={styles.buttonSave}
              onPress={onSave}
              label={'Сохранить'}
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
    flex: 0.5,
    margin: 20,
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
  },
  placeholderInput: {
    fontSize: 20,
    alignSelf: 'center',
  },
  inputText: {
    textAlignVertical: 'top',
    fontSize: 16,
    borderRadius: 10,
    margin: 10,
    height: '30%',
    backgroundColor: Colors.whitesmoke,
  },
  buttonModal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonSave: {
    backgroundColor: Colors.green,
  },
});
