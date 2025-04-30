import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {formatDate} from './formatDate.ts';
import {Colors} from '../../constant/colors.tsx';
import {Post} from '../../redux/features/post/postSlice.ts';

type PostCardProps = {
  item: Post;
};

export const PostCard = ({item}: PostCardProps) => {
  return (
    <View style={styles.containerPost}>
      <View style={styles.cardPost}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
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
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {item.description}
      </Text>
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
  description: {
    marginTop: 12,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 25,
  },
});
