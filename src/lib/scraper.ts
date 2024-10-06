export const scrapeProducts = async (query: string) => {
  console.log('Scraping products...', query);

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      title: 'Sample Product 1',
      price: 99.99,
      store: 'Sample Store A',
    },
    {
      title: 'Sample Product 2',
      price: 149.99,
      store: 'Sample Store B',
    },
    {
      title: 'Sample Product 3',
      price: 79.99,
      store: 'Sample Store C',
    }
  ];
}