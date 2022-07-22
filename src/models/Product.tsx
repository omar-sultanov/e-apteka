interface substance {
  name: string,
  id: number,
  code: string,
}

export interface product{
    name: string,
    id: number,
    createdAt: string,
    updatedAt: string,
    substanceId: number,
    substance:substance
}

export class Product implements product{
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  substanceId: number;
  substance: substance;
  constructor(item:product
  ) {
    this.id = item.id;
    this.name = item.name;
    this.createdAt = item.createdAt;
    this.updatedAt = item.updatedAt;
    this.substanceId = item.substanceId;
    this.substance.code = item.substance.code;
    this.substance.id = item.substance.id;
    this.substance.name = item.substance.name;
  }
}