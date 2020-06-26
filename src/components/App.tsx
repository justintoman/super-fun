import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, animalsState } from '../store/atoms';
import Animal from './Animal';
import { imageHeight } from '../store/atoms';
import FavoriteAnimal from './FavoriteAnimal';
import Loading from './Loading';

function App() {
  const [height, setWidth] = useRecoilState(imageHeight);
  const [text, setText] = useRecoilState(textState);
  const animals = useRecoilValue(animalsState);
  return (
    <>
      <h1>Super Fun App ;)</h1>
      <React.Suspense fallback={<Loading />}>
        <FavoriteAnimal />
      </React.Suspense>
      <Title />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>
        Image Height: {height}
        <button onClick={() => setWidth(height + 10)}>+</button>
        <button onClick={() => setWidth(height - 10)}>-</button>
      </div>
      <hr />
      <div className="animals">
        {animals.map((animal) => (
          <Animal id={animal.id} key={animal.id} />
        ))}
      </div>
    </>
  );
}

function Title() {
  const text = useRecoilValue(textState);
  return <h2>{text}</h2>;
}

export default hot(App);
