import React from 'react';
import Button from './../forms/Button';

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Button onClick={() => onLoadMoreEvt()}>
      Ver Más
    </Button>
  );
};

export default LoadMore;