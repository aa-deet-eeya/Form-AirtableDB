let picker1 = new Pikaday({
      field: document.getElementById('datepicker1') ,
      format: 'DD MMM YYYY',
      toString(date, format) {
            const day = (date.getDate() >10 ) ? date.getDate() : `0${date.getDate()}`  
            const month = (date.getMonth() >10) ? date.getMonth() : `0${date.getMonth()}` 
            const year = date.getFullYear()
            return `${year}-${month}-${day}`
        },
})
let picker2 = new Pikaday({ 
      field: document.getElementById('datepicker2') ,
      format: 'DD MMM YYYY',
      toString(date, format) {
            const day = (date.getDate() >10 ) ? date.getDate() : `0${date.getDate()}`  
            const month = (date.getMonth() >10) ? date.getMonth() : `0${date.getMonth()}` 
            const year = date.getFullYear()
            return `${year}-${month}-${day}`
        },
})