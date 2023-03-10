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
      required: [true, "Delivery date cant be empty"],
    },
    ActualDeliveryDate: {
      type: Date,
    },
    TrackingUpdateDate: {
      type: Date,
    },
    DateCreated: {
      type: Date,
      required: [true, "First day date cant be empty"],
    },
    StatusCode: {
      type: Number,
      required: [true, "Status code cant be empty"],
    },
    Status: {
      type: String,
      required: [true, "Status cant be empty"],
    },
    WarehouseRecipient: {
      type: String,
      required: [true, "WarehouseRecipient address cant be empty"],
    },
    WarehouseSender: {
      type: String,
      required: [true, "WarehouseSender address cant be empty"],
    },
    WarehouseRecipientAddress: {
      type: String,
      required: [true, "Recipient address cant be empty"],
    },
    WarehouseSenderAddress: {
      type: String,
      required: [true, "Sender address cant be empty"],
    },
  },
  { timestamps: true }
);

const tracksSchema = new Schema<ITrackList>(
  {
    data: {
      type: [trackSchema],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Track = model("tracks", tracksSchema);

export default Track;
