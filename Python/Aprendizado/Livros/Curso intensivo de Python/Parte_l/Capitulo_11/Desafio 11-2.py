import unittest
from teste_funcoes2 import loc

class teste_cidade(unittest.TestCase):
    def teste_cidade_pais(self):
        formatado = loc('Santiago', 'Chile', populacao=5000000)
        self.assertEqual(formatado, 'Santiago, Chile - população de 5000000 pessoas')

unittest.main()


