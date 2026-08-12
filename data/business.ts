export const business = {
  name: "Black Hole Coffee House",
  legalName: "Black Hole Coffee House",
  category: "Coffee House",
  street: "4504 Graustark St",
  city: "Houston",
  state: "TX",
  zip: "77006",
  country: "United States",
  countryCode: "US",
  phoneDisplay: "+1 713-528-0653",
  phoneHref: "tel:+17135280653",
  rating: 4.3,
  reviewCount: 2408,
  get fullAddress() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}, ${this.country}`;
  },
  get mapsSearchUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${this.name} ${this.street} ${this.city} ${this.state} ${this.zip}`
    )}`;
  },
  get mapsEmbedUrl() {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      `${this.street}, ${this.city}, ${this.state} ${this.zip}`
    )}&output=embed`;
  },
};
