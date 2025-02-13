import { VintedScraper } from './scraper';
import * as fs from 'fs';

const scraper = new VintedScraper('https://www.vinted.se');
scraper.fetchNewItems().then(items => {
  fs.writeFileSync('scraped_data.json', JSON.stringify(items, null, 2));
});