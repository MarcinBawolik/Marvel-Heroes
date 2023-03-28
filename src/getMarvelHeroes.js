const apiUrl =
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c9c66cd41a4ffadaea8ff2118100b9fe&hash=175b9ff0950e6daa03cdddb9924e7189";

export async function getMarvelHeroes() {
  try {
    const response = await fetch(`${apiUrl}`);
    if (!response.ok) {
      throw new Error("Wystąpił błąd podczas pobierania postaci.");
    }
    const data = await response.json();
    const heroesArray = data.data.results;
    return heroesArray;
  } catch (error) {
    console.error(error);
  }
}
