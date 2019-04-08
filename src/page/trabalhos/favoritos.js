import React from 'react'
import { Grid } from '@material-ui/core'

import { List } from './components'

import { useTitle } from 'utils'

const listLayout = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

function Favoritos({ favorites, handleFavoriteButton}) {
  // console.log('Favoritos', favorites)
  useTitle('PSE-2019 | Favoritos');

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
