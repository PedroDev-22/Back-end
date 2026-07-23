usuários = ['pedro', 'Lucas', 'joão', 'micael', 'jonas']
novos_usuários = ['joana', 'lucas', 'malaquias', 'jonas', 'josé']
for novo_usuário in novos_usuários:
    if novo_usuário in usuários:
        print(f'O nome "{novo_usuário}" já está sendo usado, insira outro')
    elif novo_usuário not in usuários:
        print(f'Nome "{novo_usuário}" disponivel')
        