export interface ITrack {
  _id: string;
  number: number;
  expectedDeliveryDate: Date;
  actualDeliverDate?: Date;
  updateDate?: Date;
  firstDay: Date;
  statusCode: number;
  status: string;
  recipientAddress: string;
  senderAddress: string;
}

export interface ITrackList {
  tracks: ITrack[];
}

export interface IWarehouse {
  Number: number;
  Description: string;
  ShortAddress: string;
  CityDescription: string;
  SettlementAreaDescription: string;
}

export interface IWarehouseList {
  data: IWarehouse[];
}
