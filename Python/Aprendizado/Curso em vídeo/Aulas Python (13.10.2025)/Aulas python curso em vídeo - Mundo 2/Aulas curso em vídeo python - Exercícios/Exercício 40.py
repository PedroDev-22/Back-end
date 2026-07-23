nota1 = float(input('Digite sua primeira nota:'))
nota2 = float(input('Digite sua segunda nota:'))
media = (nota1 + nota2) / 2
if media < 5.0:
    print(f'Sua média foi {media:.2f}, você foi REPROVADO!')
elif 5.0 <= media <= 6.9:
    print(f'Sua média foi {media:.2f}, você está de RECUPERAÇÃO!')
elif 7.0 <= media <= 9.9:
    print(f'Sua média foi {media:.2f}, você foi APROVADO!')
elif media == 10.0 or media == 10.00 or media == 10:
    print(f'Sua média foi {media:.2f}, meus parabéns, você foi APROVADO!')
elif nota1 >= 10.1 or nota2 >= 10.1 or nota1 >= 10.1 and nota2 >= 10.1:
    print('A sua nota deve ser 10 ou menor') 
else: 
    print('Inválido')

