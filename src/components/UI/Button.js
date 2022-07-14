import React from 'react';

import StyledButton from '../styles/StyledButton';

export default ({ type, label, classes, func }) => {
  return (
    <StyledButton onClick={func} type={type} className={classes}>
      {label}
    </StyledButton>
  );
};
