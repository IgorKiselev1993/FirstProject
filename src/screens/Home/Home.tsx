import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {BaseNavigationButton} from '../../components/ui/button/BaseNavigationButton.tsx';
import {Screens} from '../../navigation/config/screen.ts';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../navigation/stacks/root/RootStackContainer.tsx';
import {RootState} from '../../redux/store.ts';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/reduxHooks.ts';
import {Colors} from '../../constant/colors.tsx';
import {PostCard} from '../../components/cardPostutils/CardPost.tsx';
import {deletePost} from '../../redux/features/post/postSlice.ts';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
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
        onPressHandler={() => navigation.navigate(Screens.createPost)}
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
  postContainer: {
    marginBottom: 10,
  },
});
