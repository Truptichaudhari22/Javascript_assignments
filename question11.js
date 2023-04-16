// Use the Date object to do the following activities


//     - What is the year today?

        const now = new Date();
        console.log(now.getFullYear());

//     - What is the month today as a number?
        console.log(now.getMonth());

//     - What is the date today?
        
        console.log(now);

//     - What is the day today as a number?
          console.log(now.getDay()); // Wedenssday as 3

//     - What is the hours now?
        console.log(now.getHours());  // 20 as cuurent hours 8PM

//     - What is the minutes now?
        console.log(now.getMinutes()); // 38 min as current minutes is 8:38 PM

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
        let getSecondsFromJanuary1970 = Date.now() / 1000;
    
        console.log(getSecondsFromJanuary1970); //  1681312494.24  as todays date is 12 April
        