// types/fleet.ts
export interface Fleet {
  views: number;
  _id: string;
  fleetId: string;
  model: string;
  manufacturer: string;
  yom: string;
  vehicleType: string;
  transmission: string;
  fuelType: string;
  description: string;
  doors: number;
  seats: number;
  kmPerDay: number;
  luggageCapacity: {
    largeLuggage: number;
    handLuggage: number;
  };
  amenities: string[];
  priceTable: {
    oneWeekandBelow: number;
    twoWeeks: number;
    threeWeeks: number;
    oneMonth: number;
    threeMonths: number;
    sixMonthsAndAbove: number;
  };
  images: string[];
  isActive: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
