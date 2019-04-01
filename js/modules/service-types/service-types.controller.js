var serviceTypesModule = {
    getServiceTypes: function() {
        return $.ajax({
            method : 'get',
            url : constants.URL_API + '/service-types',
            data: {
            }
        });
    }
}