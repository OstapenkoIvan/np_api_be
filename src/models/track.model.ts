import { model, Schema } from "mongoose";
import { ITrack, ITrackList } from "../types";

const trackSchema = new Schema<ITrack>(
  {
    number: {
      type: Number,
      min: 10000000000000,
      max: 99999999999999,
      required: [true, "Track cant be empty"],
    },
    expectedDeliveryDate: {
      type: Date,
      required: [true, "Delivery date cant be empty"],
    },
    actualDeliverDate: {
      type: Date,
    },
    updateDate: {
      type: Date,
    },
    firstDay: {
      type: Date,
      required: [true, "First day date cant be empty"],
    },
    statusCode: {
      type: Number,
      required: [true, "Status code cant be empty"],
    },
    status: {
      type: String,
      required: [true, "Status cant be empty"],
    },
    recipientAddress: {
      type: String,
      required: [true, "Recipient address cant be empty"],
    },
    senderAddress: {
      type: String,
      required: [true, "Sender address cant be empty"],
    },
  },
  { timestamps: true }
);

const tracksSchema = new Schema<ITrackList>(
  {
    tracks: {
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
