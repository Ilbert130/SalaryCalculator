import { christmasBonus } from "./uses-cases/christmas-bonus";
import { notice } from "./uses-cases/notice";
import { renderTable } from "./uses-cases/render-table";
import { unemployment } from "./uses-cases/unemployment";
import { vacation } from "./uses-cases/vacation";

//This is the main method
export const app = (elementClass) => {

    //references to the DOM
    const conteiner = document.querySelector(elementClass);
    const formResult = document.querySelector('.myForm');
    let noticeRes, unemploymentRes, christmasBonusRes, vacationRes;

    //Event to get data from the form
    formResult.addEventListener('submit', e => {
        e.preventDefault();

        //Getting the data from the form
        const {salary, year, actualYearMonths, month, kindSalary} = Object.fromEntries(
            new FormData(e.target)
        );

        const dailySalary = (kindSalary === 'Monthly') ? Math.round(salary/23.83) : Math.round(salary/11.91);

        christmasBonusRes = christmasBonus((kindSalary === 'Monthly') ? salary*1 : salary*2, actualYearMonths * 1);

        if((!year || year === '0') && month * 1 < 3){
            conteiner.innerHTML = renderTable(christmasBonusRes);
        }
        
        noticeRes = notice(dailySalary, year * 1, month * 1);
        unemploymentRes = unemployment(dailySalary, year * 1, month * 1);
        vacationRes= vacation(dailySalary, year * 1)

        conteiner.innerHTML = renderTable(christmasBonusRes, noticeRes, unemploymentRes, vacationRes);
    });
}