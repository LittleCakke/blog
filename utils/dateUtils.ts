import type { CalendarDate, Week } from "~/type";

export const dateUtils = {
    WEEK: {
        Mon: 0,
        Tue: 1,
        Wed: 2,
        Thu: 3,
        Fri: 4,
        Sat: 5,
        Sun: 6
    },

    offset()
    {
        let today = new Date().toLocaleDateString();
        let lastIndexOfSlash = today.lastIndexOf("/");
        today = today.substring(0, lastIndexOfSlash);
        let timestamp = Date.parse(`${today}/1`);

        let week = new Date(timestamp).toString().split(" ")[0] as Week;
        return dateUtils.WEEK[week];
    },

    dayOfMonth()
    {
        let timestamp = Date.now();
        let date = new Date(timestamp).toLocaleDateString();
        let index = date.lastIndexOf("/");
        date = date.substring(0, index);
        let dateArr = date.split("/");
        let year = Number(dateArr[0]);
        let month = Number(dateArr[1]);

        switch (month)
        {
            case 1:
                return 31;
            case 2:
            {
                if (year % 400 == 0)
                    return 29;
                else if (year % 4 == 0 && year % 100 != 0)
                    return 29;
                else
                    return 28;
            }
            case 3:
                return 31;
            case 4:
                return 30;
            case 5:
                return 31;
            case 6:
                return 30;
            case 7:
                return 31;
            case 8:
                return 31;
            case 9:
                return 30;
            case 10:
                return 31;
            case 11:
                return 30;
            case 12:
                return 31;
            default:
                return 0;
        }
    },

    generateCalendar()
    {
        let offset = dateUtils.offset();
        let dayOfMonth = dateUtils.dayOfMonth();
        let length = offset + dayOfMonth;

        let calendar: CalendarDate[] = [];
        let count = 1;
        let today = new Date().getDate();
        for (let i = 0; i < ((length <= 35) ? 35 : 42); i++)
        {
            let date: CalendarDate = {}
            let condition = i < offset || i > (length - 1);

            if (!condition)
            {
                date.isToday = today == count;
                date.date = count++;
            }
            calendar.push(date);
        }

        return calendar;
    }
}
