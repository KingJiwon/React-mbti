import React from 'react';
import Button from './Button';

export default function SkyblueButton({ text, clickEvent }) {
  return (
    <div>
      <Button
        text={text}
        clickEvent={clickEvent}
        mainColor="#72dcfa"
        subColor="#3a82e0"
        hoverColor="#CFECF2"
      />
    </div>
  );
}
