var simplemaps_canadamap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",

    //State defaults
    state_description: "TeamHydrated",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "TeamHyderated",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

    //Zoom settings
    manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    AB: {
      name: "Alberta",
      description: "Support centers: Calgary, Edmonton, Red Deer, Lethbridge",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    BC: {
      name: "British Columbia",
      description: "Support centers: Vancouver, Victoria, Kelowna, Surrey",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SK: {
      name: "Saskatchewan",
      description: "Support centers: Saskatoon, Regina, Prince Albert, Moose Jaw",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MB: {
      name: "Manitoba",
      description: "Support centers: Winnipeg, Brandon, Thompson, Steinbach",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ON: {
      name: "Ontario",
      description: "Support centers: Toronto, Ottawa, Hamilton, London",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    QC: {
      name: "Quebec",
      description: "Support centers: Montreal, Quebec City, Laval, Gatineau",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NB: {
      name: "New Brunswick",
      description: "Support centers: Fredericton, Moncton, Saint John, Bathurst",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    PE: {
      name: "Prince Edward Island",
      description: "Support centers: Charlottetown, Summerside, Stratford",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NS: {
      name: "Nova Scotia",
      description: "Support centers: Halifax, Sydney, Dartmouth, Truro",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NL: {
      name: "Newfoundland",
      description: "Support centers: St. John's, Corner Brook, Gander",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NU: {
      name: "Nunavut",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NT: {
      name: "Northwest Territories",
      description: "Support centers: Yellowknife, Hay River, Inuvik",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    YT: {
      name: "Yukon",
      description: "Support centers: Whitehorse, Dawson City",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
    "0": { name: "Toronto", lat: 43.653226, lng: -79.3831843, color: "#FF0000" },
    "1": { name: "Ottawa", lat: 45.4215, lng: -75.6972, color: "#FF0000" },
    "2": { name: "Hamilton", lat: 43.2557, lng: -79.8711, color: "#FF0000" },
    "3": { name: "London", lat: 42.9834, lng: -81.233, color: "#FF0000" },
    "4": { name: "Calgary", lat: 51.0447, lng: -114.0719, color: "#00FF00" },
    "5": { name: "Edmonton", lat: 53.5461, lng: -113.4938, color: "#00FF00" },
    "6": { name: "Vancouver", lat: 49.2827, lng: -123.1207, color: "#00FF00" },
    "7": { name: "Victoria", lat: 48.4284, lng: -123.3656, color: "#00FF00" },
    "8": { name: "Montreal", lat: 45.5017, lng: -73.5673, color: "#0000FF" },
    "9": { name: "Quebec City", lat: 46.8139, lng: -71.2082, color: "#0000FF" },
    "10": { name: "Laval", lat: 45.5774, lng: -73.7123, color: "#0000FF" },
    "11": { name: "Saskatoon", lat: 52.1332, lng: -106.6700, color: "#FFFF00" },
    "12": { name: "Regina", lat: 50.4454, lng: -104.6189, color: "#FFFF00" },
    "13": { name: "Winnipeg", lat: 49.8951, lng: -97.1384, color: "#FFFF00" },
    "14": { name: "Fredericton", lat: 45.9636, lng: -66.6431, color: "#FF00FF" },
    "15": { name: "Moncton", lat: 46.0878, lng: -64.7782, color: "#FF00FF" },
    "16": { name: "Saint John", lat: 45.2733, lng: -66.0633, color: "#FF00FF" },
    "17": { name: "Halifax", lat: 44.6488625, lng: -63.5753196, color: "#00FFFF" },
    "18": { name: "Charlottetown", lat: 46.2382, lng: -63.1311, color: "#00FFFF" },
    "19": { name: "St. John's", lat: 47.5615, lng: -52.7126, color: "#FF8000" },
    "20": { name: "Yellowknife", lat: 62.4540, lng: -114.3718, color: "#FF8000" },
    "21": { name: "Whitehorse", lat: 60.7212, lng: -135.0568, color: "#FF8000" }
  },
  labels: {
    PE: {
      x: 960,
      y: 814,
      parent_id: "PE",
      pill: "yes",
      width: 65,
      display: "all"
    },
    NS: {
      x: 960,
      y: 854,
      parent_id: "NS",
      pill: "yes",
      width: 65,
      display: "all"
    },
    AB: {
      x: 232,
      y: 657,
      parent_id: "AB"
    },
    BC: {
      x: 117,
      y: 635,
      parent_id: "BC"
    },
    YT: {
      x: 75,
      y: 440,
      parent_id: "YT"
    },
    NT: {
      x: 225,
      y: 471,
      parent_id: "NT"
    },
    NU: {
      x: 429,
      y: 478,
      parent_id: "NU"
    },
    SK: {
      x: 332,
      y: 670,
      parent_id: "SK"
    },
    MB: {
      x: 430,
      y: 675,
      parent_id: "MB"
    },
    NL: {
      x: 840,
      y: 643,
      parent_id: "NL"
    },
    NB: {
      x: 837,
      y: 798,
      parent_id: "NB"
    },
    ON: {
      x: 552,
      y: 747,
      parent_id: "ON"
    },
    QC: {
      x: 718,
      y: 704,
      parent_id: "QC"
    }
  }
};
