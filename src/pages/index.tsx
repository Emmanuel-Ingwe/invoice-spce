import Head from "next/head";
import { Fragment } from "react";

export default function Invoice() {
	let data = {
		number: "0008",
		me: {
			name: (
				<span className='space-x-1  font-bold text-white'>
					<span className='font-bold'>Dre_vil</span>
					<span className='font-normal'>Aids</span>
				</span>
			),
			address: "Example street, 9000 Ghent",
		},
		client: {
			name: "Acme Inc.",
			addresss: "Other street, 2000 Antwerp",
		},

		dates: {
			issue: new Date(),
		},

		items: [
			{ id: 1, description: "Line item #1", units: 1, price: 1234, vat: 0.21 },
			{ id: 2, description: "Line item #2", units: 3, price: 43321, vat: 0.14 },
			{ id: 3, description: "Line item #3", units: 0, price: 2134, vat: 0.31 },
		],
	};

	return (
		<div className=' '>
			<div className='bg-white page shadow rounded-lg overflow-hidden space-y-8'>
				<header className='bg-blue-800 p-12'>
					<div>
						<h1 className='text-3xl'>{data.me.name}</h1>
						<div className='bg-blue-800 bg-opacity-75 w-full h-4'></div>
					</div>
				</header>

				<div className='p-6'>
					<span className='text-2xl'>
						<span>
							<span className='text-blue-800 font-semibold uppercase'>
								Invoice
							</span>
							<span className='text-blue-300'>.</span>
						</span>
						<span className='text-gray-500'> /</span>
						<span className='text-gray-500'> {data.number}</span>
					</span>
				</div>

				<table className=' w-full'>
					<thead className=''>
						<tr className=' text-gray-400'>
							<th className='uppercase border-b-2 border-none-slate-600 pl-5 text-left ...'>
								Description
							</th>
							<th className='border-b-2 border-none-slate-600 pr-9 text-left...'>
								#
							</th>
							<th className='border-b-2 border-none-slate-600 pr-9 text-left...'>
								UNIT PRICE
							</th>
							<th className='border-b-2 border-none-slate-600 pr-9 text-left...'>
								VAT
							</th>
						</tr>
					</thead>
					<tbody className=''>
						{data.items.map((item, lineIdx) => (
							<tr key={item.id} className={lineIdx % 2 === 0 ? "bg-white" : ""}>
								<td className='border-none border-none-slate-700 pl-5 ...'>
									{item.description}
								</td>
								<td className='pl-9 border-none border-none-slate-700 ...'>
									{item.units}
								</td>
								<td className='pl-9'>{item.price}</td>
								<td className='pl-4'>{item.vat}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
