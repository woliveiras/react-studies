import React from 'react';
import SearchEngine from './SearchEngine';
import SearchResults from './SearchResults';

class ReactMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        bairro: null,
        cep: null,
        complemento: null,
        localidade: null,
        logradouro: null,
        uf: null,
        geometry: null
      }
    };

    this.updateAddress = this.updateAddress.bind(this);
    this.updateGeometry = this.updateGeometry.bind(this);
  }
  updateAddress(address) {
    this.setState({ address : address });
  }
  updateGeometry(geometry) {
    this.setState({ geometry : geometry });
  }
  render() {
    return (
      <div>
        <SearchEngine updateAddress={ this.updateAddress } updateGeometry={ this.updateGeometry }/>
        <SearchResults address={ this.state.address } geometry={ this.state.geometry }/>
      </div>
    );
  }
}

export default ReactMaps;
