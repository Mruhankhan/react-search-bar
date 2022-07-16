import React from 'react'
import SearchBar from './SearchBar/SearchBar'

const products = [
  'apple',
   'cherrys',
   'grapes',
   'apple juice'
]

const colors = [
  'yellow',
  'red',
  'pink',
  'black',
  'pruple',
  'green'
]

export default function app() {
  return (
    <div>
      <SearchBar items={products}/>
      <SearchBar items={colors}/>
    </div>
    )
}
