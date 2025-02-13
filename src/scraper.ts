class VintedScraper {
    constructor(private baseUrl: string) {}

    async fetchNewItems(): Promise<Item[]> {
        const response = await fetch(`${this.baseUrl}/new-items`);
        const data = await response.json();
        return this.parseItems(data);
    }

    parseItems(data: any): Item[] {
        return data.items.map((item: any) => ({
            name: item.title,
            price: item.price,
        }));
    }
}

export default VintedScraper;