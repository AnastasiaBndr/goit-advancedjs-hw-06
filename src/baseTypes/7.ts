/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays{
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURTHDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

function isWeekend(day:Weekdays):boolean {
  if (day === Weekdays.SATURDAY || day === Weekdays.SUNDAY)
    return true;
  else return false;
    
}