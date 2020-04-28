import React, { useState } from 'react';



export default (props) => {
  const {
    size, sequence, name, puzzleType
  } = props;
  const puzzleMap = new Map(sequence.map((entry) => {
    return [entry, 0];
  }));
  const [state, setState] = useState(
    {
      puzzleMap
    }
  );
  const incrementCount = (key) => {
    const puzzleMap = new Map(state.puzzleMap);
    const newCount = parseInt(puzzleMap.get(key), 10) + 1;
    puzzleMap.set(key, newCount);
    setState({ puzzleMap });
  };

  const getNeedString = (puzzleName) => {
    const resultObject = {};
    for (let entry of state.puzzleMap.keys()) {
      const value = state.puzzleMap.get(entry);
      if (value === 0) {
        resultObject[entry] = entry;
      }
    }
    const resultStr = Object.keys(resultObject).join(", ");
    return `${puzzleName}: ${resultStr}`;
  }
  return (
    <div className={`puzzle ${puzzleType}`}>
      <h2>{name}</h2>
      {
        sequence.map((entry) => {
          const entryCount = state.puzzleMap.get(entry);
          const extraClass = entryCount > 0 ? ` puzzle-done ${entryCount > 1 ? " puzzle-extra " : ""}` : "";
          const showedCount = entryCount > 1 ? `(${entryCount - 1})` : "";
          return <div key={entry} className={`puzzle-piece ${extraClass}`} onClick={() => { incrementCount(entry) }}>{entry} {showedCount}</div>
        })
      }
      <div className={`puzzle-need`}>
        {
          getNeedString(name)
        }
      </div>
    </div>
  );
}