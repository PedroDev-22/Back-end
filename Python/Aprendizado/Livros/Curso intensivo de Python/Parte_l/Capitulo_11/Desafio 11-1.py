import unittest
from teste_funcoes import loc

class teste_cidade(unittest.TestCase):
    def test_cidadepais(self):
        formatado = loc('Rio de janeiro', 'Brasil')
        self.assertEqual(formatado, 'Rio De Janeiro, Brasil')

unittest.main()


