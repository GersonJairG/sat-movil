var userModule = {
    getAllusers: function () {
        return $.ajax({
            method: 'get',
            url: constants.URL_API + '/users/all-index'
        })
    },


    createUserToken: function (document, name, lastname, email, phone, password, id_user_state) {
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
                id_user_state: id_user_state
            }
        })
    }
}