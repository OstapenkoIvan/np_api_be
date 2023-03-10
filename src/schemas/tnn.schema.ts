import Joi from "joi";

export class TrackSchema {
  trackNumberSchema = Joi.object({
    desc: Joi.string()
      .length(14)
      .pattern(/[0-9]+/i)
      .required()
      .messages({ message: "Number is required" }),
  });
}

export const trackSchema = new TrackSchema();
