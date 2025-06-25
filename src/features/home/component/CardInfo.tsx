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
    left: 10,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 22,
  },
  date: {
    fontSize: 14,
  },
  baseStatus: {
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  greenBd: {
    color: Colors.green,
    backgroundColor: Colors.lightgreen,
  },
  redBd: {
    color: Colors.red,
    backgroundColor: Colors.lightred,
  },
});
