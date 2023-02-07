import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

const SourceCode = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'https://github.com/iamsaqlain-q/Fundo-Notes-RN'}}
      />
    </View>
  );
};

export default SourceCode;
