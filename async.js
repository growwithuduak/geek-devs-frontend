import fetch from 'node-fetch'

 const fetchEmployeeData = async() => {
    try{
        const res = await fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)
        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

fetchEmployeeData()