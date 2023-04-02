
//determining the christmas bonus
export const christmasBonus = (salary, actualYearMonths = 0) => {

    if(actualYearMonths !==0){
        return Math.round(actualYearMonths * salary / 12);
    }

    return Math.round(12 * salary /12);
}