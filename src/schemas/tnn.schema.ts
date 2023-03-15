import Joi from "joi";

export class TrackSchema {
  trackNumberSchema = Joi.object({
    number: Joi.string()
      .length(14)
      .pattern(/[0-9]+/i)
      .required()
      .messages({ message: "Number is required" }),
  });
}

export class WarehouseSchema {
  warehouseInputSchema = Joi.object({
    queryData: Joi.string().allow(""),
    page: Joi.number().required().messages({ message: "Page is required" }),
  });
}

export const trackSchema = new TrackSchema();
export const warehouseSchema = new WarehouseSchema();
