(function () {
    Polymer({
        is: 'data-bind', properties: {
            echo: {
                type: String, value: 'waiting ...', reflectToAttribute: true
            }
        },
        _handleResponse: function (event, request) {
            var response = request.response;
            var joke = response['value']['joke'];
            this.cJoke = JSON.stringify(joke);
        }
    });
})();