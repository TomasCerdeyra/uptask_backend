import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { handleInpuntErrors } from "../middleware/validation";

const router = Router();


router.post('/', 
    body('projectName').notEmpty().withMessage('El Nombre del Proyecto es oblogatorio'),
    body('clientName').notEmpty().withMessage('El Nombre del Cliente es oblogatorio'),
    body('description').notEmpty().withMessage('La descripcion del Proyecto es oblogatoria'),
    handleInpuntErrors,

    ProjectController.createProject
)
router.get("/", ProjectController.getAllProjects);

router.get("/:id",
    param('id').isMongoId().withMessage('ID no valido'),
    handleInpuntErrors,
     ProjectController.getProjectById
);


export default router