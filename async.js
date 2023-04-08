import fetch from 'node-fetch'

const URL = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'

 const fetchEmployeeData = async() => {
    try{
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}


fetchEmployeeData()