var profileModule = {

    getUserInfo : function(){
        var usuario = store.get('user');
        var info = {
            'id' : usuario.id,
            'name' :usuario.name,
            'lastname':usuario.lastname,
            'email' :usuario.email,
            'document':usuario.document
        }
        return info;
    }
}