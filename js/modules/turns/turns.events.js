function loadInfoUser(){
    var usuario = profileModule.getUserInfo();
    $('#name_user-ticket').html(usuario.name+ ' '+ usuario.lastname);
    $('#document_user-ticket').html(usuario.document);
}

loadInfoUser();

function getIdFirebase(){
    var link = window.location.href;
    var idFirebase = link.substring(link.length-20,link.length);
    return idFirebase;
}

function loadInfoTurnsFirebase() {
    var result = turnsModule.getTurnsFirebase();
    result.on('value', function (snapshot) {
        var response = snapshot.val();        
        var turnoActual = response[getIdFirebase()];
        if(turnoActual!=undefined){
            $('#service_type-ticket').html(turnoActual.name_service_type);
        }else{
            swal({
                title: "Turno Caducado",
                text: "El turno ya ha sido atendido o fue cancelado",
                icon: "warning",                
            }).then((value => {
                if (value) {
                    location.href="paso2.html";
                }
            }))
        }
    });
}


loadInfoTurnsFirebase();


function position(){
    var turnos = turnsModule.getTurnsFirebase();
    var position = 0;
    turnos.on('value', function (snapshot) {
        var response = snapshot.val();
        var turnoActual = response[getIdFirebase()];       
        for (var content in response) {
            var turnoFirebase = response[content];             
            if(turnoFirebase.id_turn_state == 1){   
                // console.log('primero');             
                if(turnoFirebase.id_user==turnoActual.id_user && turnoFirebase != turnoActual){                    
                    // console.log('segundo');
                }
                if(turnoFirebase == turnoActual){                   
                    // console.log('total : '+position);
                    return position;
                    // console.log('cuatro');
                }else{
                    position = position+1; 
                    // console.log('quinto');
                }
                
            }     
            
        }
        return position;
        console.log('fuera del for') ;
    })
    console.log('afuera del on');
}


function loadFooter(){
    var number = position();
    if(number == '0'){
        $('#footer').empty();
        document.getElementById('footer').insertAdjacentHTML('beforeend', '<p style="font-size: 15px;">No hay usuarios en cola<span class="badge"></span></p>');
    }else{
        document.getElementById('footer').insertAdjacentHTML('beforeend', '<p style="font-size: 15px;">Usuarios en cola: <span class="badge">'+number +'</span></p>');
    }
}

// loadFooter();


$('#cancel-turn').on('click',function(){
    swal({
        title: "Cancelar Turno",
        text: "¿Esta seguro de cancelar este turno?",
        icon: "warning",                
        buttons : ['No,cancelar','Si,cancelar']
    }).then((value => {
        if (value) {
            turnsModule.changeStateTurn(getIdFirebase(),4);
            location.href="paso2.html";
            
        }
    }))
})