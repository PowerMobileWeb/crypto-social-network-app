import 'react-native';
import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { shallow } from 'enzyme';
import RemindView from '../../../../src/notifications/notification/view/RemindView';
import styles from '../../../../src/notifications/notification/style';

// fake data generation
import boostNotificationFactory from '../../../../__mocks__/fake/notifications/BoostNotificationFactory';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {

  const entity = boostNotificationFactory('remind');

  const notification = renderer.create(
    <RemindView styles={styles} entity={entity}/>
  ).toJSON();

  expect(notification).toMatchSnapshot();
});
