import React from 'react';

import StyledButton from '../styles/StyledButton';

export default ({ type, label, classes, func }) => {
  console.log(type, label, classes);
  return (
    <StyledButton onClick={func} type={type} className={classes}>
      {label}
    </StyledButton>
  );
};
