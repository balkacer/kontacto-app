import React, { useState, useEffect } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Style, Convertor } from '../tools';

const ImagePickerComponent = ({onSelectImage = (imageUri) => imageUri}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true
    });

    ;

    if (!result.cancelled) {
      setImage(result.uri);
      const type = String(result.uri).split('.').lastItem;
      const img64 = `data:image/${type};base64,${result.base64}`;
      onSelectImage(img64);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Image
        style={Style.image}
        source={{ uri: image }}
        defaultSource={require('../../assets/img/default.png')}
      />
    </TouchableOpacity>
  );
}

export default ImagePickerComponent;