def fazer_album(artista, titulo, faixas=''):
    """
    Docstring para descrever um album
    
    :param artista: nome do artista
    :param titulo: titulo do album
    """
    album = {'Artista': artista, 'Título': titulo}
    if faixas:            
        album['faixas'] = faixas
    print(album)

while True:
    artista = input('Artista: ')
    titulo = input('Titulo: ')
    faixas = int(input('Faixas:'))
    while True:
        continuar = input('Quer continuar? "s" para sim ou "n" para não: ').strip().lower()[0]
        if continuar in 'sn':
            break
        print('Digite "s" para sim ou "n" para não')
    if continuar == 'n':
        break

fazer_album(artista, titulo, faixas)    


fazer_album('Mickael Jackson', 'Thriller', 9)
fazer_album('Nirvana', 'Nevermind')
fazer_album('Amy Winehouse', 'Back to Black')
