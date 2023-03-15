import { ITrack } from "./np.types";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      MONGO_URI_TST: string;
      NP_URI: string;
      PORT: string;
      HOST: string;
    }
  }
  namespace Express {
    export interface Request {
      track?: ITrack;
      count?: number;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
