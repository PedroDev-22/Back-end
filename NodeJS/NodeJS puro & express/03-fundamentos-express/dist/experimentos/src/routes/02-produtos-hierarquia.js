import { Router } from "express";
const router = Router();
router.use((req, res, next) => {
    console.log('-> 2. Passou pelo local de produtos');
    res.send("B-A-R-R-A-D-O!");
});
router.get('/', (req, res) => {
    console.log("-> 3. Chegou na rota final");
    res.send("Produtos entregues!");
});
export default router;
//# sourceMappingURL=02-produtos-hierarquia.js.map