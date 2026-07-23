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

fazer_album('Mickael Jackson', 'Thriller', 9)
fazer_album('Nirvana', 'Nevermind')
fazer_album('Amy Winehouse', 'Back to Black')
