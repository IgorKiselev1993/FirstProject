import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../../constant/colors.tsx';
import {Post} from '../../../../types.ts';
import {InfoContainerCard} from './InfoContainerCard.tsx';

type PostCardProps = {
  item: Post;
  onDelete: (postId: string) => void;
};

export const PostCard = ({item, onDelete}: PostCardProps) => {
  return (
    <View style={styles.containerPost}>
      <InfoContainerCard item={item}/>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>
        {item.description}
      </Text>
      <TouchableOpacity
        style={styles.deletePost}
        onPress={() => onDelete(item.id)}>
        <Text style={styles.labelDelete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    backgroundColor: Colors.white,
  },
  description: {
    marginTop: 12,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 20,
  },
  deletePost: {
    position: 'absolute',
    top: 2,
    right: 5,
    width: 20,
    borderRadius: 50,
    backgroundColor: Colors.red,
  },
  labelDelete: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.white,
  },
});
