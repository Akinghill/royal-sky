import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util'
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true)
  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      setLoading(false)
    })
  }, [])

  return (

    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
      <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);