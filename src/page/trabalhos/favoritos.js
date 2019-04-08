import React, { useState, useEffect, Suspense } from 'react'
import { Grid } from '@material-ui/core'

import { Module, List, Setting } from './components'
import favourite from 'data/favourite'
import csvFileName from 'data/worklist.csv'
// import Papa from 'papaparse'
// import { csv } from 'd3-request'
import { dsv } from 'd3-fetch'
import { Loading } from 'components'

import { sortBy, useToggle, useInput, useTitle } from 'utils'

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

function Favoritos({ favorites, handleFavoriteButton}) {
  console.log('Favoritos', favorites)
  // const [sortValue, setLSortValue] = useState('')
  // const [works, setWorks] = useState(null)
  // const { toggle, setToggle } = useToggle()
  // const [searchValue, setSearchValue] = useInput()
  useTitle('Favoritos | PSE-2019');

  return (
    <>
      <Grid container spacing={32} style={{ marginTop: '5px' }} key="fdsfds">
        {favorites.length > 0 ? (favorites.map((work, key) => (
          <Grid item key={`${key}-${work.ID}`} {...listLayout} style={{ padding: '5px 5px' }}>
            <List {...work} favorited={work.favorited} handleFavoriteButton={handleFavoriteButton} />
          </Grid>
        ))) : <p style={{ width: '100%', textAlign: 'center' }}>Nenhum favorito selecionado.</p>
        }
      </Grid>
    </>
  )
}

export default Favoritos
