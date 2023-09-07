/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react';
import { wrapPromise } from './wrap-promise';

export const usePromise2 = (factoryMethod, dependencyArray) => {
  const [promise, setPromise] = useState();
  const [dependencies, setDependencies] = useState();

  if(!compareDeps(dependencies, dependencyArray)) {
    const createdPromise = wrapPromise(factoryMethod());
    setPromise(createdPromise);
    setDependencies(dependencyArray);
    return createdPromise.read();
  }

  return promise?.read();

};

export const usePromise = (factoryMethod, dependencyArray) => {

  const [promise] = useMemo(() => [wrapPromise(factoryMethod())], dependencyArray);

  return promise?.read();

};

const compareDeps = (firstDeps, secondDeps) => {
  if(firstDeps === undefined) return false
  if(firstDeps.length !== secondDeps.length) return false;

  for (let i = 0; i < firstDeps.length; i++) {
    if(firstDeps[i] !== secondDeps[i]) return false
  } 
  return true
}
