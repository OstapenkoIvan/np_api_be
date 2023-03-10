import { ITrackList } from "./../types/np.types";
import "dotenv/config";
import axios from "axios";

import { ITrack } from "../types";
import { Track } from "../models";

const { NP_URI } = process.env;

export class TrackingService {
  static async getTrack(number: string) {
    const body = {
      apiKey: "",
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: number,
            Phone: "380600000000",
          },
        ],
      },
    };
    const { data } = await axios.post(NP_URI, body);

    return data;
  }

  static async addTrack(trackData: ITrack) {
    const newTrack = await Track.create(trackData);

    return newTrack;
  }

  static async getAllTracks() {
    const allTracks = await Track.find();

    return allTracks;
  }
}

const trackingService = new TrackingService();
export default trackingService;
