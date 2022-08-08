import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import StyledDropdownMenu from '../styles/StyledDropdownMenu';

export default function DropdownMenu({ items, clickItemHandler }) {
  return (
    <StyledDropdownMenu>
      <div className="dropdown-container">
        {items.map((item) =>
          item.name !== 'Logout' ? (
            <Link
              to={`${item.ref}`}
              key={item.id}
              id={item.id}
              className="dropdown-item"
              onClick={clickItemHandler}
            >
              {item.name}
            </Link>
          ) : (
            item.ref
          )
        )}
      </div>
    </StyledDropdownMenu>
  );
}
