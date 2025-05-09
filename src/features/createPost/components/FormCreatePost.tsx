import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../constant/colors.tsx';
import {BaseInput} from '../../../components/ui/input/BaseInput.tsx';
import {InlineDropdown} from '../../../components/ui/dropdown/InlineDropdown.tsx';

interface FormCreatePostProps {
  postTitle: string;
  setPostTitle: (newTitle: string) => void;
  postStatus: string;
  setPostStatus: (newStatus: string) => void;
  postDescription: string;
  setPostDescription: (newDescription: string) => void;
}

export const FormCreatePost = ({
  postTitle,
  setPostTitle,
  postStatus,
  setPostStatus,
  postDescription,
  setPostDescription,
}: FormCreatePostProps) => {
  const formDate = [
    {
      id: 'title',
      value: postTitle,
      onChange: setPostTitle,
      placeholder: 'Title',
    },
    {
      id: 'status',
      value: postStatus,
      onChange: setPostStatus,
      placeholder: 'Published',
    },
    {
      id: 'description',
      value: postDescription,
      onChange: setPostDescription,
      placeholder: 'Description',
      styleExtension: styles.descriptionContainerHeight,
    },
  ];

  const statusList = ['Published', 'Draft'];

  return (
    <View style={styles.containerFormPost}>
      {formDate.map(el =>
        el.id === 'status' ? (
          <InlineDropdown
            key={el.id}
            statusList={statusList}
            onSelect={el.onChange}
          />
        ) : (
          <BaseInput
            key={el.id}
            value={el.value}
            onChange={el.onChange}
            placeholder={el.placeholder}
            styleExtension={el.styleExtension}
          />
        ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerFormPost: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
  },
  descriptionContainerHeight: {
    height: 150,
    textAlignVertical: 'top',
  },
});
