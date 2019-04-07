import React, { useState, useEffect, Suspense, useContext } from 'react'
import { Grid } from '@material-ui/core'
import { FavoritesContext } from '../App';

import { Module, List, Setting } from './components'
import favourite from 'data/favourite'
import csvFileName from 'data/worklist.csv'
// import Papa from 'papaparse'
// import { csv } from 'd3-request'
import { dsv } from 'd3-fetch'
import { Loading } from 'components'

import { sortBy, useToggle, useInput, useTitle } from 'utils'

// csv(csvFileName, (error, data) => {
//   if (error) {
//     console.log(' error', error)
//   }
//   console.log(' OK', data)
// })

const moduleLayout = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3
}

const listLayout = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

// function searchAndSortWorks(works, searchValue, sortValue) {
//   const searchedList = works.filter(({ TITLE, AUTHOR, AXIS }) => {
//     return TITLE.toLowerCase().includes(
//       searchValue.toLowerCase()) ||
//       AUTHOR.toLowerCase().includes(searchValue.toLowerCase()) ||
//       AXIS.toLowerCase().includes(searchValue.toLowerCase())
//   })

//   const sortedList = searchedList.sort(function (a, b) {
//     if (a[sortValue] < b[sortValue]) { return -1; }
//     if (a[sortValue] > b[sortValue]) { return 1; }
//     return 0;
//   })

//   const finalList = sortedList
//   return finalList
// }

function Favoritos() {

  // const [sortValue, setLSortValue] = useState('')
  // const [works, setWorks] = useState(null)
  // const { toggle, setToggle } = useToggle()
  // const [searchValue, setSearchValue] = useInput()
  const {favorites, setFavorites} = useContext(FavoritesContext);

  console.log('/favoritos', favorites)

  useTitle('Favoritos | PSE-2019');

  return (
    <>
      <Grid container spacing={32} style={{ marginTop: '5px' }}>
        {favorites.length > 0 ? (favorites.map((work, key) => (
          <Grid item key={key} {...listLayout} style={{ padding: '5px 5px' }}>
            <List {...work} />
          </Grid>
        ))) : <p style={{width: '100%', textAlign: 'center'}}>Nenhum favorito selecionado.</p>
        }
      </Grid>
    </>
  )
}

export default Favoritos
