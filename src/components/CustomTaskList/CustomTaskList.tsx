import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { allActions, ReduxSampleStore } from '../../store/Store';

import { Alert } from '@twilio-paste/core/alert';
import { Theme } from '@twilio-paste/core/theme';
import { Text } from '@twilio-paste/core/text';

const CustomTaskList = (): JSX.Element | null => {
  const isOpen = useSelector<ReduxSampleStore>((state) => state.customTaskList.isOpen);
  const dispatch = useDispatch()
  
  const dismiss = () => {
    dispatch(allActions.customTaskList.dismiss);
  };

  if (!isOpen) {
    return null;
  }
  
  return (
    <Theme.Provider theme="default">
      <Alert onDismiss={dismiss} variant="neutral">
      <Text as="span">This is a dismissible demo component.</Text>
      </Alert>
    </Theme.Provider>
  );
};

CustomTaskList.displayName = 'foo';

export default CustomTaskList;
