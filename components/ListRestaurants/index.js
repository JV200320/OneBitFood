import React from 'react';
import { Row, Spinner, Alert, Col } from 'react-bootstrap';
import getRestaurants from '../../services/getRestaurants';
import Restaurant from './Restaurant';

export const ListRestaurants = () => {

  const { restaurants, isLoading, isError } = getRestaurants();

  function renderContent() {
    if (isError) {
      return <Col><Alert variant='custom-red'>Erro ao carregar</Alert></Col>
    }
    else if (isLoading) {
      return <Col><Spinner animation='border' /></Col>
    }
    else if (restaurants.length == 0) {
      return <Col><span>Nenhum restaurante disponível ainda...</span></Col>
    }
    else {
      return restaurants.map((restaurant, i) => <Restaurant {...restaurant} key={i} />)
    }
  }

  return (
    <div className='mt-5'>
      <h3 className='fw-bold'>Restaurantes</h3>
      <Row>
        {renderContent()}
      </Row>
    </div>
  )
}
