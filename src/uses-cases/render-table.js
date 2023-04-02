

//Creating the method to render the table with the result
export const renderTable = (christmasBonus = 0, notice = 0, unemployment = 0, vacation = 0) => {

    const total =notice+unemployment+christmasBonus+vacation;
  
    return `<table class="table table-bordered">
      <thead>
        <tr>
          <th colspan="2" class="center">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Notice</th>
          <td>${currencyFormatter({currency: 'USD', value:notice})}</td>
        </tr>
        <tr>
          <th scope="row">Unemployment</th>
          <td>${currencyFormatter({currency: 'USD', value:unemployment})}</td>
        </tr>
        <tr>
          <th scope="row">Christmas Bonus</th>
          <td>${currencyFormatter({currency: 'USD', value:christmasBonus})}</td>
        </tr>
        <tr>
          <th scope="row">Vacation</th>
          <td>${currencyFormatter({currency: 'USD', value:vacation})}</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>${currencyFormatter({currency: 'USD', value:total})}</td>
        </tr>
      </tbody>
    </table>`;
}

//Creating money format
const currencyFormatter = ({ currency, value}) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      minimumFractionDigits: 2,
      currency
    });
    return formatter.format(value)
}