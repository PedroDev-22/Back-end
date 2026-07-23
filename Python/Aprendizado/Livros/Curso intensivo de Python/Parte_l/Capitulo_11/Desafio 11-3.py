import unittest
from testefuncoes3 import employ


class TestEmploy(unittest.TestCase):
    def setUp(self):
        self.eu = employ('Pedro', 'Arthur', 5000)

    def teste_give_default_raise(self):
        self.eu.giveraise()
        self.assertEqual(self.eu.salarioanual, 9000)
    
    def give_custom_raise(self):
        self.eu.giveraise(6000)
        self.assertEqual(self.eu.salarioanual, 10000)


unittest.main()

        