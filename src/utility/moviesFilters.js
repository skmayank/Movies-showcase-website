export const handleSearch = (moviesList, searchValue) => {

  if (searchValue !== '') {
    const filtred = moviesList.filter((d) => d.Title.toLowerCase().includes(searchValue.toLowerCase()));
    return filtred;
  } else {
    return moviesList;
  }

}

export const getSelectedGener = () => {
  let path = window.location.href
  let index = path.lastIndexOf('/');
  return path.substring(index + 1);
}

export const handleChangeGener = (moviesList) => {
  let gener = getSelectedGener()
  return moviesList.filter(d => d.Genre.includes(gener))
}
