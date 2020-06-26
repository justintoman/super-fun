import React from 'react';
import { useRecoilValue } from 'recoil';
import { animalImage } from '../store/selectors';
import { imageHeight } from '../store/atoms';

function AnimalImage({ id }: { id: number }) {
  const url = useRecoilValue(animalImage(id));
  const height = useRecoilValue(imageHeight);

  return <img src={url} height={height} />;
}

export default AnimalImage;
