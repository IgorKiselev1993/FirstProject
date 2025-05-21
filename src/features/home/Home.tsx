import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {BaseNavigationButton} from '../../components/ui/button/BaseNavigationButton.tsx';
import {Screens} from '../../navigation/config/screens.ts';
import {RootState} from '../../redux/store.ts';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/reduxHooks.ts';
import {Colors} from '../../constant/colors.tsx';
import {PostCard} from '../createPost/components/cardPostUtils/CardPost.tsx';
import {deletePost} from '../../redux/features/post/postSlice.ts';
import {navigate} from '../../navigation/navigationServise.ts';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.posts.posts);

  const handleDeletePost = (postId: string) => {
    dispatch(deletePost(postId));
  };

  return (
    <View style={styles.container}>
      {posts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>The list of posts is currently empty.</Text>
          <Text>Create a post</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContent}
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <PostCard item={item} onDelete={handleDeletePost} />
          )}
        />
      )}
      <BaseNavigationButton
        label={'New Post'}
        onPressHandler={() => navigate(Screens.createPost)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whitesmoke,
  },
  emptyContainer: {
    marginTop: 150,
    alignItems: 'center',
  },
  listContent: {
    paddingVertical: 15,
    paddingBottom: 80,
  },
});
