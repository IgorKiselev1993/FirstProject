import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {BaseInputForm} from '../../../component/ui/input/BaseInputForm.tsx';

export const FormInputPost = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Published');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.containerDataInput}>
      <BaseInputForm
        id={title}
        value={title}
        onChange={setTitle}
        placeholder={'Title'}
      />
      <BaseInputForm
        id={status}
        value={status}
        onChange={setStatus}
        placeholder={'Published'}
      />
      <BaseInputForm
        id={description}
        value={description}
        onChange={setDescription}
        placeholder={'Description'}
        styleExtension={styles.descriptionInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerDataInput: {
    flex: 0.4,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,
  },
  descriptionInput: {
    height: '40%',
    textAlignVertical: 'top',
  },
});
