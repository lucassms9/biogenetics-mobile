import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ navigation, title, noBack }) => {
  const goBack = () => navigation.goBack();

  const handleSearch = () => console.log('Searching');

  const handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      {!noBack && <Appbar.BackAction color="#fff" onPress={goBack} />}

      <Appbar.Content color="#fff" title={title} style={{ color: '#fff' }} />
      {/* <Appbar.Action icon="magnify" onPress={handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} /> */}
    </Appbar.Header>
  );
};

export default Header;
