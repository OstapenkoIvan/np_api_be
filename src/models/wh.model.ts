import { model, Schema } from "mongoose";
import { IWarehouse } from "../types";

const warehouseSchema = new Schema<IWarehouse>(
  {
    Number: {
      type: Number,
    },
    Description: {
      type: String,
    },
    ShortAddress: {
      type: String,
    },
    CityDescription: {
      type: String,
    },
    SettlementAreaDescription: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Warehouse = model("warehouses", warehouseSchema);

export default Warehouse;
