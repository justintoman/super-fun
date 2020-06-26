import { atom } from 'recoil';

export const textState = atom({
  key: 'text',
  default: 'Hello World!'
});

let id = 0;

export const animalsState = atom({
  key: 'animals',
  default: [
    {
      id: id++,
      name: 'Teeth Dog'
    },
    {
      id: id++,
      name: 'Bat Cat'
    },
    {
      id: id++,
      name: 'Glorious Cat'
    },
    {
      id: id++,
      name: 'Grass Dog'
    },
    {
      id: id++,
      name: 'Pants Cat'
    },
    {
      id: id++,
      name: 'Sad Dog'
    }
  ]
});

export const favoriteAnimalId = atom({
  key: 'favorite',
  default: 0
});

export const imageHeight = atom({
  key: 'width',
  default: 150
});
