import React, { useEffect } from 'react';
import { FormSpy } from 'react-final-form';
import { getFileData } from './file';
import parseDataUri from 'parse-data-uri';

const localStorageKey = 'kinzig-valley-steckbrief:profile';

async function save(values) {
  const photo = values.photo && values.photo.length ? await getFileData(values.photo[0]) : null;
  localStorage.setItem(localStorageKey, JSON.stringify({ ...values, photo }));
}

export function loadProfile() {
  const values = JSON.parse(localStorage.getItem(localStorageKey) || '{}');

  if (values.photo) {
    try {
      const { mimeType, data } = parseDataUri(values.photo);
      const blob = new Blob([data], { type: mimeType });
      values.photo = [blob];
    } catch (error) {
      console.error('Error restoring photo from cached profile:', error);
      values.photo = null;
    }
  }

  return values;
}

function AutoSave({ values }) {
  useEffect(
    () => {
      save(values);
    },
    [values]
  );

  return null;
}

export default () => <FormSpy subscription={{ values: true }} component={AutoSave} />;
