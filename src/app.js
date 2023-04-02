

//This is the main method
export const app = (elementClass) => {

    //references to the DOM
    const conteiner = document.querySelector(elementClass);
    const formResult = document.querySelector('.myForm');

    //Event to get data from the form
    formResult.addEventListener('submit', e => {
        e.preventDefault();

        //Getting the data from the form
        const {salary, year, actualYearMonths, month, kindSalary} = Object.fromEntries(
            new FormData(e.target)
        );

    });
}