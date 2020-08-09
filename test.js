const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  
  proffyValue = {
    name:"Albert Einstein",
    avatar:"https://tinyurl.com/y5oe26tx",
    whatsapp:"92981926618",
    bio:"Albert Einstein foi um físico teórico alemão."
  },

  classValue = {
    subject: 1,
    cost:"1000"
  },

  classSchedulesValues = [
    {
      weekday: 0,
      time_from: 600,
      time_to: 1800
    },
    {
      weekday: 1,
      time_from: 1600,
      time_to: 500
    },
  ]

 await createProffy(db, { proffyValue, classValue, classSchedulesValues })
    
    //Consult insert data

    // all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consult the determined teacher classes
    // and take him data to
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

        // the person schedule work, for example is 8h to 18h
        // the time_from schedule(8h) needs to be smallest or equal to the solicited schedule
        // the time_to needs to be above
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class-schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)

})