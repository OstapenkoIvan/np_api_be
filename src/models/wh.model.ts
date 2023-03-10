import { model, Schema } from "mongoose";
import { IWarehouse, IWarehouseList } from "../types";

const warehouseSchema = new Schema<IWarehouse>(
  {
    Number: {
      type: Number,
      required: [true, "Number cant be empty"],
    },
    Description: {
      type: String,
      required: [true, "Description cant be empty"],
    },
    ShortAddress: {
      type: String,
      required: [true, "ShortAddress cant be empty"],
    },
    CityDescription: {
      type: String,
      required: [true, "CityDescription cant be empty"],
    },
    SettlementAreaDescription: {
      type: String,
      required: [true, "SettlementAreaDescription cant be empty"],
    },
  },
  { timestamps: true }
);

const warehousesSchema = new Schema<IWarehouseList>(
  {
    data: {
      type: [warehouseSchema],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Warehouse = model("warehouses", warehousesSchema);

export default Warehouse;
