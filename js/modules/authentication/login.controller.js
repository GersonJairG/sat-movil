var loginModule = {
    login: function(email, password) {
        return $.ajax({
            method : 'post',
            url : constants.URL_API + '/login-movil',
            data: {
                email: email,
                password: password
            }
        });
    },
    resetPassword: function() {
    },
    sessionClear: function () {
        store.clearAll();
    },
    sessionCreate: function (userInfo) {
        store.set('user', { id: userInfo.id, name: userInfo.name, lastname: userInfo.lastname, email: userInfo.email, document: userInfo.document});
        store.set('permissions', userInfo.permissions);
    }
}