import React from 'react';
import Puzzle from '../Puzzle';
import Schema from '../Puzzle/Schema';

export default () => {
  const simple = Object.keys(Schema.simple).map((entry) => {
    return <Puzzle name={entry} puzzleType={"simple"} {...Schema.simple[entry]} key={entry} />
  });
  const difficult = Object.keys(Schema.difficult).map((entry) => {
    return <Puzzle name={entry} puzzleType={"difficult"} {...Schema.difficult[entry]} key={entry} />
  });
  return <div>
    <div>
      {simple}
    </div>
    <div>
      {difficult}
    </div>
  </div>;
}