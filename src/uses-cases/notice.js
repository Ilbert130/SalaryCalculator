
//Calculating the notice
export const notice = (dailySalary, year = 0, month=0) => {

    if(month>=3 && month<=5 && year===0){
        return dailySalary * 7;

    }else if(month>=6 && month<=11 && year === 0){
        return dailySalary * 14;

    }else if( year>=1){
        return dailySalary * 28;
    }
}