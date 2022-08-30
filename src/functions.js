const getWeekDay = (d, longFormat = true) => {
    if (d)
    {
        const weekday = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
        const weekdayShort = ["Nd","Pon","Wt","Śr","Czw","Pt","Sb"];
        
        const date = new Date(d);
        if (longFormat) return weekday[date.getDay()];
        else return weekdayShort[date.getDay()];
    }
    else return '';
};


const replaceDots = (temperature) => {
    if (temperature)
    {
        const temp = temperature.toString();
    
        if (temp.search('.') !== -1) return temp.replace('.', ',');
        return temp;
    }
    else return '';
};


const formatDate = (date) => {
    const month = date.substring(5, 7);
    const day = date.substring(8);

    return `${day}-${month}`;
};


const airQuality = (data) => {
    if (data < 51) return "dobra";
    if (data < 101) return "umiarkowana";
    if (data < 151) return "niezdrowa dla wyczulonych grup";
    if (data < 201) return "niezdrowa";
    if (data < 301) return "bardzo niezdrowa"
    return "niebezpieczna";
};


const convertTime = (time, today, timezone) => {
    if (time)
    {
        let date = `${today.substring(0, today.search(':'))} ${time} GMT`;
        const d = new Date(date);

        return d.toLocaleString("pl-PL", {timeZone: timezone, timeStyle: "short"});
    } else return '';
};


export { replaceDots, getWeekDay, formatDate, airQuality, convertTime };