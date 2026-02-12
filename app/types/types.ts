export type Plan = {
  country: string;
  dateRange: number;
  planDescription: string;
};

export type ItineraryRow = {
  time: string;
  place: string;
  itineraryRowDescription: string;
};

export type ItineraryDay = {
  currentDay: string;
  itineraryRows: ItineraryRow[];
};

export type Itinerary = {
  itineraryName: string;
  itineraryDescription: string;
  itineraryList: ItineraryDay[];
};

export type Toggles = {
  showTable: boolean;
};
