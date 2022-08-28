const getWeekDay = (d) => {
    if (d)
    {
        const weekday = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
        
        const date = new Date(d);
        return weekday[date.getDay()];
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


export { replaceDots, getWeekDay };