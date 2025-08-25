import React, {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../navigation/config/screens.ts';
import {NavigationProps} from '../../navigation/stack/root/RootStackContainer.tsx';
import {useAppDispatch, useAppSelector} from '../../hook/hooksStore.ts';
import {Post} from '../../component/types/Post.ts';
import {CardPostView} from './component/CardPostView.tsx';
import {EmptyHomeScreen} from './component/EmptyHomeScreen.tsx';
import {deletePost, editPost} from '../../store/entities/postSlice.ts';
import {useModal} from '../../hook/useModal.ts';
import {ModalEditPost} from './component/ModalEditPost.tsx';
import {Colors} from '../../constant/colors.ts';
import {Locales} from '../../constant/locales.ts';
import {isWeatherLoading} from '../../store/entities/weatherSlice.ts';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const posts = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [originalPost, setOriginalPost] = useState<Post | null>(null);
  const {isModalVisible, openModal, closeModal} = useModal();
  const isLoading = useAppSelector(isWeatherLoading);

  const handleEditPost = useCallback(
    (post: Post) => {
      setSelectedPost(post);
      setOriginalPost(post);
      openModal();
    },
    [openModal],
  );

  const handleSavePost = useCallback(() => {
    if (selectedPost && originalPost) {
      const isChangedPost =
        selectedPost.title !== originalPost.title ||
        selectedPost.description !== originalPost.description;
      if (isChangedPost) {
        dispatch(editPost(selectedPost));
      }
      setSelectedPost(null);
      setOriginalPost(null);
      closeModal();
    }
  }, [selectedPost, originalPost, dispatch, closeModal]);

  const handleDeletePost = useCallback(
    (id: string) => {
      dispatch(deletePost(id));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({item}: {item: Post}) => (
      <CardPostView
        item={item}
        onRemove={handleDeletePost}
        onEdit={handleEditPost}
      />
    ),
    [handleEditPost, handleDeletePost],
  );
  return (
    <View style={styles.containerMainScreen}>
      <View style={styles.containerPosts}>
        <FlatList
          data={posts}
          renderItem={renderItem}
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
        label={Locales.home.transitionButton}
        onPress={() => navigation.navigate(Screens.createPost)}
        styleStates={styles.disabledButton}
        disabled={isLoading}
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
  disabledButton: {
    backgroundColor: Colors.gray,
  },
});
