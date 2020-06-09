import React, { Component } from 'react';

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollecitonProps}) => (
            <CollectionPreview key={id} {...otherCollecitonProps}/>
          ))
        }
      </div>
    );
  }
}

export default ShopPage;