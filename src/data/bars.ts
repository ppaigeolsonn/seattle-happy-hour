import { Bar } from "@/types/bar";

// Sourced from seattle_happy_hours_1.xlsx (105 listings: Capitol Hill, Ballard,
// Fremont, Belltown, Georgetown, Wallingford). priceRange is omitted throughout
// (not in the source; optional on Bar). `location` lat/lng comes from HHLat.md
// (see that file's own caveats: street-grid estimates, not run through a live
// geocoding API — good for map pins, ~30-50m precision, not rooftop-exact).
// `happyHours` holds only windows with a confirmed start AND end time;
// `happyHoursText` is a human-readable version of the source's own day/time
// text that also preserves open-ended "-close" windows the structured field
// can't represent. 12 listings have no confirmed hours at all (see
// `verifiedHappyHour`) and so have an empty `happyHours` array and no
// `happyHoursText`.
export const bars: Bar[] = [
  {
    id: "canon",
    active: true,
    name: "Canon",
    neighborhood: "Capitol Hill",
    address: "928 12th Ave, Seattle, WA 98122",
    location: { lat: 47.6086, lng: -122.317 },
    happyHours: [
      {
        days: ["Wednesday", "Thursday", "Sunday"],
        startTime: "17:00",
        endTime: "18:00",
      },
      {
        days: ["Wednesday", "Thursday", "Sunday"],
        startTime: "23:00",
        endTime: "00:00",
      }
    ],
    happyHoursText: "5:00 PM–6:00 PM; 11:00 PM–12:00 AM",
    deals: [
      {
        category: "drink",
        description: "50% off wine by glass ($6), beer ($5)",
      },
      {
        category: "food",
        description: "50% off food incl. Seared Ribeye ($20), Taylor Shellfish oysters ($15), meat & cheese board ($15)",
      }
    ],
    category: "Cocktail Bar",
    verifiedHappyHour: "Yes",
    rating: "4.6 (Google)",
    website: "https://canonseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Canon+928+12th+Ave+Seattle",
  },
  {
    id: "sugar-hill",
    active: true,
    name: "Sugar Hill",
    neighborhood: "Capitol Hill",
    address: "Capitol Hill, Seattle, WA",
    location: { lat: 47.6146, lng: -122.3273 },
    happyHours: [
      {
        days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "17:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "5:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "50% off drinks",
      },
      {
        category: "food",
        description: "50% off food incl. Pad Thai, Gai Tod Hat Yai + Som Tum",
      }
    ],
    category: "Restaurant (Thai)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sugar+Hill+Capitol+Hill+Seattle",
  },
  {
    id: "oddfellows-cafe-bar",
    active: true,
    name: "Oddfellows Cafe + Bar",
    neighborhood: "Capitol Hill",
    address: "1525 10th Ave, Seattle, WA 98122",
    location: { lat: 47.6149, lng: -122.3195 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "3:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Discounted espresso martini, Hemingway daiquiri",
      },
      {
        category: "food",
        description: "Petite Moules Frites (58% off), Petite Steak Au Poivre (53% off)",
      }
    ],
    category: "Restaurant (American)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://oddfellowscafe.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Oddfellows+Cafe+1525+10th+Ave+Seattle",
    photoUrl: "http://static1.squarespace.com/static/662ef7f46bed720b04a9ace5/t/66a057b4ff07d0521a7df5e1/1721784244684/OddfellowsLogo-01+%281%29.png?format=1500w",
  },
  {
    id: "liberty",
    active: true,
    name: "Liberty",
    neighborhood: "Capitol Hill",
    address: "517 15th Ave E, Seattle, WA 98112",
    location: { lat: 47.6233, lng: -122.3126 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "12:00",
        endTime: "17:00",
      },
      {
        days: ["Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "Mon-Fri 12:00 PM–5:00 PM; Sat-Sun 3:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "$3 PBR drafts, $3 Rainier bottles, $6 wine, $10-12 cocktails",
      },
      {
        category: "food",
        description: "$6-8 sushi rolls, $7 rotating mystery roll",
      }
    ],
    category: "Cocktail Bar / Sushi",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://libertybars.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Liberty+517+15th+Ave+E+Seattle",
  },
  {
    id: "lost-lake-cafe-lounge",
    active: true,
    name: "Lost Lake Cafe & Lounge",
    neighborhood: "Capitol Hill",
    address: "1505 10th Ave, Seattle, WA 98122",
    location: { lat: 47.6147, lng: -122.3195 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Strong drink deals",
      },
      {
        category: "food",
        description: "Strong food deals (24-hr diner)",
      }
    ],
    category: "Diner/Bar",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://lostlakecafe.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lost+Lake+Cafe+Seattle",
    photoUrl: "http://static1.squarespace.com/static/58768c62725e253cc7141608/t/6078c33d43642220c846b040/1618527037753/Green+lost+lake+logo.png?format=1500w",
  },
  {
    id: "herb-bitter-public-house",
    active: true,
    name: "Herb & Bitter Public House",
    neighborhood: "Capitol Hill",
    address: "819 E Pike St, Seattle, WA 98122",
    location: { lat: 47.6137, lng: -122.3185 },
    happyHours: [
      {
        days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "4:00 PM–5:00 PM; 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "50% off 42 drinks",
      },
      {
        category: "food",
        description: "25% off 21 food items",
      }
    ],
    category: "Bar",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Herb+and+Bitter+Public+House+Seattle",
  },
  {
    id: "nue",
    active: true,
    name: "Nue",
    neighborhood: "Capitol Hill",
    address: "1519 14th Ave, Seattle, WA 98122",
    location: { lat: 47.6148, lng: -122.3145 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Discounted drinks",
      },
      {
        category: "food",
        description: "Discounted global small plates",
      }
    ],
    category: "Restaurant (Global street food)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://nueseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nue+Seattle",
    photoUrl: "http://static1.squarespace.com/static/684ddede80e0142db4220697/t/6a4d60ddc3edcf77b0621ccd/1783455965919/nue+red.png?format=1500w",
  },
  {
    id: "momiji",
    active: true,
    name: "Momiji",
    neighborhood: "Capitol Hill",
    address: "1522 12th Ave, Seattle, WA 98122",
    location: { lat: 47.6149, lng: -122.3169 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM; 10:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Sake specials",
      },
      {
        category: "food",
        description: "Discounted sushi & rolls; late-night",
      }
    ],
    category: "Restaurant (Japanese/sushi)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://momijiseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Momiji+Seattle",
    photoUrl: "https://static.wixstatic.com/media/3cc5e9_afac92f922de418faabc60b7d8f21202.png/v1/fill/w_269,h_330,al_c/3cc5e9_afac92f922de418faabc60b7d8f21202.png",
  },
  {
    id: "deluxe-bar-grill",
    active: true,
    name: "Deluxe Bar & Grill",
    neighborhood: "Capitol Hill",
    address: "625 Broadway E, Seattle, WA 98102",
    location: { lat: 47.6249, lng: -122.3209 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "15:00",
        endTime: "18:00",
      },
      {
        days: ["Saturday", "Sunday"],
        startTime: "15:30",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Mon-Fri 3:00 PM–6:00 PM; Sat-Sun 3:30 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Tavern Beer 33% off",
      },
      {
        category: "food",
        description: "Hand-breaded chicken strips 38% off; American",
      }
    ],
    category: "Bar & Restaurant",
    verifiedHappyHour: "Yes",
    rating: "4.0 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Deluxe+Bar+and+Grill+Broadway+Seattle",
  },
  {
    id: "corvus-company",
    active: true,
    name: "Corvus & Company",
    neighborhood: "Capitol Hill",
    address: "601 Broadway E, Seattle, WA 98102",
    location: { lat: 47.6245, lng: -122.3209 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Black Raven Trickster IPA 40% off (~28% avg off drinks)",
      },
      {
        category: "food",
        description: "Chips & salsa 38% off (~30% avg off food)",
      }
    ],
    category: "Cocktail Bar",
    verifiedHappyHour: "Yes — times note: \"confirm\"",
    rating: "4.3 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Corvus+and+Company+Seattle",
  },
  {
    id: "tamari-bar",
    active: true,
    name: "Tamari Bar",
    neighborhood: "Capitol Hill",
    address: "500 E Pine St, Seattle, WA 98122",
    location: { lat: 47.61455, lng: -122.327 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:30",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:30 PM–6:00 PM; 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "$6 Sapporo pints, $8 sake/mules, $10 Toki whiskey highballs, $14 boilermakers",
      },
      {
        category: "food",
        description: "Discounted izakaya snacks, food/drink combos",
      }
    ],
    category: "Bar (Japanese)",
    verifiedHappyHour: "Yes",
    rating: "8.4 (Infatuation)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tamari+Bar+Seattle",
  },
  {
    id: "ba-bar",
    active: true,
    name: "Ba Bar",
    neighborhood: "Capitol Hill",
    address: "550 12th Ave, Seattle, WA 98122",
    location: { lat: 47.6076, lng: -122.3169 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "14:00",
        endTime: "17:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "21:00",
        endTime: "00:00",
      }
    ],
    happyHoursText: "2:00 PM–5:00 PM; 9:00 PM–12:00 AM",
    deals: [
      {
        category: "drink",
        description: "$4.50 Montucky cans, $8.50 wines, $7.50-11.50 cocktails",
      },
      {
        category: "food",
        description: "Wings, sausage sliders, smoked eggplant (min. $6/person on drinks)",
        price: 6,
      }
    ],
    category: "Restaurant (Vietnamese)",
    verifiedHappyHour: "Yes",
    rating: "8.5 (Infatuation)",
    website: "https://babarseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ba+Bar+550+12th+Ave+Seattle",
  },
  {
    id: "fogon-cocina-mexicana",
    active: true,
    name: "Fogon Cocina Mexicana",
    neighborhood: "Capitol Hill",
    address: "600 E Pine St, Seattle, WA 98122",
    location: { lat: 47.61455, lng: -122.3265 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "~14% off drinks",
      },
      {
        category: "food",
        description: "Torta Pollo Asado 50% off",
      }
    ],
    category: "Restaurant (Mexican)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://fogonseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fogon+Cocina+Mexicana+Seattle",
  },
  {
    id: "pine-box",
    active: true,
    name: "Pine Box",
    neighborhood: "Capitol Hill",
    address: "1600 Melrose Ave, Seattle, WA 98122",
    location: { lat: 47.615, lng: -122.3279 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink specials",
      },
      {
        category: "food",
        description: "Discounted pizzas, \"Capri Sun\" food/drink combo",
      }
    ],
    category: "Bar (former mortuary)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://pineboxbar.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pine+Box+Seattle",
    photoUrl: "http://static1.squarespace.com/static/59ce7d1c29f1875fd4041366/t/5a9c70999140b7602daf41dc/1520201883327/pbox-logo.gif?format=1500w",
  },
  {
    id: "rione-xiii",
    active: true,
    name: "Rione XIII",
    neighborhood: "Capitol Hill",
    address: "401 15th Ave E, Seattle, WA 98112",
    location: { lat: 47.6224, lng: -122.3126 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Limited cocktail deals",
      },
      {
        category: "food",
        description: "Salumi board, gnocchi discounts",
      }
    ],
    category: "Restaurant (Roman Italian)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://ethanstowellrestaurants.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rione+XIII+Seattle",
    photoUrl: "https://cdn.sanity.io/images/t34vvqit/production/db17744c1a637edfdda7d6826cb704ad670fa65d-1200x630.png?w=1200&h=630",
  },
  {
    id: "hula-hula",
    active: true,
    name: "Hula Hula",
    neighborhood: "Capitol Hill",
    address: "106 1st Ave N, Seattle, WA 98109 (confirm - Lower Queen Anne edge)",
    location: { lat: 47.6193, lng: -122.327 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "~56% avg off beers/wines, House Red/White 61% off",
      },
      {
        category: "food",
        description: "Food not verified",
      }
    ],
    category: "Bar (Tiki)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://hulahula.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hula+Hula+Seattle",
  },
  {
    id: "bar-cotto",
    active: true,
    name: "Bar Cotto",
    neighborhood: "Capitol Hill",
    address: "1546 15th Ave, Seattle, WA 98122",
    location: { lat: 47.6149, lng: -122.3128 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Drink savings unverified",
      },
      {
        category: "food",
        description: "Pepperoni pizza 36% off, brussels sprouts 33% off",
      }
    ],
    category: "Restaurant (Italian salumeria)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Cotto+Seattle",
  },
  {
    id: "linda-s-tavern",
    active: true,
    name: "Linda's Tavern",
    neighborhood: "Capitol Hill",
    address: "707 E Pine St, Seattle, WA 98122",
    location: { lat: 47.6146, lng: -122.3254 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$9 drinks incl. PBR pitcher, green tea shot, boilermaker",
        price: 9,
      },
      {
        category: "food",
        description: "$9 food incl. cheeseburger w/ fries, nachos",
        price: 9,
      }
    ],
    category: "Bar/Tavern",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://lindastavern.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lindas+Tavern+Seattle",
    photoUrl: "http://static1.squarespace.com/static/6553c1e76be8226f783e8465/t/6558096084f4e91c8132560f/1700268384835/Lindas_BG-4.png?format=1500w",
  },
  {
    id: "donna-s",
    active: true,
    name: "Donna's",
    neighborhood: "Capitol Hill",
    address: "1355 E Olive Way, Seattle, WA 98122",
    location: { lat: 47.6183, lng: -122.3256 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "22:00",
        endTime: "00:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM; 10:00 PM–12:00 AM",
    deals: [
      {
        category: "drink",
        description: "$5 draft, $7 wine, $8 slushies, $9-10 cocktails",
      },
      {
        category: "food",
        description: "$10 pastas, $7-9 snacks",
      }
    ],
    category: "Restaurant (Italian)",
    verifiedHappyHour: "Yes",
    rating: "4.6 (Yelp)",
    website: "https://donnasseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Donnas+Seattle",
    photoUrl: "http://static1.squarespace.com/static/650b9c8f8064aa01875f669d/t/650b9f9f3475166b1c077b45/1695260575063/rabbit+website.png?format=1500w",
  },
  {
    id: "mcmenamins-six-arms",
    active: true,
    name: "McMenamins Six Arms",
    neighborhood: "Capitol Hill",
    address: "300 E Pike St, Seattle, WA 98122",
    location: { lat: 47.61375, lng: -122.3287 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "21:00",
        endTime: "22:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM; 9:00 PM–10:00 PM",
    deals: [
      {
        category: "drink",
        description: "Brewery drink deals",
      },
      {
        category: "food",
        description: "Hammerhead garden burger 34% off",
      }
    ],
    category: "Brewpub",
    verifiedHappyHour: "Yes",
    rating: "4.0 (Yelp)",
    website: "https://mcmenamins.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=McMenamins+Six+Arms+Seattle",
  },
  {
    id: "taylor-shellfish-capitol-hill",
    active: true,
    name: "Taylor Shellfish (Capitol Hill)",
    neighborhood: "Capitol Hill",
    address: "1521 Melrose Ave, Seattle, WA 98122",
    location: { lat: 47.6147, lng: -122.3276 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "14:00",
        endTime: "16:00",
      }
    ],
    happyHoursText: "2:00 PM–4:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink deals",
      },
      {
        category: "food",
        description: "Oyster du jour 37% off",
      }
    ],
    category: "Oyster Bar",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://taylorshellfishfarms.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Taylor+Shellfish+Capitol+Hill+Seattle",
  },
  {
    id: "quinn-s-pub",
    active: true,
    name: "Quinn's Pub",
    neighborhood: "Capitol Hill",
    address: "1001 E Pike St, Seattle, WA 98122",
    location: { lat: 47.61375, lng: -122.3178 },
    happyHours: [
      {
        days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Wed-Sun 4:00 PM–6:00 PM; Fri/Sat late 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Drink savings unverified",
      },
      {
        category: "food",
        description: "Quinn's burger, chicken sandwich deals",
      }
    ],
    category: "Gastropub",
    verifiedHappyHour: "Partial",
    rating: "4.3 (Yelp)",
    website: "https://quinnspubseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quinns+Pub+Seattle",
  },
  {
    id: "bait-shop",
    active: true,
    name: "Bait Shop",
    neighborhood: "Capitol Hill",
    address: "606 Broadway E, Seattle, WA 98102",
    location: { lat: 47.6247, lng: -122.3209 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "PBR deal",
      },
      {
        category: "food",
        description: "Tater tots (~12-17% off)",
      }
    ],
    category: "Bar",
    verifiedHappyHour: "Yes",
    rating: "4.1 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bait+Shop+Seattle",
  },
  {
    id: "via-tribunali-capitol-hill",
    active: true,
    name: "Via Tribunali (Capitol Hill)",
    neighborhood: "Capitol Hill",
    address: "913 E Pike St, Seattle, WA 98122",
    location: { lat: 47.61375, lng: -122.3181 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Tue-Thu 4:00 PM–6:00 PM; Fri/Sat late 11:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Discount Aperol spritzes, negronis, flatliners",
      },
      {
        category: "food",
        description: "Margherita pizza, small bites",
      }
    ],
    category: "Restaurant (Neapolitan pizza)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://viatribunali.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+Tribunali+Capitol+Hill+Seattle",
    photoUrl: "https://images.getbento.com/accounts/4e78fe5b4afe33e752f7e804fe4ba40e/media/images/84585Via-Trib-vert.png?w=1200&fit=fill&auto=compress,format&cs=origin&h=600&bg=EDEDF1&pad=100",
  },
  {
    id: "tavolata-capitol-hill",
    active: true,
    name: "Tavolata (Capitol Hill)",
    neighborhood: "Capitol Hill",
    address: "501 E Pike St, Seattle, WA 98122",
    location: { lat: 47.61385, lng: -122.3269 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Cocktails, beer, wine, mocktails",
      },
      {
        category: "food",
        description: "Focaccia, bruschetta, pasta, meatballs",
      }
    ],
    category: "Restaurant (Italian)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://ethanstowellrestaurants.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tavolata+Capitol+Hill+Seattle",
    photoUrl: "https://cdn.sanity.io/images/t34vvqit/production/fd8ce7825c7b237ca83d08032e2e92dab4cf4384-1000x667.jpg?w=1200&q=75&fit=clip&auto=format",
  },
  {
    id: "sabine-cafe-bar",
    active: true,
    name: "Sabine Cafe & Bar",
    neighborhood: "Ballard",
    address: "5307 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.667, lng: -122.384 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "50% off wine bottles (Tue-Thu), $10 martinis (~49% avg drink savings)",
        price: 10,
      },
      {
        category: "food",
        description: "~35% avg off food incl. Harissa & Aleppo Honey Flatbread",
      }
    ],
    category: "Wine Bar / American",
    verifiedHappyHour: "Yes",
    rating: "4.9 (OpenTable, 116 diners)",
    website: "https://sabineseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sabine+Cafe+Ballard+Seattle",
    photoUrl: "http://static1.squarespace.com/static/60146fab90b10920133cc919/t/6441c1214ad3105cd5ffed24/1682030881534/Sabine_Logo_Blue.png?format=1500w",
  },
  {
    id: "king-s-hardware",
    active: true,
    name: "King's Hardware",
    neighborhood: "Ballard",
    address: "5225 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6665, lng: -122.3835 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "4:00 PM–7:00 PM",
    deals: [
      {
        category: "drink",
        description: "Rainier pitcher 44% off, $2 domestic drafts, $6 pitchers, $3 import drafts/wells, $1 off burgers",
      },
      {
        category: "food",
        description: "Irish nachos 37% off, burgers, tots",
      }
    ],
    category: "Bar/Pub",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://kingsballard.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kings+Hardware+Ballard+Seattle",
    photoUrl: "http://static1.squarespace.com/static/6568e96866568c4339660d24/t/657a065e270e6f07461f2867/1702495838304/Kings_BG-3.jpg?format=1500w",
  },
  {
    id: "radiator-whiskey-ballard",
    active: true,
    name: "Radiator Whiskey (Ballard)",
    neighborhood: "Ballard",
    address: "5311 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6671, lng: -122.3841 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "40% off tall boys & local flights",
      },
      {
        category: "food",
        description: "Brisket dip 43% off",
      }
    ],
    category: "Bar (Whiskey / New American)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://radiatorwhiskey.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Radiator+Whiskey+Ballard+Seattle",
  },
  {
    id: "matador-ballard",
    active: true,
    name: "Matador Ballard",
    neighborhood: "Ballard",
    address: "2221 NW Market St, Seattle, WA 98107",
    location: { lat: 47.6684, lng: -122.3846 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM; 10:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Drink specials (unverified savings)",
      },
      {
        category: "food",
        description: "Baja fish tacos 67% off, steak tacos 64% off (~48% avg)",
      }
    ],
    category: "Bar & Restaurant (Mexican)",
    verifiedHappyHour: "Yes",
    rating: "4.1 (Yelp)",
    website: "https://thematador.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Matador+Ballard+Seattle",
  },
  {
    id: "pono-ranch",
    active: true,
    name: "Pono Ranch",
    neighborhood: "Ballard",
    address: "5001 Leary Ave NW, Seattle, WA 98107",
    location: { lat: 47.6643, lng: -122.3804 },
    happyHours: [
      {
        days: ["Thursday", "Friday", "Saturday"],
        startTime: "15:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "3:00 PM–7:00 PM",
    deals: [
      {
        category: "drink",
        description: "33% off select shots/cocktails",
      },
      {
        category: "food",
        description: "41% avg off food (8 items)",
      }
    ],
    category: "Restaurant (Hawaiian)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://ponoranch.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pono+Ranch+Ballard+Seattle",
    photoUrl: "http://static1.squarespace.com/static/65d39111ddcb5b787697adb7/t/6648fa278aee2c4325479615/1716058663408/Logo+%283%29.png?format=1500w",
  },
  {
    id: "the-ballard-cut",
    active: true,
    name: "The Ballard Cut",
    neighborhood: "Ballard",
    address: "5306 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6669, lng: -122.38395 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Old Fashioned 29% off",
      },
      {
        category: "food",
        description: "Chicory salad 38% off; farm-to-table",
      }
    ],
    category: "Restaurant / Whiskey Bar",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://theballardcut.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ballard+Cut+Seattle",
    photoUrl: "https://theballardcut.com/wp-content/uploads/2024/07/Main.jpeg",
  },
  {
    id: "rupee-bar",
    active: true,
    name: "Rupee Bar",
    neighborhood: "Ballard",
    address: "6307 24th Ave NW, Seattle, WA 98107",
    location: { lat: 47.6756, lng: -122.3865 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Modest drink savings",
      },
      {
        category: "food",
        description: "Naan + dhal curry, kale salad deals",
      }
    ],
    category: "Restaurant (Sri Lankan/South Asian)",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://rupeebar.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rupee+Bar+Ballard+Seattle",
    photoUrl: "http://static1.squarespace.com/static/5d81b3123532a2751b1820a5/t/67606b93b610e914d7f59ea6/1734372243304/interior.jpg?format=1500w",
  },
  {
    id: "moshi-moshi-sushi-izakaya",
    active: true,
    name: "Moshi Moshi Sushi & Izakaya",
    neighborhood: "Ballard",
    address: "5324 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6671, lng: -122.3842 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "~23% off drinks",
      },
      {
        category: "food",
        description: "Takoyaki, seaweed salad (~37% avg off, ~12 items)",
      }
    ],
    category: "Restaurant (Japanese)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://moshiseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moshi+Moshi+Ballard+Seattle",
  },
  {
    id: "staple-fancy",
    active: true,
    name: "Staple & Fancy",
    neighborhood: "Ballard",
    address: "4739 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6649, lng: -122.3823 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "17:00",
        endTime: "18:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "20:00",
        endTime: "21:00",
      }
    ],
    happyHoursText: "5:00 PM–6:00 PM; 8:00 PM–9:00 PM",
    deals: [
      {
        category: "drink",
        description: "So-so drink savings",
      },
      {
        category: "food",
        description: "Pasta deals (early-bird)",
      }
    ],
    category: "Restaurant (Italian)",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://ethanstowellrestaurants.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Staple+and+Fancy+Ballard+Seattle",
    photoUrl: "https://cdn.sanity.io/images/t34vvqit/production/93bfc0b150e5ee8050b4955627deb05486456eba-1200x630.png?w=1200&h=630",
  },
  {
    id: "the-garrison",
    active: true,
    name: "The Garrison",
    neighborhood: "Ballard",
    address: "5308 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.667, lng: -122.384 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "16:00",
        endTime: "18:00",
      },
      {
        days: ["Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Mon-Thu 4:00 PM–6:00 PM; Fri-Sun 3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$10 cocktails (~20% avg off drinks)",
        price: 10,
      },
      {
        category: "food",
        description: "Local oysters 50% off ($2), caviar 35% off (~32% avg)",
        price: 2,
      }
    ],
    category: "Restaurant/Bar (Seafood)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://thegarrisonseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Garrison+Ballard+Seattle",
  },
  {
    id: "ballard-pizza-company",
    active: true,
    name: "Ballard Pizza Company",
    neighborhood: "Ballard",
    address: "5107 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6658, lng: -122.3829 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "French 75 31% off (~16% avg drinks)",
      },
      {
        category: "food",
        description: "Up to 50% off food",
      }
    ],
    category: "Restaurant (Pizza)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://ballardpizzacompany.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ballard+Pizza+Company+Seattle",
    photoUrl: "https://cdn.sanity.io/images/wlrn8j45/production/315fde79ca25af094d2da7ebe51f997b7709221a-1200x630.png?rect=180,0,840,630&amp;w=800&amp;h=600",
  },
  {
    id: "roam",
    active: true,
    name: "Roam",
    neighborhood: "Ballard",
    address: "5405 Leary Ave NW, Seattle, WA 98107 (confirm)",
    location: { lat: 47.6657, lng: -122.38285 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:30",
        endTime: "18:30",
      }
    ],
    happyHoursText: "4:30 PM–6:30 PM",
    deals: [
      {
        category: "drink",
        description: "~17% avg off drinks",
      },
      {
        category: "food",
        description: "Wings & chicken tenders 38% off",
      }
    ],
    category: "Bar/Restaurant",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Roam+Ballard+Seattle",
  },
  {
    id: "skal-beer-hall",
    active: true,
    name: "Skal Beer Hall",
    neighborhood: "Ballard",
    address: "5429 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6677, lng: -122.3848 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "$2 off drafts/cider/mead, Old Fashioned 33% off, Bergen Mule 29% off",
        price: 2,
      },
      {
        category: "food",
        description: "Tavern cheeseburger 35% off, huge pretzels from $6",
        price: 6,
      }
    ],
    category: "Beer Hall / Gastropub (Nordic)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://skalballard.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Skal+Beer+Hall+Ballard+Seattle",
    photoUrl: "http://static1.squarespace.com/static/6051460f703dea46f037772f/t/6a0d1f0bd15ca6369f0a5937/1779244811461/Hop+Viking.png?format=1500w",
  },
  {
    id: "percy-s-co",
    active: true,
    name: "Percy's & Co.",
    neighborhood: "Ballard",
    address: "5233 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.66655, lng: -122.3836 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "17:00",
        endTime: "19:00",
      },
      {
        days: ["Friday", "Saturday"],
        startTime: "15:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "Mon-Thu 5:00 PM–7:00 PM; Fri/Sat 3:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink savings unverified",
      },
      {
        category: "food",
        description: "Ballard hot chicken sandwich 52% off",
      }
    ],
    category: "Bar/Restaurant (Southern/Apothecary)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://percysseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Percys+and+Co+Ballard+Seattle",
  },
  {
    id: "eldr",
    active: true,
    name: "ELDR",
    neighborhood: "Ballard",
    address: "2246 NW Market St, Seattle, WA 98107 (confirm)",
    location: { lat: 47.6759, lng: -122.3996 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "17:00",
        endTime: "18:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "21:00",
        endTime: "22:00",
      }
    ],
    happyHoursText: "5:00 PM–6:00 PM; 9:00 PM–10:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink deals unverified",
      },
      {
        category: "food",
        description: "Wide range of discounted dishes",
      }
    ],
    category: "Restaurant (New American)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=ELDR+Ballard+Seattle",
  },
  {
    id: "situ-tacos-lupe-s-situ-tacos",
    active: true,
    name: "Situ Tacos (Lupe's Situ Tacos)",
    neighborhood: "Ballard",
    address: "5239 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6666, lng: -122.38365 },
    happyHours: [
      {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$9 for two tacos & a Modelito, canned beer specials, $1 off cocktails",
      },
      {
        category: "food",
        description: "$6 nachos (44% off), $3.50 tacos",
      }
    ],
    category: "Restaurant (Mexican-Lebanese)",
    verifiedHappyHour: "Yes",
    rating: "9.0 (Infatuation)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Situ+Tacos+Ballard+Seattle",
  },
  {
    id: "kangaroo-kiwi",
    active: true,
    name: "Kangaroo & Kiwi",
    neighborhood: "Ballard",
    address: "6118 15th Ave NW, Seattle, WA 98107",
    location: { lat: 47.6737, lng: -122.3762 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      },
      {
        days: ["Friday"],
        startTime: "16:00",
        endTime: "21:00",
      }
    ],
    happyHoursText: "Daily 4:00 PM–6:00 PM; Fri late 4:00 PM–9:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drinks unverified",
      },
      {
        category: "food",
        description: "~25% avg off food (9 items)",
      }
    ],
    category: "Bar (Australian)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://kangarooandkiwipub.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kangaroo+and+Kiwi+Ballard+Seattle",
  },
  {
    id: "rough-tumble-pub",
    active: true,
    name: "Rough & Tumble Pub",
    neighborhood: "Ballard",
    address: "5309 22nd Ave NW, Seattle, WA 98107",
    location: { lat: 47.6679, lng: -122.3822 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Tue-Fri 4:00 PM–6:00 PM; daily late 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "$5 Pink Chicken wine, $9 Aperol spritz, $9 Nika's Mule, $12 Douglas PNW lager pitchers, $9 shot & Montucky",
      },
      {
        category: "food",
        description: "Discounted snacks, $12 nachos",
        price: 12,
      }
    ],
    category: "Sports Bar (Women's sports)",
    verifiedHappyHour: "Yes",
    rating: "7.4 (Infatuation)",
    website: "https://roughandtumblepub.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rough+and+Tumble+Ballard+Seattle",
    photoUrl: "http://static1.squarespace.com/static/62d700f001fa590927c546f4/t/638b6796180f54345f6f24fe/1670080436182/RNT_Stacked_Distressed_on_blue.png?format=1500w",
  },
  {
    id: "bad-albert-s-tap-grill",
    active: true,
    name: "Bad Albert's Tap & Grill",
    neighborhood: "Ballard",
    address: "2718 NW Market St, Seattle, WA 98107",
    location: { lat: 47.6687, lng: -122.3888 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "15:00",
        endTime: "18:00",
      },
      {
        days: ["Sunday"],
        startTime: "15:00",
        endTime: "21:00",
      }
    ],
    happyHoursText: "Mon-Fri 3:00 PM–6:00 PM; Sun 3:00 PM–9:00 PM",
    deals: [
      {
        category: "drink",
        description: "Georgetown Tavern Beer 40% off (~31% avg drinks)",
      },
      {
        category: "food",
        description: "Hot wings (~16% avg food)",
      }
    ],
    category: "Bar",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bad+Alberts+Ballard+Seattle",
  },
  {
    id: "ray-s-cafe-upstairs-at-ray-s-boathouse",
    active: true,
    name: "Ray's Cafe (upstairs at Ray's Boathouse)",
    neighborhood: "Ballard",
    address: "6049 Seaview Ave NW, Seattle, WA 98107",
    location: { lat: 47.6805, lng: -122.3983 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Red Blend 47% off, Rose 36% off (~31% avg)",
      },
      {
        category: "food",
        description: "Small seafood menu (skip the food per HapHunt)",
      }
    ],
    category: "Restaurant (Seafood, view)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://rays.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rays+Cafe+Ballard+Seattle",
    photoUrl: "https://www.rays.com/wp-content/uploads/2018/04/rays_home_1.jpg",
  },
  {
    id: "the-walrus-and-the-carpenter",
    active: true,
    name: "The Walrus and the Carpenter",
    neighborhood: "Ballard",
    address: "4743 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6649, lng: -122.3824 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "4:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Cocktails 27% off (Marvin's Garden)",
      },
      {
        category: "food",
        description: "$1 off oysters, $10 off dozen (Wed)",
      }
    ],
    category: "Restaurant (Oyster bar)",
    verifiedHappyHour: "Yes",
    rating: "~9 (Infatuation)",
    website: "https://thewalrusbar.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Walrus+and+Carpenter+Ballard+Seattle",
  },
  {
    id: "barnacle-bar",
    active: true,
    name: "Barnacle Bar",
    neighborhood: "Ballard",
    address: "4743 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6649, lng: -122.3824 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "4:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Cocktails ~38% avg off (e.g., Complicato); food unverified",
      },
      {
        category: "food",
        description: "Food unverified",
      }
    ],
    category: "Wine/Cocktail Bar",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://thewalrusbar.com/barnacle",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Barnacle+Bar+Ballard+Seattle",
  },
  {
    id: "macleod-s",
    active: true,
    name: "Macleod's",
    neighborhood: "Ballard",
    address: "5200 Ballard Ave NW, Seattle, WA 98107",
    location: { lat: 47.6663, lng: -122.3833 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "House cocktails",
      },
      {
        category: "food",
        description: "Fish & chips, shrimp tacos, fries",
      }
    ],
    category: "Pub (Fish & chips)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://macleodsballard.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Macleods+Ballard+Seattle",
    photoUrl: "http://static1.squarespace.com/static/61159e33002c9d1f4de06f45/t/6115a29da548c72df7bff1dc/1628807837891/MFC+and+Pub.jpg?format=1500w",
  },
  {
    id: "baker-s",
    active: true,
    name: "Baker's",
    neighborhood: "Ballard",
    address: "6408 32nd Ave NW, Seattle, WA 98107",
    location: { lat: 47.6758, lng: -122.3996 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Tue-Thu 4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$8 aperitifs, $11 glasses of wine, one cocktail 50% off",
      },
      {
        category: "food",
        description: "Discounted snacks",
      }
    ],
    category: "Bar/Cocktail",
    verifiedHappyHour: "Yes (food only \"meh\")",
    rating: "7.9 (Infatuation)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bakers+Ballard+Seattle",
  },
  {
    id: "shingletown-saloon",
    active: false,
    name: "Shingletown Saloon",
    neighborhood: "Ballard",
    address: "Ballard, Seattle, WA",
    location: { lat: 47.6683, lng: -122.383 },
    happyHours: [
      {
        days: ["Wednesday", "Thursday", "Sunday"],
        startTime: "19:00",
        endTime: "21:00",
      },
      {
        days: ["Friday"],
        startTime: "17:00",
        endTime: "21:00",
      }
    ],
    happyHoursText: "Wed/Thu/Sun 7:00 PM–9:00 PM; Fri 5:00 PM–9:00 PM",
    deals: [
      {
        category: "drink",
        description: "58% off all wines, solid beer discounts",
      },
      {
        category: "food",
        description: "Food unverified",
      }
    ],
    category: "Bar",
    verifiedHappyHour: "Yes (drinks)",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shingletown+Saloon+Ballard+Seattle",
  },
  {
    id: "ocho",
    active: true,
    name: "Ocho",
    neighborhood: "Ballard",
    address: "2325 NW Market St, Seattle, WA 98107",
    location: { lat: 47.6685, lng: -122.3857 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Sangria Roja 43% off",
      },
      {
        category: "food",
        description: "Limited tapas",
      }
    ],
    category: "Bar (Spanish tapas)",
    verifiedHappyHour: "Partial (\"meh\")",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ocho+Ballard+Seattle",
  },
  {
    id: "triangle-spirits",
    active: true,
    name: "Triangle Spirits",
    neighborhood: "Fremont",
    address: "3507 Fremont Pl N, Seattle, WA 98103",
    location: { lat: 47.6507, lng: -122.3501 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "3:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Old Fashioned 50%+ off",
      },
      {
        category: "food",
        description: "Fried Chicken Basket 50%+ off",
      }
    ],
    category: "Bar (American / Fried chicken)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://trianglefremont.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Triangle+Spirits+Fremont+Seattle",
  },
  {
    id: "kamakura-japanese-cuisine-sushi",
    active: true,
    name: "Kamakura Japanese Cuisine & Sushi",
    neighborhood: "Fremont",
    address: "4725 Fremont Ave N, Seattle, WA 98103 (confirm)",
    location: { lat: 47.6509, lng: -122.35 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "11:45",
        endTime: "17:30",
      }
    ],
    happyHoursText: "11:45 AM–5:30 PM",
    deals: [
      {
        category: "drink",
        description: "Sapporo 50% off (~46% avg drinks)",
      },
      {
        category: "food",
        description: "Salmon 42% off (~35% avg food)",
      }
    ],
    category: "Restaurant (Japanese)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kamakura+Fremont+Seattle",
  },
  {
    id: "le-coin",
    active: true,
    name: "Le Coin",
    neighborhood: "Fremont",
    address: "4201 Fremont Ave N, Seattle, WA 98103",
    location: { lat: 47.6565, lng: -122.35 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Mean Green Espresso Martini, beer, wine, champagne",
      },
      {
        category: "food",
        description: "50% off oysters, frites, mussels, fennel confit, caviar service",
      }
    ],
    category: "Restaurant (French)",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://lecoinseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Le+Coin+Fremont+Seattle",
  },
  {
    id: "el-camino",
    active: true,
    name: "El Camino",
    neighborhood: "Fremont",
    address: "607 N 35th St, Seattle, WA 98103",
    location: { lat: 47.6506, lng: -122.3515 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      },
      {
        days: ["Friday"],
        startTime: "21:00",
        endTime: "23:00",
      }
    ],
    happyHoursText: "Daily 3:00 PM–6:00 PM; Fri/Sat late 9:00 PM–11:00 PM",
    deals: [
      {
        category: "drink",
        description: "Happy-Rita half off",
      },
      {
        category: "food",
        description: "Mini Wet Burrito 50%+ off",
      }
    ],
    category: "Restaurant (Mexican)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://elcaminorestaurant.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Camino+Fremont+Seattle",
    photoUrl: "http://static1.squarespace.com/static/60908de6b522e54652739dd0/t/60919e8f0348a549c3dc0b00/1628207628506/ElCamino_Logo_H_lg_rgb_orange.png?format=1500w",
  },
  {
    id: "rockcreek-seafood-spirits",
    active: true,
    name: "RockCreek Seafood & Spirits",
    neighborhood: "Fremont",
    address: "4300 Fremont Ave N, Seattle, WA 98103",
    location: { lat: 47.6575, lng: -122.3501 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "17:30",
      }
    ],
    happyHoursText: "4:00 PM–5:30 PM",
    deals: [
      {
        category: "drink",
        description: "Drinks \"meh\"",
      },
      {
        category: "food",
        description: "Discounted oysters, seafood small bites",
      }
    ],
    category: "Restaurant (Seafood)",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://rockcreekseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=RockCreek+Fremont+Seattle",
    photoUrl: "https://rockcreekseafood.com/wp-content/uploads/7.webp",
  },
  {
    id: "dreamland-bar-diner",
    active: true,
    name: "Dreamland Bar & Diner",
    neighborhood: "Fremont",
    address: "3401 Evanston Ave N, Seattle, WA 98103",
    location: { lat: 47.6498, lng: -122.3513 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      },
      {
        days: ["Friday"],
        startTime: "22:00",
        endTime: "00:00",
      }
    ],
    happyHoursText: "Daily 3:00 PM–6:00 PM; Fri/Sat late 10:00 PM–12:00 AM",
    deals: [
      {
        category: "drink",
        description: "$1 off beer, $2 off wine, $3 off cocktails",
      },
      {
        category: "food",
        description: "$5 fries, $9 burger, Crunch Wrap",
      }
    ],
    category: "Bar/Diner",
    verifiedHappyHour: "Yes",
    rating: "8.0 (Infatuation)",
    website: "https://dreamlandfremont.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dreamland+Fremont+Seattle",
  },
  {
    id: "ltd-bar-and-grill",
    active: true,
    name: "LTD Bar and Grill",
    neighborhood: "Fremont",
    address: "3515 Fremont Ave N, Seattle, WA 98103 (confirm)",
    location: { lat: 47.6513, lng: -122.3513 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Passable drink savings",
      },
      {
        category: "food",
        description: "Grilled cheese, nachos deals",
      }
    ],
    category: "Bar & Restaurant",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=LTD+Bar+and+Grill+Fremont+Seattle",
  },
  {
    id: "the-dock-sports-bar-grill",
    active: true,
    name: "The Dock Sports Bar & Grill",
    neighborhood: "Fremont",
    address: "Fremont, Seattle, WA",
    location: { lat: 47.6489, lng: -122.3429 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Drink specials",
      },
      {
        category: "food",
        description: "HH items from $9.95 incl. Dock Quesadilla, boneless wings",
        price: 9.95,
      }
    ],
    category: "Sports Bar",
    verifiedHappyHour: "Yes — times note: \"confirm days\"",
    rating: "4.0 (Yelp)",
    website: "https://fremontdock.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Dock+Fremont+Seattle",
  },
  {
    id: "pecado-bueno",
    active: true,
    name: "Pecado Bueno",
    neighborhood: "Fremont",
    address: "4307 Fremont Ave N, Seattle, WA 98103",
    location: { lat: 47.6576, lng: -122.3501 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "3:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drinks unverified",
      },
      {
        category: "food",
        description: "36% avg off munchies",
      }
    ],
    category: "Restaurant (Mexican)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    website: "https://pecadobueno.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pecado+Bueno+Fremont+Seattle",
  },
  {
    id: "shawn-o-donnell-s",
    active: true,
    name: "Shawn O'Donnell's",
    neighborhood: "Fremont",
    address: "Fremont, Seattle, WA",
    location: { lat: 47.6515, lng: -122.3499 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM; 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Drinks unverified",
      },
      {
        category: "food",
        description: "Shepherd's Pie ~50% off",
      }
    ],
    category: "Restaurant (Irish)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shawn+ODonnells+Fremont+Seattle",
  },
  {
    id: "stampede-cocktail-club",
    active: true,
    name: "Stampede Cocktail Club",
    neighborhood: "Fremont",
    address: "Fremont, Seattle, WA",
    location: { lat: 47.6513, lng: -122.3506 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "17:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "5:00 PM–7:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drinks unverified",
      },
      {
        category: "food",
        description: "Pork dumplings 33% off",
      }
    ],
    category: "Cocktail Bar",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Stampede+Cocktail+Club+Fremont+Seattle",
  },
  {
    id: "revel",
    active: true,
    name: "Revel",
    neighborhood: "Fremont",
    address: "401 N 36th St, Seattle, WA 98103",
    location: { lat: 47.6515, lng: -122.3518 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday"],
        startTime: "17:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "5:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drinks unverified",
      },
      {
        category: "food",
        description: "Butter salad, jaengban noodle (~28% avg off)",
      }
    ],
    category: "Restaurant (Korean)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://revelseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Revel+Fremont+Seattle",
  },
  {
    id: "the-barrel-thief",
    active: true,
    name: "The Barrel Thief",
    neighborhood: "Fremont",
    address: "3417 Evanston Ave N, Seattle, WA 98103",
    location: { lat: 47.65, lng: -122.3513 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Espresso Martini, Old Fashioned 39% off",
      },
      {
        category: "food",
        description: "Food \"meh\" (~22%)",
      }
    ],
    category: "Wine/Whiskey Bar",
    verifiedHappyHour: "Yes (drinks)",
    rating: "4.4 (Yelp)",
    website: "https://thebarrelthief.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Barrel+Thief+Fremont+Seattle",
  },
  {
    id: "tavolata-fremont",
    active: true,
    name: "Tavolata Fremont",
    neighborhood: "Fremont",
    address: "3801 Stone Way N, Seattle, WA 98103 (Wallingford/Fremont border)",
    location: { lat: 47.6524, lng: -122.3426 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "21:00",
        endTime: "22:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM; 9:00 PM–10:00 PM",
    deals: [
      {
        category: "drink",
        description: "Cocktail deals",
      },
      {
        category: "food",
        description: "Modest food savings",
      }
    ],
    category: "Restaurant (Italian)",
    verifiedHappyHour: "Partial (\"meh\")",
    rating: "4.3 (Yelp)",
    website: "https://ethanstowellrestaurants.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tavolata+Fremont+Seattle",
    photoUrl: "https://cdn.sanity.io/images/t34vvqit/production/46546ea85b863966ee6a72ce4fc3a763aa411eb9-1000x1000.jpg?w=1200&q=75&fit=clip&auto=format",
  },
  {
    id: "kin-len-thai-night-bites",
    active: true,
    name: "Kin Len Thai Night Bites",
    neighborhood: "Fremont",
    address: "Fremont, Seattle, WA (confirm)",
    location: { lat: 47.6505, lng: -122.35 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM; 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "~10% off drinks",
      },
      {
        category: "food",
        description: "Mussels pineapple curry, chicken red curry roti (select deep discounts)",
      }
    ],
    category: "Restaurant (Thai)",
    verifiedHappyHour: "Partial",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kin+Len+Fremont+Seattle",
  },
  {
    id: "aslan-brewing-fremont",
    active: true,
    name: "Aslan Brewing (Fremont)",
    neighborhood: "Fremont",
    address: "Fremont, Seattle, WA (confirm)",
    location: { lat: 47.6515, lng: -122.3518 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Brewery specials",
      },
      {
        category: "food",
        description: "Brewpub food",
      }
    ],
    category: "Brewery",
    verifiedHappyHour: "Partial",
    rating: "4.4 (Yelp)",
    website: "https://aslanbrewing.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aslan+Brewing+Fremont+Seattle",
    photoUrl: "http://static1.squarespace.com/static/65f1f587468b29084f89121a/t/66a2dcaf5a7a9c71492498db/1721949365405/social+image.png?format=1500w",
  },
  {
    id: "neb-italian-restaurant-neb-wine-bar",
    active: true,
    name: "Neb Italian Restaurant (Neb Wine Bar)",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA",
    location: { lat: 47.6133, lng: -122.3411 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "17:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "5:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Negroni deals",
      },
      {
        category: "food",
        description: "Cheap Burrata, wood-fired plates",
      }
    ],
    category: "Restaurant/Wine Bar (Italian)",
    verifiedHappyHour: "Yes",
    rating: "4.6 (Yelp)",
    website: "https://nebseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Neb+Wine+Bar+Belltown+Seattle",
    photoUrl: "https://images.getbento.com/accounts/716565ec558fe07e0b671637ec0de7cf/media/images/30482NebDarkLogo.png?w=1200&fit=fill&auto=compress,format&cs=origin&h=600&bg=EDEDF1&pad=100",
  },
  {
    id: "the-5-point-cafe",
    active: true,
    name: "The 5 Point Cafe",
    neighborhood: "Belltown",
    address: "415 Cedar St, Seattle, WA 98121",
    location: { lat: 47.6176, lng: -122.3494 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "06:00",
        endTime: "08:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "15:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "6:00 AM–8:00 AM; 3:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "$1 off wells/tallboys, $2 off drafts/wine",
      },
      {
        category: "food",
        description: "50%+ off select food",
      }
    ],
    category: "Diner/Bar (24-hr)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://the5pointcafe.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=5+Point+Cafe+Belltown+Seattle",
    photoUrl: "http://static1.squarespace.com/static/5d5ae5414889080001ea950c/t/6a2db882e05dbb482035dc0e/1781381251059/5point_transparent.png?format=1500w",
  },
  {
    id: "el-gaucho",
    active: true,
    name: "El Gaucho",
    neighborhood: "Belltown",
    address: "2505 1st Ave, Seattle, WA 98121",
    location: { lat: 47.6154, lng: -122.35 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Manhattan deals",
      },
      {
        category: "food",
        description: "Tenderloin Diablo, upscale bites",
      }
    ],
    category: "Steakhouse",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://elgaucho.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Gaucho+Belltown+Seattle",
  },
  {
    id: "six-seven-restaurant-edgewater-hotel",
    active: true,
    name: "Six Seven Restaurant (Edgewater Hotel)",
    neighborhood: "Belltown",
    address: "2411 Alaskan Way Pier 67, Seattle, WA 98121",
    location: { lat: 47.6154, lng: -122.354 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "15:00",
        endTime: "17:00",
      },
      {
        days: ["Sunday"],
        startTime: "15:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "Mon-Thu 3:00 PM–5:00 PM; Sun 3:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "30% off all beers/ciders",
      },
      {
        category: "food",
        description: "Discounted clam chowder",
      }
    ],
    category: "Restaurant (Seafood, waterfront)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://edgewaterhotel.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Six+Seven+Restaurant+Seattle",
    photoUrl: "https://admin.edgewaterhotel.com/content/uploads/2025/12/The-Edgewater-Hotel-Seattle-WA-1.jpg",
  },
  {
    id: "wasabi-sushi-izakaya",
    active: true,
    name: "Wasabi Sushi & Izakaya",
    neighborhood: "Belltown",
    address: "2311 2nd Ave, Seattle, WA 98121",
    location: { lat: 47.6151, lng: -122.3444 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "14:00",
        endTime: "18:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "2:00 PM–6:00 PM; 4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "IPA 40% off (~32% avg drinks)",
      },
      {
        category: "food",
        description: "Chirashi Bowl 58% off (~26% avg food)",
      }
    ],
    category: "Restaurant (Japanese)",
    verifiedHappyHour: "Yes",
    rating: "4.0 (Yelp)",
    website: "https://wasabisushiseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Wasabi+Sushi+Belltown+Seattle",
  },
  {
    id: "roquette",
    active: true,
    name: "Roquette",
    neighborhood: "Belltown",
    address: "2232 1st Ave, Seattle, WA 98121 (confirm)",
    location: { lat: 47.6136, lng: -122.3464 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "17:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "5:00 PM–7:00 PM",
    deals: [
      {
        category: "drink",
        description: "Wine deals",
      },
      {
        category: "food",
        description: "Salaminis, snacks",
      }
    ],
    category: "Cocktail Bar",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://roquetteseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Roquette+Belltown+Seattle",
  },
  {
    id: "navy-strength",
    active: true,
    name: "Navy Strength",
    neighborhood: "Belltown",
    address: "2505 2nd Ave, Seattle, WA 98121",
    location: { lat: 47.6162, lng: -122.3464 },
    happyHours: [
      {
        days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Slushie deal (\"meh\")",
      },
      {
        category: "food",
        description: "Nachos, food deals",
      }
    ],
    category: "Cocktail Bar (Tropical/Tiki)",
    verifiedHappyHour: "Yes (food)",
    rating: "4.6 (Yelp)",
    website: "https://navystrengthseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Navy+Strength+Belltown+Seattle",
    photoUrl: "http://static1.squarespace.com/static/58c720a5ebbd1ac8333edba7/t/5d22c9c9a6c12f0001af5811/1562560973460/Navy+Strength+logo+photo.png?format=1500w",
  },
  {
    id: "cotto",
    active: true,
    name: "Cotto",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA",
    location: { lat: 47.6152, lng: -122.3445 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM; 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Drink deals \"meh\"",
      },
      {
        category: "food",
        description: "Pizzas, pasta discounts",
      }
    ],
    category: "Restaurant (Italian)",
    verifiedHappyHour: "Yes (food)",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cotto+Belltown+Seattle",
  },
  {
    id: "umi-sake-house",
    active: true,
    name: "Umi Sake House",
    neighborhood: "Belltown",
    address: "2230 1st Ave, Seattle, WA 98121",
    location: { lat: 47.6135, lng: -122.3463 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM; 10:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Sake specials",
      },
      {
        category: "food",
        description: "Extensive discounted sushi, sashimi, rolls, izakaya",
      }
    ],
    category: "Restaurant (Japanese/sushi)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://umisakehouse.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umi+Sake+House+Belltown+Seattle",
    photoUrl: "https://static.wixstatic.com/media/3cc5e9_43740fe5ff484f35ab75fa7580ef2760.png/v1/fill/w_153,h_216,al_c/3cc5e9_43740fe5ff484f35ab75fa7580ef2760.png",
  },
  {
    id: "tavolata-belltown",
    active: true,
    name: "Tavolata (Belltown)",
    neighborhood: "Belltown",
    address: "2323 2nd Ave, Seattle, WA 98121",
    location: { lat: 47.6154, lng: -122.3445 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Cocktails, beer, wine",
      },
      {
        category: "food",
        description: "Pasta, apps, meatballs",
      }
    ],
    category: "Restaurant (Italian)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://ethanstowellrestaurants.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tavolata+Belltown+Seattle",
  },
  {
    id: "here-today-brewery-kitchen",
    active: true,
    name: "Here Today Brewery + Kitchen",
    neighborhood: "Belltown",
    address: "2815 Elliott Ave, Seattle, WA 98121",
    location: { lat: 47.6177, lng: -122.3557 },
    happyHours: [
      {
        days: ["Monday"],
        startTime: "16:00",
        endTime: "22:00",
      },
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "14:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Mon 4:00 PM–10:00 PM; Tue-Fri 2:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$6 beer of the week, $1 off large pours",
      },
      {
        category: "food",
        description: "$8 tavern burger & fries (Mon 50% off)",
        price: 8,
      }
    ],
    category: "Brewery",
    verifiedHappyHour: "Yes (food)",
    rating: "7.4 (Infatuation)",
    website: "https://heretodaybrewing.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Here+Today+Brewery+Seattle",
  },
  {
    id: "kedai-makan",
    active: true,
    name: "Kedai Makan",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA",
    location: { lat: 47.61355, lng: -122.34635 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "14:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "2:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Decent drink deals",
      },
      {
        category: "food",
        description: "Malay peanuts, prawn crackers, snack menu",
      }
    ],
    category: "Restaurant (Malaysian)",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://kedaimakansea.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kedai+Makan+Belltown+Seattle",
  },
  {
    id: "hatch-cantina",
    active: true,
    name: "Hatch Cantina",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA",
    location: { lat: 47.6148, lng: -122.3487 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "21:00",
        endTime: "00:00",
      }
    ],
    happyHoursText: "Tue-Sun 3:00 PM–6:00 PM; daily late 9:00 PM–12:00 AM",
    deals: [
      {
        category: "drink",
        description: "Drinks \"meh\"",
      },
      {
        category: "food",
        description: "Tasty bites deals",
      }
    ],
    category: "Restaurant (Mexican)",
    verifiedHappyHour: "Yes (food)",
    rating: "4.3 (Yelp)",
    website: "https://hatchcantina.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hatch+Cantina+Belltown+Seattle",
  },
  // TODO: address unconfirmed — 2223 1st Ave vs 2904 1st Ave, verify manually
  {
    id: "thai-on-1",
    active: true,
    name: "Thai on 1",
    neighborhood: "Belltown",
    address: "2223 1st Ave, Seattle, WA 98121 (confirm)",
    location: { lat: 47.6179, lng: -122.3525 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Many drink options (\"meh\")",
      },
      {
        category: "food",
        description: "Salads, pot stickers deals",
      }
    ],
    category: "Restaurant (Thai)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Thai+on+1+Belltown+Seattle",
  },
  {
    id: "vinnie-s-wine-shop-cocktail-bar",
    active: true,
    name: "Vinnie's Wine Shop & Cocktail Bar",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA",
    location: { lat: 47.6162, lng: -122.3464 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Mon-Sat 4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink savings unverified",
      },
      {
        category: "food",
        description: "Oyster deal",
      }
    ],
    category: "Wine Bar",
    verifiedHappyHour: "Yes (oysters)",
    rating: "4.6 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vinnies+Wine+Shop+Belltown+Seattle",
  },
  {
    id: "buckley-s",
    active: true,
    name: "Buckley's",
    neighborhood: "Belltown",
    address: "2331 2nd Ave, Seattle, WA 98121",
    location: { lat: 47.6155, lng: -122.3446 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink savings unverified",
      },
      {
        category: "food",
        description: "Deep-fried food ~33.6% avg off",
      }
    ],
    category: "Bar/Sports Bar",
    verifiedHappyHour: "Yes (food)",
    rating: "4.0 (Yelp)",
    website: "https://buckleysseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Buckleys+Belltown+Seattle",
    photoUrl: "https://www.buckleysseattle.com/wp-content/uploads/2019/06/cropped-buckleysseattle-1.png",
  },
  {
    id: "aqua-by-el-gaucho",
    active: true,
    name: "AQUA by El Gaucho",
    neighborhood: "Belltown",
    address: "2801 Alaskan Way Pier 70, Seattle, WA 98121",
    location: { lat: 47.6182, lng: -122.356 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "17:00",
        endTime: "18:30",
      }
    ],
    happyHoursText: "5:00 PM–6:30 PM",
    deals: [
      {
        category: "drink",
        description: "$10-12 specialty cocktails, $6 drafts",
      },
      {
        category: "food",
        description: "Deep-fried oysters, luxe bites",
      }
    ],
    category: "Restaurant (Seafood/Steak, waterfront)",
    verifiedHappyHour: "Yes (food)",
    rating: "4.4 (Yelp)",
    website: "https://aquabyelgaucho.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=AQUA+El+Gaucho+Seattle",
  },
  {
    id: "some-random-bar",
    active: true,
    name: "Some Random Bar",
    neighborhood: "Belltown",
    address: "2604 1st Ave, Seattle, WA 98121",
    location: { lat: 47.6162, lng: -122.3508 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Mon-Sat 4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$3 off cocktails/wine, $2 off draft",
      },
      {
        category: "food",
        description: "Crab nachos, burrata garlic bread; 20.6% off food Sun",
      }
    ],
    category: "Gastropub",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://somerandombar.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Some+Random+Bar+Belltown+Seattle",
  },
  {
    id: "vindicktive-wings",
    active: true,
    name: "Vindicktive Wings",
    neighborhood: "Belltown",
    address: "2322 1st Ave, Seattle, WA 98121",
    location: { lat: 47.6142, lng: -122.347 },
    happyHours: [
      {
        days: ["Wednesday"],
        startTime: "16:00",
        endTime: "22:00",
      }
    ],
    happyHoursText: "4:00 PM–10:00 PM",
    deals: [
      {
        category: "food",
        description: "$0.99 per wing",
        price: 0.99,
      }
    ],
    category: "Bar Food (Wings)",
    verifiedHappyHour: "Yes",
    rating: "8.2 (Infatuation)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vindicktive+Wings+Belltown+Seattle",
  },
  {
    id: "lava-lounge",
    active: true,
    name: "Lava Lounge",
    neighborhood: "Belltown",
    address: "2226 2nd Ave, Seattle, WA 98121",
    location: { lat: 47.6146, lng: -122.3439 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "3:00 PM–7:00 PM",
    deals: [
      {
        category: "drink",
        description: "$5 house cocktails, $4 well drinks, $3.50 drafts",
      },
      {
        category: "food",
        description: "Bar snacks; shuffleboard/arcade",
      }
    ],
    category: "Dive Bar (Tiki)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lava+Lounge+Belltown+Seattle",
  },
  {
    id: "the-whisky-bar",
    active: true,
    name: "The Whisky Bar",
    neighborhood: "Belltown",
    address: "2122 2nd Ave, Seattle, WA 98121",
    location: { lat: 47.614, lng: -122.3431 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:30",
      }
    ],
    happyHoursText: "4:00 PM–6:30 PM",
    deals: [
      {
        category: "drink",
        description: "Drink deals",
      },
      {
        category: "food",
        description: "Onion rings; food \"meh\"",
      }
    ],
    category: "Bar (Scottish)",
    verifiedHappyHour: "Yes (drinks)",
    rating: "4.2 (Yelp)",
    website: "https://thewhiskybar.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Whisky+Bar+Belltown+Seattle",
    photoUrl: "https://nebula.wsimg.com/d38728987d2c8d1c5b36566817ef7293?AccessKeyId=ABB342806B0932B53B25&disposition=0&alloworigin=1",
  },
  {
    id: "limoncello-italian-kitchen-bar",
    active: true,
    name: "Limoncello Italian Kitchen & Bar",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA",
    location: { lat: 47.6142, lng: -122.347 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "16:00",
        endTime: "18:00",
      },
      {
        days: ["Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "Mon-Fri 4:00 PM–6:00 PM; Sat-Sun 4:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Cocktail & draft-beer deals",
      },
      {
        category: "food",
        description: "Food \"meh\"",
      }
    ],
    category: "Restaurant (Italian)",
    verifiedHappyHour: "Yes (drinks)",
    rating: "4.3 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Limoncello+Belltown+Seattle",
  },
  {
    id: "screwdriver-bar",
    active: true,
    name: "Screwdriver Bar",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA",
    location: { lat: 47.61415, lng: -122.3469 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "16:00",
        endTime: "19:00",
      },
      {
        days: ["Sunday"],
        startTime: "16:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "Mon-Thu 4:00 PM–7:00 PM; Sun 4:00 PM–7:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink deals ~22% avg off",
      }
    ],
    category: "Bar/Music venue",
    verifiedHappyHour: "Partial",
    rating: "4.6 (Yelp)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Screwdriver+Bar+Belltown+Seattle",
  },
  {
    id: "bathtub-gin-co",
    active: true,
    name: "Bathtub Gin & Co.",
    neighborhood: "Belltown",
    address: "2205 2nd Ave, Seattle, WA 98121",
    location: { lat: 47.61447, lng: -122.34378 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "$7 house cocktails, discounted beer/wine (Sun-Wed mellow)",
        price: 7,
      }
    ],
    category: "Speakeasy / Cocktail Bar",
    verifiedHappyHour: "Partial",
    rating: "4.5 (Yelp)",
    website: "https://bathtubginseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bathtub+Gin+Belltown+Seattle",
  },
  {
    id: "el-sirenito",
    active: true,
    name: "El Sirenito",
    neighborhood: "Georgetown",
    address: "5901 Airport Way S, Seattle, WA 98108",
    location: { lat: 47.5472, lng: -122.3195 },
    happyHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$2 off signature cocktails, half-off mezcal Wed",
        price: 2,
      },
      {
        category: "food",
        description: "$3 street tacos; Taco Tue, Tacos al Pastor Fri; 92+ mezcals",
        price: 3,
      }
    ],
    category: "Restaurant (Coastal Mexican / Marisqueria)",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Google)",
    website: "https://sirenitoseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Sirenito+Georgetown+Seattle",
  },
  {
    id: "fonda-la-catrina",
    active: true,
    name: "Fonda La Catrina",
    neighborhood: "Georgetown",
    address: "5905 Airport Way S, Seattle, WA 98108",
    location: { lat: 47.5471, lng: -122.3196 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$5 margaritas, $1 off beer",
      },
      {
        category: "food",
        description: "Discounted apps (tacos dorados, quesadillas, queso fundido)",
      }
    ],
    category: "Restaurant (Mexico City-style Mexican)",
    verifiedHappyHour: "Yes",
    rating: "4.6 (OpenTable) / 4.2 (Tripadvisor)",
    website: "https://fondalacatrina.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fonda+La+Catrina+Georgetown+Seattle",
  },
  {
    id: "georgetown-liquor-company-glc",
    active: true,
    name: "Georgetown Liquor Company (GLC)",
    neighborhood: "Georgetown",
    address: "5501 Airport Way S Ste B, Seattle, WA 98108",
    location: { lat: 47.549, lng: -122.3204 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "14:00",
        endTime: "17:00",
      }
    ],
    happyHoursText: "2:00 PM–5:00 PM",
    deals: [
      {
        category: "drink",
        description: "Drink specials (official)",
      },
      {
        category: "food",
        description: "Vegan sandwiches, burgers, sides (broader $10 burger+beer deals unconfirmed)",
        price: 10,
      }
    ],
    category: "Bar/Restaurant (100% vegan punk bar, 21+)",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://glcseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Georgetown+Liquor+Company+Seattle",
  },
  {
    id: "jules-maes-saloon",
    active: true,
    name: "Jules Maes Saloon",
    neighborhood: "Georgetown",
    address: "5919 Airport Way S, Seattle, WA 98108",
    location: { lat: 47.547, lng: -122.3197 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "3:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$8 house vodka/gin martini, $1 off all wells, $1 off all pints",
      },
      {
        category: "food",
        description: "Rainier beer-battered cheese curds $8, chicken quesadilla; pub grub",
        price: 8,
      }
    ],
    category: "Bar (Historic saloon, est. 1888)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Tripadvisor)",
    website: "https://julesmaessaloon.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jules+Maes+Saloon+Georgetown+Seattle",
  },
  {
    id: "star-brass-lounge-star-brass-works-lounge",
    active: true,
    name: "Star Brass Lounge (Star Brass Works Lounge)",
    neighborhood: "Georgetown",
    address: "5813 Airport Way S, Seattle, WA 98108",
    location: { lat: 47.5476, lng: -122.3193 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "15:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "Mon-Thu 3:00 PM–6:00 PM; Fri/Sat late 10:00 PM–close; Sun late 9:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "$1 off drafts & wells",
        price: 1,
      },
      {
        category: "food",
        description: "Tavern Burger $7, shoestring fries, tots",
        price: 7,
      }
    ],
    category: "Bar (American)",
    verifiedHappyHour: "Yes",
    rating: "4.2 (Tripadvisor) / 8.7 (Foursquare)",
    website: "https://starbrassworkslounge.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Star+Brass+Lounge+Georgetown+Seattle",
  },
  {
    id: "9lb-hammer",
    active: true,
    name: "9lb Hammer",
    neighborhood: "Georgetown",
    address: "6009 Airport Way S, Seattle, WA 98108",
    location: { lat: 47.5466, lng: -122.3201 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Cheap beer, Georgetown Brewing drafts (9lb Porter), shot specials",
      },
      {
        category: "food",
        description: "Pub grub, burgers; free pool, pinball",
      }
    ],
    category: "Dive Bar / Sports Bar",
    verifiedHappyHour: "Yes",
    rating: "4.4 (Yelp)",
    website: "https://ninepoundhammer.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9lb+Hammer+Georgetown+Seattle",
  },
  {
    id: "1988-cocktail-lounge-kuma-kitchen-bar",
    active: true,
    name: "1988 Cocktail Lounge / Kuma Kitchen & Bar",
    neighborhood: "Georgetown",
    address: "6009 12th Ave S (Kuma: 6003 12th Ave S), Seattle, WA 98108",
    location: { lat: 47.5466, lng: -122.3207 },
    happyHours: [
      {
        days: ["Wednesday", "Thursday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "$10 beer + shot",
        price: 10,
      },
      {
        category: "food",
        description: "Asian small plates (umami fries, brussels, wings)",
      }
    ],
    category: "Cocktail Lounge (Pan-Asian)",
    verifiedHappyHour: "Yes",
    rating: "4.5 (Yelp)",
    website: "https://kumageorgetown.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=1988+Cocktail+Lounge+Georgetown+Seattle",
  },
  {
    id: "smarty-pants",
    active: true,
    name: "Smarty Pants",
    neighborhood: "Georgetown",
    address: "6017 Airport Way S, Seattle, WA 98108",
    location: { lat: 47.5465, lng: -122.3202 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        startTime: "16:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "4:00 PM–7:00 PM; 10:00 PM–close",
    deals: [
      {
        category: "drink",
        description: "Beer & cocktail deals",
      },
      {
        category: "food",
        description: "Chicago/Philly grilled sandwiches, quesadillas, smash burger",
      }
    ],
    category: "Bar / Sandwiches (Craft beer)",
    verifiedHappyHour: "Yes (times approx.) — times note: \"older source; confirm\"",
    rating: "4.5 (Yelp)",
    website: "https://smartypantsseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Smarty+Pants+Georgetown+Seattle",
    photoUrl: "http://static1.squarespace.com/static/59249ff12b8dde2671bbddca/t/5972d35ab8a79b94b0b2edd1/1500697439337/smarty-pants-seattle_restaurant-logo.png?format=1500w",
  },
  {
    id: "ciudad-grill",
    active: true,
    name: "Ciudad Grill",
    neighborhood: "Georgetown",
    address: "6118 12th Ave S, Seattle, WA 98108",
    location: { lat: 47.5456, lng: -122.3208 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Carrot margarita, small plates reported",
      },
      {
        category: "food",
        description: "Grilled meats, mezze, flatbreads",
      }
    ],
    category: "Restaurant (Mediterranean/Middle Eastern grill)",
    verifiedHappyHour: "No",
    rating: "4.0 (Yelp)",
    website: "https://ciudadseattle.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ciudad+Grill+Georgetown+Seattle",
    photoUrl: "http://static1.squarespace.com/static/57dd6290e3df28c822bd598d/t/5855938744024313b030a8ff/1482003335763/ciudad+eye+logo.jpg?format=1500w",
  },
  {
    id: "great-notion-brewing-georgetown",
    active: true,
    name: "Great Notion Brewing (Georgetown)",
    neighborhood: "Georgetown",
    address: "Airport Way S area, Seattle, WA 98108",
    location: { lat: 47.5453, lng: -122.3218 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "No traditional HH confirmed",
      },
      {
        category: "food",
        description: "Craft beer; food trucks/snacks",
      }
    ],
    category: "Brewery",
    verifiedHappyHour: "No",
    rating: "4.4 (Yelp)",
    website: "https://greatnotion.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Great+Notion+Georgetown+Seattle",
  },
  {
    id: "pablo-y-pablo",
    active: true,
    name: "Pablo y Pablo",
    neighborhood: "Wallingford",
    address: "1605 N 34th St, Seattle, WA 98103",
    location: { lat: 47.649, lng: -122.3369 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "18:00",
      }
    ],
    happyHoursText: "4:00 PM–6:00 PM",
    deals: [
      {
        category: "drink",
        description: "Margarita deals",
      },
      {
        category: "food",
        description: "Tacos, nachos, ceviche",
      }
    ],
    category: "Restaurant (Mexican / Agave bar)",
    verifiedHappyHour: "Yes (food \"meh\")",
    rating: "4.3 (Yelp)",
    website: "https://pabloypablo.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pablo+y+Pablo+Wallingford+Seattle",
    photoUrl: "http://static1.squarespace.com/static/662702fb8ca58656a0118d85/t/6789881419dc7c7035c7d9d7/1737066516854/pablo-cream_logo.png?format=1500w",
  },
  {
    id: "the-rebel",
    active: true,
    name: "The Rebel",
    neighborhood: "Wallingford",
    address: "309 NE 45th St, Seattle, WA 98105",
    location: { lat: 47.6612, lng: -122.3255 },
    happyHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        startTime: "16:00",
        endTime: "19:00",
      }
    ],
    happyHoursText: "4:00 PM–7:00 PM",
    deals: [
      {
        category: "drink",
        description: "$2 off well drinks, wine, draft beer",
        price: 2,
      },
      {
        category: "food",
        description: "Chips & queso; cheesesteak (full price)",
      }
    ],
    category: "Bar (Elevated bar food; former Kate's Pub)",
    verifiedHappyHour: "Yes",
    rating: "8.3 (Infatuation)",
    website: "https://therebelwallingford.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Rebel+Wallingford+Seattle",
  },
  {
    id: "tutta-bella",
    active: true,
    name: "Tutta Bella",
    neighborhood: "Wallingford",
    address: "4411 Stone Way N, Seattle, WA 98103",
    location: { lat: 47.6615, lng: -122.3426 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "House wines 62% off (~42% avg drinks)",
      },
      {
        category: "food",
        description: "Neapolitan meatballs 69% off (~59% avg food)",
      }
    ],
    category: "Restaurant (Neapolitan pizza)",
    verifiedHappyHour: "Yes — times note: \"confirm\"",
    rating: "4.3 (Yelp)",
    website: "https://tuttabella.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tutta+Bella+Wallingford+Seattle",
    photoUrl: "https://images.getbento.com/accounts/fe8f810bb28cbad7f440ade219772027/media/images/29096Tutta_Bella_logo_May2021_reverse.png?w=1200&fit=fill&auto=compress,format&cs=origin&h=600&bg=EDEDF1&pad=100",
  },
  {
    id: "little-water-cantina",
    active: true,
    name: "Little Water Cantina",
    neighborhood: "Wallingford",
    address: "2865 Eastlake Ave E, Seattle, WA 98102 (Eastlake/Wallingford edge)",
    location: { lat: 47.6456, lng: -122.3256 },
    happyHours: [],
    deals: [
      {
        category: "drink",
        description: "Old Fashioned deal (limited drink variety)",
      },
      {
        category: "food",
        description: "Wild Boar Taco ~50% off",
      }
    ],
    category: "Restaurant (Mexican)",
    verifiedHappyHour: "Yes",
    rating: "4.3 (Yelp)",
    website: "https://littlewatercantina.com",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Little+Water+Cantina+Seattle",
    photoUrl: "https://littlewatercantina.com/wp-content/uploads/2023/02/LWC_X_FeeditCreative_table_of_food-scaled.jpg",
  }
];
