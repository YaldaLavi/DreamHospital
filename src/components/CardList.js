import React from 'react';
import Card from './Card';

const CardList = ({ listDr }) => {
  return (
    <div>
      {
        listDr.map((user, i) => {
          return (
            <Card
              key={i}
              id={listDr[i].BeneficiaryCode}
              photo={listDr[i].ProfilePicture}
              name={listDr[i].UserFullName}
              expertise={listDr[i].BeneficiaryGroupName}
              
              />
          );
        })
      }
    </div>
  );
}

export default CardList;