import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Teste'}
            />
            </GoogleMapReact>
        );
    }
}