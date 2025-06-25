import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {RemoveButton} from '../../../component/ui/button/RemoveButton.tsx';
import {Colors} from '../../../constant/colors.ts';
import {Post} from '../../../component/types/Post.ts';
import {CardInfo} from './CardInfo.tsx';

interface CardPostProps {
  item: Post;
  onRemove: () => void;
  onEdit: () => void;
}

export const CardPost = ({item, onRemove, onEdit}: CardPostProps) => {
  return (
    <View style={styles.containerPost}>
      <RemoveButton onRemove={onRemove} label={'X'} styleButton={styles.deletePost}/>
      <RemoveButton onEdit={onEdit} label={'📝'} styleButton={styles.editPost}/>
      <View style={styles.cardPost}>
        <Image style={styles.image} source={{uri: item.image}} />
        <CardInfo item={item} />
      </View>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>
        {item.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    padding: 20,
    top: 20,
    marginBottom: 20,
    backgroundColor: Colors.white,
  },
  cardPost: {
    height: 120,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },description: {
    marginTop: 20,
    fontSize: 16,
  },
  deletePost: {
    right: 10,
    top: 10,
    borderRadius: 50,
  },
  editPost: {
    right: 40,
    top: 10,
    backgroundColor: Colors.blue,
  },
});
