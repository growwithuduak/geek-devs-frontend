async function fetchMultipleUrls(urls) {
 
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
   
    const getData = await Promise.all(responses.map(response => response.json()));
    console.log(data);
    
  } catch (error) {
    console.error('Error fetching data');
  }
}

const urls = ['https://google.com/data1', 'https://udemy.com/data2', 'https://karus.com/data3'];
fetchMultipleUrls(urls);
