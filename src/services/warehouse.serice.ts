import "dotenv/config";
import axios from "axios";

import { IWarehouseInputs, IAxiosWhReturn } from "../types";
import { Warehose } from "../models";

const { NP_URI } = process.env;

export class WarehouseService {
  static async countItems() {
    const count = await Warehose.countDocuments({});

    return count;
  }

  static async getAllWarehouses() {
    const body = {
      apiKey: "",
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {},
    };

    const { data } = await axios.post(NP_URI, body);
    console.log("all wh service", data);

    const filterdWarehouses = data.data.map(
      ({
        Number,
        Description,
        ShortAddress,
        CityDescription,
        SettlementAreaDescription,
      }: IAxiosWhReturn) => ({
        Number,
        Description,
        ShortAddress,
        CityDescription,
        SettlementAreaDescription,
      })
    );
    console.log("wh service filterdWarehouses", filterdWarehouses);

    await Warehose.insertMany(filterdWarehouses, {
      lean: true,
    });

    return;
  }

  static async getSelectedWarehouses({
    queryData = "",
    page = 1,
  }: IWarehouseInputs) {
    const limit = 10;
    const skip = (Number(page) - 1) * Number(limit);
    const input = queryData
      ? { CityDescription: { $regex: "^" + queryData, $options: "i" } }
      : {};

    const selectedWarehouses = await Warehose.find(input)
      .limit(limit)
      .skip(skip);

    return selectedWarehouses;
  }
}

const warehouseService = new WarehouseService();
export default warehouseService;
