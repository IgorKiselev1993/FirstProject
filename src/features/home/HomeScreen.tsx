import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NavigationButton} from '../../component/ui/button/NavigationButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../navigation/config/screens.ts';
import {NavigationProps} from '../../navigation/stack/root/RootStackContainer.tsx';
import {useAppDispatch, useAppSelector} from '../../hook/hooksStore.ts';
import {Post} from '../posts/typePost.ts';
import {CardPost} from './component/CardPost.tsx';
import {ListWithoutPosts} from './component/ListWithoutPosts.tsx';
import {deletePost} from '../posts/postSlice.ts';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const posts = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.containerMainScreen}>
      <FlatList<Post>
        data={posts}
        renderItem={({item}: {item: Post}) => (
          <CardPost
            item={item}
            onRemove={() => dispatch(deletePost(item.id))}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<ListWithoutPosts />}
      />
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
});
