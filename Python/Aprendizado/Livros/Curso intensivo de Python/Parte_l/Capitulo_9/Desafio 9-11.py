import usuario

Admin = usuario.admin('Pedro', 'arthur')

Admin.descrever_usuário()
Admin.saudação()
Admin.mostrar_privilegios()

usuário = usuario.user('Maria', 'Cecilía')

usuário.descrever_usuário()
usuário.saudação()

usuário = usuario.user('Maitê', 'Ferreira')

usuário.descrever_usuário()
usuário.saudação()