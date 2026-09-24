import { Router } from "express";
const router = Router();
router.use((req, res, next) => {
    console.log('-> 2. Passou pelo local de produtos');
    next();
});
router.get('/', (req, res) => {
    console.log("-> 3. Chegou na rota final");
    res.send("Produtos entregues!");
});
export default router;
//# sourceMappingURL=02-produtos-hieraquia.js.map