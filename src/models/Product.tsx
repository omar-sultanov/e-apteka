class substance {
  name: string;
  id: number;
  code: string;
}

export class Product {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  substanceId: number;
  substance: substance;
  constructor(
    name: string,
    id: number,
    createdAt: string,
    updatedAt: string,
    substanceId: number,
    substanceName: string,
    subId: number,
    substanceCode: string
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.substanceId = substanceId;
    this.substance.code = substanceCode;
    this.substance.id = subId;
    this.substance.name = substanceName;
  }
}
