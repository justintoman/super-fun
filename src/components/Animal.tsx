import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { animalState } from '../store/selectors';
import AnimalImage from './AnimalImage';
import Loading from './Loading';
import { favoriteAnimalId } from '../store/atoms';

function Animal({ id }: { id: number }) {
  const animal = useRecoilValue(animalState(id));
  const setFavorite = useSetRecoilState(favoriteAnimalId);
  return (
    <div className="animal">
      <h3>
        {animal.id}. {animal.name}
        {'  '}
        <button onClick={() => setFavorite(id)}>❤️</button>
      </h3>
      <div>
        <React.Suspense fallback={<Loading />}>
          <AnimalImage id={id} />
        </React.Suspense>
      </div>
    </div>
  );
}

export default Animal;
