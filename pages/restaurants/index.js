import React from 'react';
import { Categories } from '../../components/Categories';
import { ListRestaurants } from '../../components/ListRestaurants'

export default function index() {
  return (
    <>
      <Categories />
      <ListRestaurants />
    </>
  )
}
