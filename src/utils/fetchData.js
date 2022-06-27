export  const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'159cb5e053msh672957000ceedfcp172c5cjsn3c838498df74',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '159cb5e053msh672957000ceedfcp172c5cjsn3c838498df74',
  },
};

export const fetchData = async (url,  options) => {
  const response = await fetch (url, options)
  const data = await response.json()

  return data
}