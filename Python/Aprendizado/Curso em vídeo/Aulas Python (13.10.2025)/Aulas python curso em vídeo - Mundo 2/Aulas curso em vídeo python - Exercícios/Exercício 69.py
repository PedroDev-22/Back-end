from time import sleep
idade = maior = h_cadastrados = m_menor = 0
sexo = 'f'
continuar = 's'
while continuar == 's':
    print('-=' * 10)
    while True:
      try:
        idade = int(input('Digite a idade:' ))
        break
      except:
        print('Erro. Digite um número inteiro')
        continue
    if idade > 18:
        maior += 1
    while True:
        sexo = (input('Digite o sexo [M/F]' )).strip().lower()[0]
        if sexo == 'm' or sexo == 'f':
           break
        print('Erro. Digite "m" para masculino e "f" para feminino')
    if sexo == 'm':
        h_cadastrados += 1
    if sexo == 'f' and idade < 20:
       m_menor += 1
    print('-=' * 10)
    while True:
        continuar = input('Quer continuar? [S/N] ' ).lower()
        if continuar == 's' or continuar == 'n':
           break
        print('Erro. Digite "s" para sim e "n" para não')
sleep(1)
print('Fim')
print(f'Foram cadastradas {maior} pessoas maiores de 18 anos')
print(f'Foram cadastrados {h_cadastrados} homens')
print(f'Foram cadastradas {m_menor} mulheres menores de 20 anos')

