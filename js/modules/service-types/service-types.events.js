function createTurnFirebase(turnType, idTurnState, idUser, idServiceType, idSemester, idDependence, nameUser,lastnameUser, documentUser,email, nameServiceType,idAdminAssigned) {
    turnsModule.createTurnFirebase(turnType, idTurnState, idUser, idServiceType, idSemester, idDependence, nameUser,lastnameUser, documentUser,email, nameServiceType,idAdminAssigned)
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
}



$("#service-types").autocomplete({
    source: function (request, response) {
        $.ajax({
            url: constants.URL_API + '/service-types',//Trae todos los tipos de servicios y su dependencia
            dataType: "json",
            data: {
                searchText: request.term
            },
            minLength:0,
            success: function (data) {
                $('#service-container').empty(); 
                response($.map(data, function (item) {                                                
                    if (item.name.toLowerCase().includes(request.term.toLowerCase() )) {                      
                        console.log(item.name);
                        document.getElementById('service-container').insertAdjacentHTML('beforeend', '<li class="button button--wapasha button--round-s service__container--item" name="'+item.name+'" dependence='+item.dependence+' type="radio" name="service_types" id='+item.id+'>'+item.name +'</li>');
                        $('#'+item.id+'').on('click',function(){                    
                            $(this).attr('checked',true);
                            $(this).siblings().removeAttr('checked');                            
                        })
                    }      
                }));
            }
        })
    }
});

$('#service-types').keyup(function(){
    if($("#service-types").val()==""){
        $('#service-container').empty(); 
    }
})

$('#reserve-turn').on('click',function(){
    var nameServiceType = $('li[checked="checked"]').attr('name');
    var idServiceType = $('li[checked="checked"]').attr('id');
    var dependence = $('li[checked="checked"]').attr('dependence');
    var turnType = 'Normal';
    var semester = 2;
    var turnState = 1;
    var infoUser = profileModule.getUserInfo();
    if(nameServiceType!=undefined){  
        
        createTurnFirebase(turnType, turnState, infoUser.id, idServiceType,semester,dependence,infoUser.name,infoUser.lastname,infoUser.document,infoUser.email,nameServiceType,0);        
    
    }else{
        swal({
            title: 'Error!',
            text: 'Debe seleccionar el tipo de servicio por el cual solicita el turno',
            icon: 'error'
        })
    }
})


