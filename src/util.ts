
import batCat from './img/bat_cat.jpg';
import gloriousCat from './img/glorious_cat.jpg';
import grassDog from './img/grass_dog.jpg';
import pantsCat from './img/pants_cat.jpg';
import sadDog from './img/sad_dog.jpg';
import teethDog from './img/teeth_dog.jpg';

export function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, Math.random() * 2000 + 500);
  });
}

export function getImage(id: number) {
  return delay(urls[id]);
}

const urls = [
  teethDog,
  batCat,
  gloriousCat,
  grassDog,
  pantsCat,
  sadDog
];
