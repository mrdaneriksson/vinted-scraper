export interface Item {
    id: string;
    name: string;
    price: number;
    link: string;
    imageUrl: string;
}

export interface ScraperOptions {
    maxItems?: number;
    delayBetweenRequests?: number;
}