import { Router } from "express";
const router = Router();
const convidados = ["Albus", "Harry", "Hermione"];
router.get('/', (req, res) => {
    res.json(convidados);
});
const validadorNome = ((req, res, next) => {
    if (!req.body.nome) {
        return next(new Error("Nome do convidado é obrigatório"));
    }
    next();
});
router.post('/', validadorNome, (req, res) => {
    const { nome } = req.body;
    convidados.push(nome);
    res.status(201).json({
        mensagem: "Convidado adicionado à lista",
        convidado: nome
    });
});
export default router;
//# sourceMappingURL=convidados.js.map