import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import StyledDropdownMenu from '../styles/StyledDropdownMenu';

export default function DropdownMenu({
  items,
  clickItemHandler,
  showDropdownFunction,
}) {
  const [showDropdown, setShowDropdown] = useState(true);
  const hideDropwdown = () => {
    setShowDropdown(!showDropdown);
    showDropdownFunction();
    clickItemHandler();
  };

  return (
    <StyledDropdownMenu>
      {showDropdown && (
        <div className={`dropdown-container ${showDropdown ? 'show' : ''}`}>
          {items.map((item) =>
            item.name !== 'Logout' ? (
              <Link
                to={`${item.ref}`}
                key={item.id}
                id={item.id}
                className="dropdown-item"
                onClick={(clickItemHandler, hideDropwdown)}
              >
                {item.name}
              </Link>
            ) : (
              item.ref
            )
          )}
        </div>
      )}
    </StyledDropdownMenu>
  );
}
