import $ from 'jquery';

const SearchPostalCode = {
    getByPostalCode(postalCode) {
        return $.getJSON({
            url: `https://viacep.com.br/ws/${postalCode}/json/?callback=callback`,    
            dataType: 'jsonp',
            data: JSON.stringify({
                bairro: 'Alvarenga',
                cep: '09854100',
                complemento: '(Las Palmas)',
                localidade: 'São Bernardo do Campo',
                logradouro: 'Rua Guarapé',
                uf: 'SP'
            })
        });
    },
    getGeometryByLocation(location) {
        return $.getJSON({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location.logradouro}-${location.bairro}-${location.localidade}`
        });
    }
}

export default SearchPostalCode;