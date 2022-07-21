import React from 'react';

import StyledButton from '../styles/StyledButton';

export default ({ type = 'button', label, classes, func }) => {
  return (
    <StyledButton onClick={func} type={type} className={classes}>
      {label}
    </StyledButton>
  );
};
