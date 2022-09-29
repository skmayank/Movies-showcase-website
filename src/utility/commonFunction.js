export const handleSearch = (moviesList, searchValue) => {

  if (searchValue !== '') {
    const filtred = moviesList.filter((d) => d.Title.toLowerCase().includes(searchValue.toLowerCase()));
    return filtred;
  } else {
    return moviesList;
  }

}