import React, { useState, Suspense } from 'react'
import { Grid } from '@material-ui/core'

import { List, Setting } from './components'
import { Loading } from 'components'

import { useToggle, useInput, useTitle } from 'utils'

const listLayout = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

function searchAndSortWorks(works, searchValue, sortValue) {
  const searchedList = works.filter(({ TITLE, AUTHOR, AXIS }) => {
    return TITLE.toLowerCase().includes(
      searchValue.toLowerCase()) ||
      AUTHOR.toLowerCase().includes(searchValue.toLowerCase()) ||
      AXIS.toLowerCase().includes(searchValue.toLowerCase())
  })

  const sortedList = searchedList.sort(function (a, b) {
    if (a[sortValue] < b[sortValue]) { return -1; }
    if (a[sortValue] > b[sortValue]) { return 1; }
    return 0;
  })

  const finalList = sortedList
  return finalList
}



function Trabalhos({ works, setWorks, handleFavoriteButton }) {

  const [sortValue, setLSortValue] = useState('')
  const { toggle, setToggle } = useToggle()
  const [searchValue, setSearchValue] = useInput()
  useTitle('Trabalhos | PSE-2019');

  const props = {
    toggle,
    setToggle,
    searchValue,
    setSearchValue,
    setLSortValue
  }

  let worksToShow = null
  if (works) {
    worksToShow = searchAndSortWorks(works, searchValue, sortValue)
  }

  return (
    <>
      <Setting {...props} />
      <Suspense fallback={<Loading />}>
        <Grid container spacing={32} justify="center" style={{ marginTop: '5px' }}>
          {worksToShow ? (worksToShow.map((work, key) => (
            <Grid item key={work.ID} {...listLayout} style={{ padding: '5px 5px' }}>
              <List {...work}
                favorited={work.favorited} handleFavoriteButton={handleFavoriteButton} />
            </Grid>
          ))) : <Loading></Loading>
          }
        </Grid>
      </Suspense>

    </>
  )
}

// function componentIsEqual(prevProps, nextProps) {
//   // if (prevProps.ID === nextProps.ID) {
//   //   console.log('equal')
//   //   return true
//   // } DANGER!
//   // return true
// }

// export default React.memo(Trabalhos, componentIsEqual)

export default Trabalhos
