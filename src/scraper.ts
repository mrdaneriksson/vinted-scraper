import axios from 'axios';
import cheerio from 'cheerio';
import { Item } from './types';

export class VintedScraper {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public async fetchNewItems(): Promise<Item[]> {
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
    const items: Item[] = [];

    $('.item').each((_: number, element: cheerio.Element) => {
        const title: string = $(element).find('.item-title').text().trim();
        const price: number = parseFloat($(element).find('.item-price').text().trim().replace(/[^\d.-]/g, ''));
        const id = ''; // Add logic to extract id
        const name = title;
        const link = ''; // Add logic to extract link
        const imageUrl = ''; // Add logic to extract imageUrl
        items.push({ id, name, link, imageUrl, title, price });
    });

    return items;
  }
}