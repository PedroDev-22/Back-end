mágicos = ['Harry Houdini', 'Fu-Manchu', 'Dai Vernon']
cópia = mágicos[:]
magicians = []
def makegreat(copia, lista_substituta):
    for mágico in copia:
        mágico = (f'{mágico} o Grande')
        magicians.append(mágico)
    return magicians

def mostrar_mágicos(lista):           
    for mágico in lista:
        print(mágico)

mostrar_mágicos(mágicos)
mostrar_mágicos(makegreat(cópia, magicians))