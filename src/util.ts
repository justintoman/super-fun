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
  '/src/img/teeth_dog.png',
  '/src/img/bat_cat.jpg',
  '/src/img/glorious_cat.jpg',
  '/src/img/grass_dog.jpg',
  '/src/img/pants_cat.jpg',
  '/src/img/sad_dog.jpg'
];
