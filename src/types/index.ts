export interface Item {
  id: string;
  name: string;
  link: string;
  imageUrl: string;
  title: string;
  price: number;
}

export interface ScraperOptions {
    maxItems?: number;
    delayBetweenRequests?: number;
}