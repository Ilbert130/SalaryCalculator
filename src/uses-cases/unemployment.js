





//Calculating the days by Years
const daysByYears = (dailySalary, year) => {

    if(year>=1 && year<=4){
        return (dailySalary*21)*year;

    }else if(year>=5){
        return (dailySalary*23)*year;
    }
}