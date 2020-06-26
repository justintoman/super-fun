import { selectorFamily, selector } from 'recoil';
import { animalsState, favoriteAnimalId } from './atoms';
import { getImage } from '../util';

export const animalState = selectorFamily({
  key: 'animal',
  get: (id: number) => ({ get }) => {
    const animals = get(animalsState);
    const animal = animals.find((a) => a.id === id)!;
    return animal;
  }
});

export const animalImage = selectorFamily({
  key: 'animalImage',
  get: (id: number) => async () => {
    return await getImage(id);
  }
});

export const favoriteAnimalState = selector({
  key: 'favoriteAnimal',
  get({ get }) {
    const id = get(favoriteAnimalId);
    return get(animalState(id));
  }
});
