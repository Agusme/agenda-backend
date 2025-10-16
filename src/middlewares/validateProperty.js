import { body, validationResult } from "express-validator";

export const propertyValidationRules = [
  body("typeProperty")
    .notEmpty().withMessage("El tipo de propiedad es obligatorio")
    .isIn(["Casa", "Departamento", "Terreno", "Local"]).withMessage("Tipo de propiedad no válido"),

  body("typeTransaction")
    .notEmpty().withMessage("El tipo de transacción es obligatorio")
    .isIn(["Venta", "Alquiler"]).withMessage("Tipo de transacción no válido"),

  body("location")
    .notEmpty().withMessage("La ubicación es obligatoria")
    .isLength({ max: 100 }).withMessage("La ubicación no puede tener más de 100 caracteres"),

  body("description")
    .notEmpty().withMessage("La descripción es obligatoria"),

  body("bathroom")
    .optional()
    .isInt({ min: 0 }).withMessage("El número de baños debe ser un número entero positivo"),

  body("bedroom")
    .optional()
    .isInt({ min: 0 }).withMessage("El número de dormitorios debe ser un número entero positivo"),

  body("map")
    .optional()
    .isString().withMessage("El mapa debe ser una URL o cadena de texto válida"),

  body("images")
    .optional()
    .isArray().withMessage("Las imágenes deben estar en un array")
];

export const validateProperty = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Error de validación",
      errors: errors.array()
    });
  }
  next();
};
