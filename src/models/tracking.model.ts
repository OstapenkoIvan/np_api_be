import { model, Schema } from "mongoose";
import { ITrack, ITrackList } from "../types";

const trackSchema = new Schema<ITrack>(
  {
    Number: {
      type: Number,
      min: 10000000000000,
      max: 99999999999999,
      required: [true, "Track cant be empty"],
    },
    ScheduledDeliveryDate: {
      type: Date,
    },
    ActualDeliveryDate: {
      type: Date,
    },
    TrackingUpdateDate: {
      type: Date,
    },
    DateCreated: {
      type: Date,
    },
    StatusCode: {
      type: Number,
    },
    Status: {
      type: String,
    },
    WarehouseRecipient: {
      type: String,
    },
    WarehouseSender: {
      type: String,
    },
    WarehouseRecipientAddress: {
      type: String,
    },
    WarehouseSenderAddress: {
      type: String,
    },
  },
  { timestamps: true }
);

const Track = model("tracks", trackSchema);

export default Track;
