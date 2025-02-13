# Vinted Scraper

This project is a web scraper designed to fetch new items posted on Vinted (https://www.vinted.se) and list them along with their prices. 

## Project Structure

```
vinted-scraper
├── src
│   ├── index.ts          # Entry point of the application
│   ├── scraper.ts        # Contains the VintedScraper class for scraping
│   └── types
│       └── index.ts      # Type definitions for items and scraper options
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To start the scraper, run:

```
npm start
```

This will initialize the scraper and begin fetching new items from Vinted.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.