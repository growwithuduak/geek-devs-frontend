import fetch from 'node-fetch'

fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1003')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))