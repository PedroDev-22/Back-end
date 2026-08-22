import { Router } from 'express';

const router = Router();

const listaProdutos = ["Teclado", "Mouse", "Monitor"];

router.get('/', (req, res) => {
    res.json(listaProdutos);
});

router.get('/detalhes', (req, res) => {
    res.send("Aqui estão os detalhes técnicos dos produtos");
});

export default router;