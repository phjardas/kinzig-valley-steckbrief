import React from 'react';
import SteckbriefForm from './SteckbriefForm';

export default function Steckbrief({ classes }) {
  const print = data => {
    console.info('data:', data);
    alert('Das Drucken ist leider noch nicht implementiert. :)');
  };

  return <SteckbriefForm onSubmit={print} />;
}
