import React from 'react';

import StyledButton from './styles/StyledButton';

export default ({ type, label, classes }) => {
  console.log(type, label, classes);
  return (
    <StyledButton type={type} className={classes}>
      {label}
    </StyledButton>
  );
};
