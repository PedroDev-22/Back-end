mágicos = ['Harry Houdini', 'Fu-Manchu', 'Dai Vernon']

magicians = []
def makegreat(lista_principal, lista_substituta):
    for mágico in mágicos:
        mágico = (f'{mágico} o Grande')
        magicians.append(mágico)

def mostrar_mágicos(lista):
    for mágico in magicians:
        print(mágico)


mostrar_mágicos(makegreat(mágicos, magicians))