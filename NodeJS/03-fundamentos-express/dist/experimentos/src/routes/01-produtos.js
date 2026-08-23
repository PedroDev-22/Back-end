import { Router } from 'express';
const router = Router();
const listaProdutos = ["Teclado", "Mouse", "Monitor"];
const travaManuntecao = (req, res, next) => {
    const emManuntecao = true;
    if (emManuntecao) {
        res.status(503).json({ mensagem: "Departamento de produtos em manunteção" });
    }
    else {
        next();
    }
};
router.use(travaManuntecao);
router.get('/', (req, res) => {
    res.json(listaProdutos);
});
export default router;
//# sourceMappingURL=01-produtos.js.map