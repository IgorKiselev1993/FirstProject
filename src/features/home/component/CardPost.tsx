import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../../constant/colors.ts';
import {Post} from '../../posts/typePost.ts';
import {formatPostDate} from '../../../utils/formatPostDate.ts';
import {RemoveButton} from '../../../component/ui/button/RemoveButton.tsx';

interface CardPostProps {
  item: Post;
  onRemove: () => void;
}

export const CardPost = ({item, onRemove}: CardPostProps) => {
  return (
    <View style={styles.containerPost}>
      <RemoveButton onRemove={onRemove} label={'X'} />
      <View style={styles.containerCardPost}>
        <Image style={styles.imageCard} source={{uri: item.image}} />
        <View style={styles.containerCardInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>
            Created at: {formatPostDate(item.created_at)}
          </Text>
          <Text style={styles.status}>{item.status }</Text>
        </View>
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
  containerCardPost: {
    height: 120,
    flexDirection: 'row',
  },
  imageCard: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },
  containerCardInfo: {
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
  },
  date: {
    fontSize: 14,
  },
  status: {
    padding: 20,
    fontSize: 16,
  },
  green:{

  },
  description: {
    marginTop: 20,
    fontSize: 16,
  },
});
