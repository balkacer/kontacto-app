import React, { useState, useEffect } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Color, Style, Convertor } from '../tools';

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

  const toBase64 = (imgUri) => {
    return new Convertor(imgUri).stringToBase64;
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    
    if (!result.cancelled) {
      setImage(result.uri);
      const img64 = toBase64(result.uri);
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