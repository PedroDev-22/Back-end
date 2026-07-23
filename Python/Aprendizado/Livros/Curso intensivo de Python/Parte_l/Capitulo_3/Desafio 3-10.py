from time import sleep
idiomas = ['Português', 'Inglês', 'Espanhol', 'Italiano', 'Francês']
print('Os idiomas são', idiomas)
sleep(1)
print('Os idiomas em ordem alfabética ficam:', sorted(idiomas))
sleep(1)
idiomas.pop()
idiomas.remove('Inglês')
idiomas.append('Mexicano')
idiomas.insert(1, 'Coreano')
idiomas.append('Russo')
del idiomas[0]
idiomas.insert(1, 'Chinês')
print('Idiomas atualiados')
sleep(1)
print(idiomas)
sleep(1)
idiomas.sort()
print('Os idiomas listados em ordem alfabética inversa ficam:', idiomas)