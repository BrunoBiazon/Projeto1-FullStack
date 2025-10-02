
export async function searchFood(query) {
  const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1`;
  const response = await fetch(url);
  const data = await response.json();
  // filtragem de dados
  if (!data.products) return [];
  return data.products.map(product => ({
    food_id: product.id || product._id || product.code,
    food_name: product.product_name || 'Sem nome',
    //food_description: product.generic_name || product.categories || 'Sem descrição', não utilizei, pois as descrições da API ruins. 
    calories: product.nutriments && product.nutriments['energy-kcal_100g'] ? product.nutriments['energy-kcal_100g'] : 'N/A',
    nutriments: product.nutriments || {}
  }));
}
