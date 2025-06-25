import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../navigation/config/screens.ts';
import {NavigationProps} from '../../navigation/stack/root/RootStackContainer.tsx';
import {useAppDispatch, useAppSelector} from '../../hook/hooksStore.ts';
import {Post} from '../../component/types/Post.ts';
import {CardPost} from './component/CardPost.tsx';
import {EmptyHomeScreen} from './component/EmptyHomeScreen.tsx';
import {deletePost, editPost} from '../../entities/postSlice.ts';
import {useModal} from '../../hook/useModal.ts';
import {ModalEditPost} from './component/ModalEditPost.tsx';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const posts = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const {isModalVisible, openModal, closeModal} = useModal();

  const handleSelectedPost = (post: Post) => {
    setSelectedPost(post);
    openModal();
  };

  const handleSavePost = () => {
    if (selectedPost) {
      dispatch(editPost(selectedPost));
      setSelectedPost(null);
      closeModal();
    }
  };

  return (
    <View style={styles.containerMainScreen}>
      <View style={styles.containerPosts}>
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <CardPost
              item={item}
              onRemove={() => dispatch(deletePost(item.id))}
              onEdit={() => handleSelectedPost(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={<EmptyHomeScreen />}
        />
        {selectedPost && (
          <ModalEditPost
            visible={isModalVisible}
            onClose={closeModal}
            onSave={handleSavePost}
            values={selectedPost}
            setValues={setSelectedPost}
          />
        )}
      </View>
      <NavigationButton
        label={'New Post'}
        onPress={() => navigation.navigate(Screens.createPost)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMainScreen: {
    flex: 1,
  },
  containerPosts: {
    paddingBottom: 90,
  },
});
