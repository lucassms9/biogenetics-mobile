import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';

import { colors } from '~/styles';
import styles from './styles';

const Loader = ({ color }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={color} />
  </View>
);
Loader.defaultProps = {
  color: colors.primary,
};

Loader.propTypes = {
  color: PropTypes.string,
};

export default Loader;
