import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from '../../components/collections-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, fetchCollectionsStartAsync, isCollectionsFetching, isCollectionsLoaded }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [])

  return (

    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => (<CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />)} />
      <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />)} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);