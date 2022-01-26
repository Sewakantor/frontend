import React from 'react';
import toRupiah from '@develoka/angka-rupiah-js';

export default function TableHistory({data}) {
    console.log(data);
    const convertDate = (data) => {
        let date = new Date(data);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (dt+'/' + month + '/'+year)
    }
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                    Name
                    </th>
                    <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                    Start Date
                    </th>
                    <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                    End Date
                    </th>
                    <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                    Status
                    </th>
                    <th className="pb-8 text-sm text-body text-center text-opacity-40 font-heading font-semibold uppercase">
                    Total Price
                    </th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td className="p-0">
                    <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                        <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h4 className="font-heading font-medium leading-4">
                            {data.unit.name}
                            </h4>
                        </div>
                        </div>
                    </div>
                </td>
                <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                        <span className="font-heading text-darkBlueGray-400">
                        {convertDate(data.check_in_date)}
                        </span>
                    </div>
                </td>
                <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                        <span className="font-heading text-darkBlueGray-400">
                        {convertDate(data.check_out_date)}
                        </span>
                    </div>
                </td>
                <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                        <span className="py-1 px-3 text-sm text-green-900 font-medium bg-red-200 rounded-full">
                        {data.status}
                        </span>
                    </div>
                </td>
                <td className="p-0">
                    <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                        {toRupiah(data.price, {symbol: 'IDR', floatingPoint: 0})}
                    </div>
                </td>
            </tr>
        </tbody>
        </table>
    )
}
