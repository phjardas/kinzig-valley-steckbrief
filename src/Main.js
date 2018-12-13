import React, { useState } from 'react';
import Steckbrief from './Steckbrief';
import SteckbriefView from './SteckbriefView';

export default function Main() {
  const [data, setData] = useState();

  return data ? <SteckbriefView {...data} onReset={() => setData()} /> : <Steckbrief onSubmit={setData} />;
}
