function createUserToken(document, name, lastname, email, phone, password, idUserState) {
    userModule.createUserToken(document, name, lastname, email, phone, password, idUserState)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function sendMail(email, name, idFirebase) {
    mailsModule.sendMail(email, name, idFirebase)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}


$('#register-user').on('click', function () {

    var document = $('#document-user').val();
    var name = $('#names-user').val();
    var lastname = $('#last_names-user').val();
    var email = $('#email-user').val();
    var phone = $('#phone-user').val();
    var password = $('#password-user').val();
    var repassword = $('#repassword-user').val();
    var idUserState = 4;//Por confirmar

    if (!(name == '' || lastname == '' || document == '' || email == '' || phone == '' || password == '' || repassword == '')) {
        if (!helper.checkOnlyNumbers(document)) {
            swal({
                title: 'Error!',
                text: 'El campo documento solo acepta caracteres numericos.',
                icon: 'error'
            })
            $('#register-user').attr('data-dismiss', '');
        } else if (!helper.checkOnlyNumbers(phone)) {
            $('#register-user').attr('data-dismiss', '');
            swal({
                title: 'Error!',
                text: 'El campo telefono solo acepta caracteres numericos.',
                icon: 'error'
            })
        } else if (helper.checkEmail(email)) {
            var goodEmail = true;
            var goodDocument = true;
            userModule.getAllusers()
                .then(response => {
                    response.forEach(usuario => {
                        if (usuario.email == email) {
                            goodEmail = false;
                        } if (usuario.document == document) {
                            goodDocument = false;
                        }
                    });
                    if (goodEmail) {
                        if (goodDocument) {
                            if (password == repassword) {
                                $('#register-user').attr('data-dismiss', 'modal');
                                createUserToken(document, name, lastname, email, phone, password, idUserState);
                                swal({
                                    title: 'Datos correctos',
                                    text: 'Por favor confirma tu cuenta por medio del correo',
                                    icon: 'success'
                                }).then((value) => {
                                    if (value) {
                                        limpiarcampos();
                                    }
                                })

                            } else {
                                $('#register-user').attr('data-dismiss', '');
                                swal({
                                    title: 'Error!',
                                    text: 'Las contraseñas no coinciden',
                                    icon: 'error'
                                })
                            }
                        }
                        else {
                            $('#new-admin-user').attr('data-dismiss', '');
                            swal({
                                title: 'Error!',
                                text: 'El documento ingresado ya existe en la base de datos.',
                                icon: 'error'
                            })
                        }
                    } else {
                        $('#new-admin-user').attr('data-dismiss', '');
                        swal({
                            title: 'Error!',
                            text: 'El correo ingresado ya existe en la base de datos.',
                            icon: 'error'
                        })
                    }

                })



        } else {
            swal({
                title: 'Error!',
                text: 'El correo ingresado no es valido',
                icon: 'error'
            })
        }
    } else {
        $('#register-user').attr('data-dismiss', '');
        swal({
            title: 'Datos incompletos!',
            text: 'Es necesario completar todos los campos',
            icon: 'error'
        })
    }

})

function limpiarcampos() {
    $('#document-user').val("");
    $('#names-user').val("");
    $('#last_names-user').val("");
    $('#email-user').val("");
    $('#phone-user').val("");
    $('#password-user').val("");
    $('#repassword-user').val("");
}