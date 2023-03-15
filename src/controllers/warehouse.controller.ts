import "dotenv/config";
import { Request, Response } from "express";

import { IWarehouseInputs } from "../types";
import { helpers, Helpers } from "../helpers";
import { WarehouseService } from "../services";

export class WarehouseController extends WarehouseService {
  private static helpers: Helpers = helpers;

  async getSelectedWhController(req: Request, res: Response) {
    const { queryData, page }: IWarehouseInputs = req.body;
    const count = req.count;

    const data = await WarehouseController.getSelectedWarehouses({
      queryData,
      page,
    });

    if (!data) {
      throw WarehouseController.helpers.errorHandler({
        status: 501,
        message: "Something went wrong when getting warehouses",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      total: count,
      data,
    });
  }
}

const warehouseController = new WarehouseController();
export default warehouseController;
