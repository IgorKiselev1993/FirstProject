import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {formatDate} from './formatDate.ts';
import {Colors} from '../../../../constant/colors.tsx';
import {Post} from '../../../../types.ts';

type PostInfoContainerCardProps = {
  item: Post;
}

export const InfoContainerCard = ({item} : PostInfoContainerCardProps) => {
  return (
    <View style={styles.cardPost}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.date}>
          <Text style={styles.dateText}>Created at: </Text>
          {formatDate(new Date(item.createdAt))}
        </Text>
        <View
          style={[
            styles.statusContainer,
            item.status === 'Published' ? styles.publishedBg : styles.draftBg,
          ]}>
          <Text
            style={[
              styles.statusText,
              item.status === 'Published'
                ? styles.publishedText
                : styles.draftText,
            ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPost: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: Colors.black,
    marginBottom: 6,
  },
  dateText: {
    color: Colors.grey,
  },
  statusContainer: {
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  publishedBg: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Colors.lightGreen,
  },
  draftBg: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.lightRed,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  publishedText: {
    color: Colors.green,
  },
  draftText: {
    color: Colors.red,
  },
});
