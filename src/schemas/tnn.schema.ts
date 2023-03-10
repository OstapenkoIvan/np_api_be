import Joi from "joi";

export class TodoSchema {
  editColumnSchema = Joi.object({
    desc: Joi.string()
      .required()
      .messages({ message: "Description is required" }),
  });
}

export const todoSchema = new TodoSchema();

// TODO add schema here
