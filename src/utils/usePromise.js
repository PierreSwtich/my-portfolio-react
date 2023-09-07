/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react';
import { wrapPromise } from './wrap-promise';

export const usePromise = (factoryMethod, dependencyArray) => {
  const [promise, setPromise] = useState();

  useEffect(() => {
    setPromise(wrapPromise(factoryMethod()));
  }, dependencyArray);

  return promise?.read();

};



