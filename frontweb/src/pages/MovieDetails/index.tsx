import React from 'react';

import './styles.css';
import ButtonIcon from 'Components/ButtonIcon';
import ReviewCard from 'Components/ReviewCard';

function MovieDetails() {
  return (
    <div className="container-moviedetails">
      <h1>Tela detalhes do filme id: 1</h1>

      <div className="container-avaliação base-card">
        <input
          type="text"
          className="form-control base-input"
          placeholder="Deixe sua avaliação aqui"
          name="avalicacao"
        />
        <div className='container-btn-salvar-avaliacao'>
          <ButtonIcon text="Salvar Avaliação" />
        </div>
      </div>

      <div className="container-reviews base-card">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default MovieDetails;
