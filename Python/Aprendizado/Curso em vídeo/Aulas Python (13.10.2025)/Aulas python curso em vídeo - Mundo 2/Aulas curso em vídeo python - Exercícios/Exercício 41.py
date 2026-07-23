from datetime import date
nascimento = int(input('Digite o ano de seu nascimento:'))
atual = date.today().year
idade = atual - nascimento
if idade < 9:
    print(f'Se você tem \033[31m{idade}\033[m anos, sua categoria é \033[32mMIRIM\033[m')
elif  idade <= 14:
    print(f'Se você tem \033[31m{idade}\033[m anos, sua categoria é \033[32mINFANTIL\033[m')
elif idade <= 19:
    print(f'Se você tem \033[31m{idade}\033[m anos, sua categoria é \033[32mJUNIOR\033[m')
elif idade <= 25:
    print(f'Se você tem \033[31m{idade}\033[m anos, sua categoria é \033[32mSÊNIOR\033[m')
elif idade > 25:
    print(f'Se você tem \033[31m{idade}\033[m anos, sua categoria é \033[32mMASTER\033[m')
else:
    print('Inválido!')


