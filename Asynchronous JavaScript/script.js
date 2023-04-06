const admissionStatus = true;

let candidateActivity;
let studentActivity;
let admissionStatusResponse;
let candidateActivityResponse;
let studentActivityResponse;

const candidateActivities = [
    "Check your admission status",
    "While waiting to know your admission status, explore the courses taught in our college",
    "Congratulations, you have been admitted"
]

const studentActivities = [
    "The first two weeks of resumption is for orientation",
    "Exam starts on 5th of September, 2031",
    "First semester ends today, second semester starts in three weeks"
]

const errorMessages = [
    "You have not been admitted",
    "You have no application record with our college"
]

const setResponseTime = (activity, seconds) => {
    return new Promise.resolve(
        setTimeout( 
            () => { 
                console.log(activity)
        }, seconds )
    )
}


const candidateStatus = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (admissionStatus) {
                            resolve(candidateActivities[2])
                    } else {
                        reject(new Error(errorMessages[0]))
                    }
        }, 7000)
    })
}


const studentTimeline =  async function() {

    candidateActivity = candidateActivities[0]
    console.log(candidateActivity)

    try{

        admissionStatusResponse =  await candidateStatus();
        console.log(admissionStatusResponse);
        

        studentActivity = studentActivities[0]
        studentActivityResponse = await setResponseTime(studentActivity, 2000);
        console.log(studentActivity)

        studentActivity = studentActivities[1]
        studentActivityResponse = await setResponseTime(studentActivity, 4000);
        console.log(studentActivityResponse)

        studentActivity = studentActivities[2]
        studentActivityResponse = await setResponseTime(studentActivity, 2000)
        console.log(studentActivityResponse)

    } catch(error) {
        if (!candidateStatus) {
            console.log(errorMessages[1])
        }
        
    } finally {
        console.log("the finally method will always run")
    }
}

studentTimeline()