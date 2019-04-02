var userModule = {
    getAllusers: function () {
        return $.ajax({
            method: 'get',
            url: constants.URL_API + '/users/all-index'
        })
    },


    createUserToken: function (document, name, lastname, email, phone, password, idUserState) {
        return $.ajax({
            method: 'POST',
            url: constants.URL_API + '/users/token',
            data: {
                document: document,
                name: name,
                lastname: lastname,
                email: email,
                phone: phone,
                password: password,
                idUserState: idUserState
            }
        })
    }
}