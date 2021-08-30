export default async function handler(req, res) {
  const response = await fetch(
    '"https://etalab.github.io/jours-feries-france-data/json/metropole.json";'
  );
  const data = await response.json();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
  return data;
}
