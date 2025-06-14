import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {BaseInputForm} from '../../../component/ui/input/BaseInputForm.tsx';
import {usePostFormInput} from '../../../hook/usePostFormInput.ts';
import {SelectStatus} from '../../../component/ui/modal/SelectStatus.tsx';

export const FormInputPost = () => {
  const {dataFormInputPost} = usePostFormInput();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  //const closeModal = () => setIsModalVisible(false);

  return (
    <View style={styles.containerDataInput}>
      {dataFormInputPost.map(el =>
        el.id === 'status' ? (
          <SelectStatus
            key={el.id}
            value={el.value}
            onPress={openModal}
            isOpen={isModalVisible}
          />
        ) : (
          <BaseInputForm
            key={el.id}
            value={el.value}
            onChange={el.onChange}
            placeholder={el.placeholder}
            styleExtension={
              el.id === 'description' ? styles.descriptionInput : undefined
            }
          />
        )
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  containerDataInput: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,
  },
  descriptionInput: {
    height: '40%',
    textAlignVertical: 'top',
  },
});
