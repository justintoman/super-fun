import React from 'react';
import { useRecoilValue } from 'recoil';
import { favoriteAnimalState, animalImage } from '../store/selectors';

function FavoriteAnimal() {
  const animal = useRecoilValue(favoriteAnimalState);
  const url = useRecoilValue(animalImage(animal.id));

  return (
    <div>
      <h2>❤️❤️❤️ Favorite Animal: {animal.name} ❤️❤️❤️</h2>
      <img src={url} height={250} />
    </div>
  );
}

export default FavoriteAnimal;
