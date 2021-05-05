import { HomeHeader } from './HomeHeader';
import { HomeMainboard } from './HomeMainboard';
import unsplash from '../api/unsplash';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [pins, setNewPins] = useState([]);

  const getImages = term => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit = term => {
    getImages(term).then(res => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['ocean', 'Tokyo', 'dogs', 'cats', 'Ball', 'bats'];

    pins.forEach(pinTerm => {
      promises.push(
        getImages(pinTerm).then(res => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        }),
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <>
      <HomeHeader onSubmit={onSearchSubmit} />
      <HomeMainboard pins={pins} />
    </>
  );
};
