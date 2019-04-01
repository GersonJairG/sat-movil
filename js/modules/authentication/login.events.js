
function verifyLogin() {

    var password = $('#inputPassword').val();
    var email = $('#inputEmail').val();

    loginModule.sessionClear();

    //Verificacion email
    if (email != '') {
        if(password!=''){
            if(helper.checkEmail(email)){   
                loginModule.login(email, password)
                .then(function (response) {
                    console.log(response);
                    if(response!=''){
                        loginModule.sessionCreate({
                            id: response.id,
                            name: response.name,
                            lastname: response.lastname,
                            email: response.email,
                            dependence: response.dependence,
                            document : response.document,
                            role: response.role,
                            permissions: response.permissions
                        });
                        location.href='paso2.html';                                            
                    }else{
                        swal({
                            title: 'Error!',
                            text: 'El usuario no es valido o no tiene permisos para acceder',
                            icon: 'error'
                        })
                    }                    
                        
                })
                .catch(function (error) {      
                    console.log(error);              
                });
            }else{
                swal({
                    title: 'Error!',
                    text: 'El correo no es valido',
                    icon: 'error'
                })
            }
        }else{
            swal({
                title: 'Error!',
                text: 'Debe digilenciar su contraseña para acceder',
                icon: 'error'
            })
        }
    }else{
        swal({
            title: 'Error!',
            text: 'Debe digilenciar su email para acceder',
            icon: 'error'            
        })
    }


}

$('#login-movil').on('click', verifyLogin);

$('#logout').on('click',function(){
    loginModule.sessionClear();
})
