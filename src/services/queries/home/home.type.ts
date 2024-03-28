export type CategoryType = {
  _id: string;
  name: string;
  iconUrl: string;
};

export type PlaceType = {
  _id: string;
  name:string;
  distance: string;
  bookingDate: string;
  price: number;
  rate: number;
  imgArrUrl: string[];
  isMoreUsersFavorite: boolean;
  placeTypeId: string;
};
