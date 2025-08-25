import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useWeatherToggle} from '../../../hook/useWeatherToggle.ts';
import {RemoveButton} from '../../../component/ui/button/RemoveButton.tsx';
import {CardInfo} from './CardInfo.tsx';
import {MeteorologyPost} from './MeteorologyPost.tsx';
import {Colors} from '../../../constant/colors.ts';
import {CardPost} from '../../../component/types/CardPost.ts';

export const CardPostView = React.memo(({item, onRemove, onEdit}: CardPost) => {
  const {error, weather, handleToggle, isEnabled, loading} = useWeatherToggle(
    item.id,
  );

  return (
    <View style={styles.containerPost}>
      <RemoveButton
        onRemove={() => onRemove(item.id)}
        label={'X'}
        styleButton={styles.deletePost}
      />
      <RemoveButton
        onEdit={() => onEdit(item)}
        label={'📝'}
        styleButton={styles.editPost}
      />
      <View style={styles.cardPost}>
        <Image
          style={styles.image}
          source={
            item.image
              ? {uri: item.image}
              : require('../../../assets/icons/DefaultImage.jpg')
          }
        />
        <CardInfo item={item} />
      </View>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>
        {item.description}
      </Text>
      <MeteorologyPost
        loading={loading}
        weather={weather}
        isEnabled={isEnabled}
        handleToggle={handleToggle}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  containerPost: {
    padding: 10,
    margin: 15,
    backgroundColor: Colors.silver,
    borderRadius: 15,
  },
  cardPost: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 30,
    width: 100,
    height: 100,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  deletePost: {
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 50,
  },
  editPost: {
    position: 'absolute',
    right: 40,
    top: 10,
    backgroundColor: Colors.blue,
  },
  errorText: {
    top: 10,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    color: Colors.white,
    backgroundColor: Colors.black,
  },
});
