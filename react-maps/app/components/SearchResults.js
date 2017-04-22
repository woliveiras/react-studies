import React from 'react';
import SearchPostalCode from '../services/SearchPostalCode';
import GoogleMap from './GoogleMap';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        SearchPostalCode.getGeometryByLocation(this.props.address).then((data) => {
            this.setState(data.results[0].geometry.location);
        });
    }
    render() {
        return (
            <div>
                <h3>{ this.props.address.logradouro }</h3>
                <p>{ this.props.address.bairro }</p>
                <p>{ this.props.address.localidade }</p>
                <p>{ this.props.address.cep }</p>
                <GoogleMap lat={ this.state.lat } long={ this.state.long } zoom={11} />
            </div>
        );
    }
}