import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollections } from '../../redux/shop/shop.selector'  

import './collections-overview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({ id, ...otherCollecitonProps }) => (
        <CollectionPreview key={id} {...otherCollecitonProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)