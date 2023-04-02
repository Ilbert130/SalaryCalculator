
//determining the unemployment payment
export const unemployment = (dailySalary, year = 0, month=0) => {

    if(!year || year === 0){
        return daysByMonths(dailySalary, month);
    }

    return daysByYears(dailySalary, year) + daysByMonths(dailySalary, month);
}


//Calculating the days by Years
const daysByYears = (dailySalary, year) => {

    if(year>=1 && year<=4){
        return (dailySalary*21)*year;

    }else if(year>=5){
        return (dailySalary*23)*year;
    }
}

//Calculating the days by months
const daysByMonths = (dailySalary, month) => {

    if(month>=3 && month <=5){
        return  dailySalary * 6;

    }else if(month>=6 && month <=11){
        return dailySalary * 13;

    }else{
        return 0;
    }
}