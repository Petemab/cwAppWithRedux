

export function findAge(dob){
  const now = Date.now();
  const splitDob = dob.split('/');
  // console.log('splitDob ---->', splitDob);
  const aDate = new Date(splitDob[2], splitDob[1] -1, splitDob[0]);
  // console.log('new date', aDate);
  const timeBetween = now - aDate.getTime();
  // console.log(timeBetween);
  const age = Math.floor(timeBetween / 1000 / 60 / 60 / 24 / 365);
  return age;
}


function isLeap(year) {
  if (year % 100 === 0 && year % 100 === 0 && year % 4 === 0) {
    console.log('true! is a leap year');
    return true;
  } else {
    console.log('False! is not a leap year');
    return false;
  }
}

function monthLength(month, year){
  if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
    return 31;
  } else if (month === 3 || month === 5 || month === 8 ){
    return 30;
  } else if (month === 1 && isLeap(year) === true){
    return 29;
  } else {
    return 28;
  }
}

export function untilNextBirthday(dob, name){
  const now = new Date;
  const birthday = new Date;
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDay = now.getDate();
  // console.log('nowYear --->', nowYear);
  // console.log('nowMonth --->', nowMonth);
  // console.log('nowDay --->', nowDay);
  const splitDob = dob.split('/');
  const splitMonth = splitDob[1] -1;
  birthday.setDate(splitDob[0]);
  birthday.setMonth(splitMonth);
  if (birthday < now) {
    birthday.setFullYear(birthday.getFullYear()+1);
  }
  console.log(`${name}'s birthday is`, birthday);
  let bDayMonth = birthday.getMonth();
  let bDayDay = birthday.getDate();
  let bDayYear = birthday.getFullYear();
  // console.log(bDayMonth, bDayDay, bDayYear);
  const daysToEndOfThisMonth = monthLength(nowMonth,nowYear) - nowDay;
  // console.log(daysToEndOfThisMonth);
  if (bDayDay - nowDay < 0) {
    bDayMonth = bDayMonth - 1;
    bDayDay = bDayDay + monthLength(bDayMonth,bDayYear);
  }
  let daysDiff = bDayDay - nowDay;
  // console.log('daysDiff', daysDiff);
  if(bDayMonth - nowMonth < 0) {
    bDayYear = bDayYear - 1;
    bDayMonth = bDayMonth + 12;
  }
  let monthDiff = bDayMonth - nowMonth;
  // console.log('monthDiff', monthDiff);

  if (daysDiff === monthLength(bDayMonth,bDayYear)){
    daysDiff = 0;
    monthDiff = monthDiff + 1;
  }

  if (monthDiff === 12) {
    monthDiff = 0;
    // yearDiff = yearDiff + 1;
  }
  if ((daysToEndOfThisMonth !== monthLength(nowMonth,nowYear))
      &&(bDayDay - 1 === monthLength(bDayMonth,bDayYear))){
    daysDiff = daysToEndOfThisMonth;
  }

  console.log('this many months', monthDiff, 'this many days', daysDiff);
  if (monthDiff === 1 && daysDiff === 1){
    return  `${monthDiff} month and ${daysDiff} day until next birthday`;
  } else if (monthDiff === 1 && daysDiff >= 1){
    return `${monthDiff} month and ${daysDiff} days until next birthday`;
  } else if (monthDiff > 1 && daysDiff === 1){
    return `${monthDiff} months and ${daysDiff} day until next birthday`;
  } else {
    return `${monthDiff} months and ${daysDiff} days until next birthday`;
  }


}
