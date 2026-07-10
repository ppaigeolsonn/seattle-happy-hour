export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type PriceRange = "$" | "$$" | "$$$" | "$$$$";

export interface Coordinates {
  lat: number;
  lng: number;
}

/** A single window during which happy hour pricing applies, e.g. Mon-Fri 4-6pm. */
export interface HappyHourWindow {
  days: DayOfWeek[];
  /** 24-hour "HH:mm" format, e.g. "16:00" */
  startTime: string;
  /** 24-hour "HH:mm" format, e.g. "18:00" */
  endTime: string;
}

export type DealCategory = "food" | "drink";

export interface Deal {
  category: DealCategory;
  description: string;
  /** Discounted price in USD, if applicable */
  price?: number;
  /** Original price in USD, for showing savings */
  originalPrice?: number;
}

export interface Bar {
  id: string;
  name: string;
  /** Whether this bar should currently be shown (e.g. false if permanently closed). */
  active: boolean;
  neighborhood: string;
  address: string;
  /** Omitted when coordinates aren't confirmed for this bar yet. */
  location?: Coordinates;
  happyHours: HappyHourWindow[];
  /**
   * Human-readable rendering of the source's own day/time text. Unlike
   * `happyHours`, this can include open-ended windows (e.g. "10:00 PM–close")
   * that have no confirmed end time and so can't be represented as a
   * HappyHourWindow.
   */
  happyHoursText?: string;
  deals: Deal[];
  /** Omitted when no price tier is known for this bar yet. */
  priceRange?: PriceRange;
  /** Venue type/cuisine, e.g. "Cocktail Bar", "Restaurant (Thai)". */
  category?: string;
  website?: string;
  googleMapsUrl?: string;
  /** URL to a photo of the venue, sourced from its own official site. */
  photoUrl?: string;
  /** Raw verification status from the source, e.g. "Yes", "Partial", "Yes (food)". */
  verifiedHappyHour?: string;
  /** Raw rating + source, e.g. "4.6 (Google)". */
  rating?: string;
}
