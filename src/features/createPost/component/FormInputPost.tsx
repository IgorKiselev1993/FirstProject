import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../constant/colors.ts';
import {BaseInputForm} from '../../../component/ui/input/BaseInputForm.tsx';
import {useModal} from '../../../hook/useModal.ts';
import {SelectStatusInput} from '../../../component/ui/modal/SelectStatusInput.tsx';
import {ModalStatusView} from '../../../component/ui/modal/ModalStatusView.tsx';
import {FormInput} from '../../../component/types/FormInput.ts';

export const FormInputPost = ({values, setValues}: FormInput) => {
  const modal = useModal();

  const dataFormInputPost = [
    {
      id: 'title',
      value: values.title,
      onChange: setValues.setTitle,
      placeholder: 'Title',
    },
    {
      id: 'status',
      value: values.status,
      onChange: setValues.setStatus,
      placeholder: 'Status',
    },
    {
      id: 'description',
      value: values.description,
      onChange: setValues.setDescription,
      placeholder: 'Description',
    },
  ];

  return (
    <View style={styles.containerDataInput}>
      {dataFormInputPost.map(el =>
        el.id === 'status' ? (
          <SelectStatusInput
            key={el.id}
            value={values.status}
            onPress={modal.openModal}
            isOpen={modal.isModalVisible}
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
        ),
      )}
      <ModalStatusView
        visible={modal.isModalVisible}
        onSelect={setValues.setStatus}
        selectedValue={values.status}
        onClose={modal.closeModal}
      />
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
