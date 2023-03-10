export interface ITrack {
  _id?: string;
  Number: number;
  ScheduledDeliveryDate: Date;
  ActualDeliveryDate?: Date;
  TrackingUpdateDate?: Date;
  DateCreated: Date;
  StatusCode: number;
  Status: string;
  WarehouseRecipient: string;
  WarehouseSender: string;
  WarehouseRecipientAddress: string;
  WarehouseSenderAddress: string;
}

export interface ITrackList {
  data: ITrack[];
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
export interface ITrackNumber {
  number: number;
}
