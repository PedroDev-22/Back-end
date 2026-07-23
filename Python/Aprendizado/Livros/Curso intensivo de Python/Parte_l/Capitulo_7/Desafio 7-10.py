lugares = []
continuar = 's'
while continuar != 'n': 
    lugar = str(input('Se você pudesse visitar um lugar do mundo para onde você iria? '))
    lugares.append(lugar)

    while True:
        continuar = str(input('Quer continuar? ["s" para sim, "n" para não]: ')).strip().lower()[0]
        if continuar in 'sn':
            break
        print('Digite "s", se você quer continuar ou "n", se não')
    if lugar not in lugares:
        lugares.append(lugar)

print('== Lugares Mencionados ==')
for lugar in lugares:
    print(lugar)