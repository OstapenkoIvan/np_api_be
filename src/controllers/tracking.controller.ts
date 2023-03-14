import "dotenv/config";
import { Request, Response } from "express";

import { ITrack } from "../types";
import { helpers, Helpers } from "../helpers";
import { trackingService, TrackingService } from "../services";

export class TrackingController extends TrackingService {
  private static helpers: Helpers = helpers;

  async getTrackController(req: Request, res: Response) {
    let data;
    data = req.track;
    const { number }: { number: string } = req.body;

    if (!data) {
      const newTrack = await TrackingController.getTrack(number);

      if (newTrack.success) {
        const {
          Number,
          ScheduledDeliveryDate,
          ActualDeliveryDate,
          TrackingUpdateDate,
          DateCreated,
          StatusCode,
          Status,
          WarehouseRecipient,
          WarehouseSender,
          WarehouseRecipientAddress,
          WarehouseSenderAddress,
        } = newTrack.data[0];

        data = await TrackingController.addTrack({
          Number,
          ScheduledDeliveryDate,
          ActualDeliveryDate,
          TrackingUpdateDate,
          DateCreated,
          StatusCode,
          Status,
          WarehouseRecipient,
          WarehouseSender,
          WarehouseRecipientAddress,
          WarehouseSenderAddress,
        });
      }
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data,
    });
  }

  async getAllTracksController(req: Request, res: Response) {
    const data = await TrackingController.getAllTracks();

    res.status(200).json({
      status: "success",
      code: 200,
      data,
    });
  }
}

const trackingController = new TrackingController();
export default trackingController;
