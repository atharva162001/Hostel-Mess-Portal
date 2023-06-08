import Paymoney from '../../components/payment/Paymoney'

const CheckoutPage = () => {
  return (
    <div className='xl:p-20 p-10'>
      <div className=' flex-wrap justify-center'>
        <div className='flex-wrap justify-center '>
        <div className="tablebody">
        <div className="table-title justify-center mx-auto my-8">
          <div className="text-center xl:text-xl text-xl font-bold">Charges Distribution</div>
        </div>
        <table className="table-fill w-full">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">Month</th>
              <th className="text-left py-2 px-4">Sales</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left py-2 px-4">JMC Charges</td>
              <td className="text-left py-2 px-4"> Rs. 1500</td>
            </tr>
            <tr>
              <td className="text-left py-2 px-4">Breakfast Charge</td>
              <td className="text-left py-2 px-4">Rs. 40</td>
            </tr>
            <tr>
              <td className="text-left py-2 px-4">Lunch Charge</td>
              <td className="text-left py-2 px-4">Rs. 60</td>
            </tr>
            <tr>
              <td className="text-left py-2 px-4">Dinner Charge</td>
              <td className="text-left py-2 px-4">Rs. 60</td>
            </tr>
            <tr>
              <td className="text-left py-2 px-4">Sunday Lunch Charge</td>
              <td className="text-left py-2 px-4">Rs. 100</td>
            </tr>
            <tr>
              <td className="text-left py-2 px-4">Non-Veg Charge</td>
              <td className="text-left py-2 px-4">Rs. 40 per piece</td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
        <Paymoney />
      </div>
    </div>
  );
};

export default CheckoutPage;