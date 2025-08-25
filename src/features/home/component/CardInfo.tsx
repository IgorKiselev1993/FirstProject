import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {formatPostDate} from '../../../utils/formatPostDate.ts';
import {Colors} from '../../../constant/colors.ts';
import {Post} from '../../../component/types/Post.ts';

interface CardInfoProps {
  item: Post;
}

export const CardInfo = ({item}: CardInfoProps) => {
  return (
    <View style={styles.cardInfo}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>
        Created at: {formatPostDate(item.created_at)}
      </Text>
      <Text
        style={[
          styles.baseStatus,
          item.status === 'Published' ? styles.greenBd : styles.redBd,
        ]}>
        {item.status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardInfo: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: Colors.gray,
  },
  baseStatus: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    padding: 5,
    fontSize: 16,
  },
  greenBd: {
    color: Colors.white,
    backgroundColor: Colors.green,
  },
  redBd: {
    color: Colors.white,
    backgroundColor: Colors.red,
  },
});
