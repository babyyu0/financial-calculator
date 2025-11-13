function SavingsCalculatorTable({ savings, taxArr }) {
  return (
    <div className="saving-table">
      <div>월 이자 : (월 납입금) * (연 이율 / 12) * (개월 수)</div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>회차</th>
            <th>누적 납입금</th>
            <th>누적 이자</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          {taxArr.map((tax, index) => {
            return (
              <tr>
                <td><span class="badge rounded-pill bg-secondary">{index + 1}</span></td>
                <td>{(savings * (index + 1)).toLocaleString()}</td>
                <td>{tax.toLocaleString()}</td>
                <td>{(savings * (index + 1) + tax).toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SavingsCalculatorTable;
