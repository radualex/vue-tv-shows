export function mapDataArray(data) {
  let mappedResult = [];
  data.map((item) => mappedResult.push(mapShowItem(item.show)));
  return mappedResult;
}

export function filterOnRating(data) {
  return data
    .filter((item) => item.show.rating.average !== null)
    .sort((a, b) => b.show.rating.average - a.show.rating.average);
}

export function mapShowItem(item) {
  console.log(item);
  return {
    id: item.id,
    show: item.name,
    network: (item.network || {}).name,
    genres: item.genres,
    releaseDate: item.premiered,
    rating: item.rating.average,
    summary: item.summary,
    image: (item.image || {}).medium,
  };
}
