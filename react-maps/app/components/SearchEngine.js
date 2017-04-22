import React from 'react';
import SearchPostalCode from '../services/SearchPostalCode';

export default class SearchEngine extends React.Component {
  constructor(props) {
    super(props);
    this.handdleForm = this.handdleForm.bind(this);
  }
  handdleForm(e) {
    e.preventDefault();
    SearchPostalCode.getByPostalCode(this.refs.postalCode.value).then((res) => {
      this.props.updateAddress(res);
    });
  }
  render() {
    return (
        <form onSubmit={ this.handdleForm }>
          <h2>Consultar</h2>
          <label>CEP: </label>
          <input type="text" placeholder="02050-010" required ref="postalCode"/>
          <button>Buscar</button>
        </form>
    );
  }
}