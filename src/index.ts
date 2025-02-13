import { VintedScraper } from './scraper';

const scraper = new VintedScraper();

async function main() {
    try {
        const newItems = await scraper.fetchNewItems();
        console.log('New items found:');
        newItems.forEach(item => {
            console.log(`${item.name} - ${item.price}`);
        });
    } catch (error) {
        console.error('Error fetching new items:', error);
    }
}

main();