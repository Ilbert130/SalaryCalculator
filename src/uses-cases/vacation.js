
//determining the vacation bonus
export const vacation = (dailySalary, year = 0) => {

    if(year >=1 && year <= 4){
        return 14 * dailySalary;

    }else if(year >= 5){
        return 18 * dailySalary;
    }

    return 0;
}