import React, { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { dsv } from 'd3-fetch'
import csvFileName from 'data/worklist.csv'

import { Drawer, AppBar, Loading } from 'components'
import { useToggle } from 'utils'
import Favoritos from './trabalhos/favoritos';
import Trabalhos from './trabalhos';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    overflowY: 'auto',
    backgroundColor: (theme.palette.type === 'dark') ? '#191919' : '#fafafa',
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 48,
  },
}))

const routes = [
  {
    path: '/',
    component: withRouter(lazy(() => import('./inicial')))
  },
  {
    path: '/avaliar-trabalho',
    render: withRouter(lazy(() => import('./avaliar-trabalho')))
  },
  {
    path: '/programacao',
    render: withRouter(lazy(() => import('./programacao')))
  },
  {
    path: '/infos',
    render: withRouter(lazy(() => import('./infos')))
  },
  {
    path: '(.*)',
    render: withRouter(lazy(() => import('./error')))
  },
]

let favoritesInitializedFromLocalStorage = false

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(() => {
    favoritesInitializedFromLocalStorage = true
    return JSON.parse(localStorage.getItem(localStorageKey)) || []
  }
  );

  return [value, setValue];
};

function App() {
  const classes = useStyles()
  const _useToggle = useToggle()
  const [works, setWorks] = useState(null)
  const [favorites, setFavorites] = useStateWithLocalStorage(
    'favoritesWorksPse2019'
  );

  useEffect(() => {
    // console.log('effect fav!')
    localStorage.setItem('favoritesWorksPse2019', JSON.stringify(favorites));
  });

  if (favoritesInitializedFromLocalStorage && works) {
    // console.log('fvInLS')

    if (favorites.length > 0) {
      setWorks((works) => {
        let worksNew = [...works]
        for (let i = 0; i < favorites.length; i++) {
          const idxFavorited = works.findIndex(item => item.ID === favorites[i].ID)
          worksNew[idxFavorited] = { ...worksNew[idxFavorited], favorited: true }
        }
        return worksNew
      })
    }
    favoritesInitializedFromLocalStorage = false
  }

function handleFavoriteButton(e, workClicked) {
  setFavorites(favWorks => {
    const idxMatch = favWorks.findIndex(item => item.ID === workClicked.ID)
    if (idxMatch > -1) {
      favWorks.splice(idxMatch, 1)
      return favWorks
    }
    return [...favWorks, { ...workClicked, favorited: true }]
  })
  setWorks((works) => {
    let worksNew = works.map(item => item)
    const idxClickedWork = worksNew.map(item => item.ID).indexOf(workClicked.ID)
    // console.log('fav-handle', workClicked)
    worksNew[idxClickedWork] = { ...workClicked, favorited: !workClicked.favorited }
    return worksNew
  })
}

useEffect(
  () => {
    dsv(';', csvFileName, (loadedData) => {
      Object.keys(loadedData).map(function (key, val) {
        loadedData[key] = loadedData[key].trim();
        return 0
      });
      loadedData.favorited = false
      return loadedData
    }).then((data) => {
      // console.log('data here', data)
      setWorks(data)
    }).catch(err => console.log(err)) //To Notify!
  },
  [],
);

return (
  <Router basename={process.env.PUBLIC_URL}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar {..._useToggle} />
      <Drawer{..._useToggle} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route key="favorites" exact path="/favoritos"
              render={(props) => (<Favoritos {...props}
                favorites={favorites} handleFavoriteButton={handleFavoriteButton} />)} />
            <Route key="trabalhos" exact path="/trabalhos"
              render={(props) => (<Trabalhos {...props}
                works={works} setWorks={setWorks}
                handleFavoriteButton={handleFavoriteButton} />)} />
            {routes.map((route, key) => <Route key={key} exact {...route} />)}
          </Switch>
        </Suspense>
      </main>
    </div>
  </Router>
)
}

export default App
