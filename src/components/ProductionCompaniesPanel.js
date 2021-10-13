import React from 'react';
import StyledProductionCompaniesPanel from './styles/StyledProductionCompaniesPanel';

export default ({ companies, width }) => {
  const image_base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <StyledProductionCompaniesPanel>
      {companies.map((company) =>
        company.logo_path ? (
          <ul>
            <li key={company.name}>
              <img
                width={width}
                src={`${image_base_url}${company.logo_path}`}
                alt={company.name}
                title={company.name}
              />
            </li>
          </ul>
        ) : (
          <></>
        )
      )}
    </StyledProductionCompaniesPanel>
  );
};
