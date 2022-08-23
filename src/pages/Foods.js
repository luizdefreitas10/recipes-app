import React, { useContext, useEffect } from 'react';
import Header from '../components/Header
import Recipes from '../components/Recipes';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { setTitlePage } = useContext(RecipesContext);
  useEffect(() => {
    setTitlePage('Foods');
  }, [setTitlePage]);
  return (
    <div>
      <Header />
      <Recipes />
    </div>
  );
}

export default Foods;
