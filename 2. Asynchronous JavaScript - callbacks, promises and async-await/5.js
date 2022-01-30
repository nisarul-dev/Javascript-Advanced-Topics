const hasMeeting = false;

const meeting = new Promise( (resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled!"));
    }
} );


meeting
    .then( (res) => {
        console.log(res);
    } )
    .catch( (err) => {
        console.log(err.message);
    } )


/*
    {
      name: 'Technical Meeting',
      location: 'Google Meet',
      time: '10:00 PM'
    }
*/
