const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wdnesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}


try {
    document.getElementById('day').innerText = dayOfTheWeek();
} catch(err) {}


const _dayOfTheWeek = dayOfTheWeek;
export { _dayOfTheWeek as dayOfTheWeek };