const randomApi = 'https://randomuser.me/api';

const fetchDataFromApi = async () => {
  try {
    const response = await fetch(randomApi);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchDataFromApi();
