import Head from "next/head";
// import { Fragment } from "react";

// let numberFormatter = new Intl.NumberFormat(undefined, {
// 	style: "curently",
// 	currency: "Eur",
// });

interface Item {
	description: string;
	units: number;
	price: number;
	vat: number;
}

interface Invoice {
	items: Item[];
}

function total(items: Invoice["items"]) {
	return items.reduce((sum, item) => sum + item.price * item.units, 0);
}

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
			{ id: 4, description: "Line item #4", units: 2, price: 10034, vat: 0.71 },
		],
	};

	let vats = Object.entries(
		data.items.reduce((grouped, item) => {
			grouped[item.vat] ??= { total: 0, vat: item.vat };
			grouped[item.vat].total += item.price * item.units * item.vat;
			return grouped;
		}, {})
	);

	return (
		<div className=' '>
			<div className='bg-white page shadow rounded-lg overflow-hidden space-y-8'>
				<header className='bg-blue-800 p-12'>
					<div>
						<h1 className='text-3xl'>{data.me.name}</h1>
						<div className='bg-blue-800 bg-opacity-75 w-full h-4'></div>
					</div>
				</header>

				<div className='p-6 flex justify-between'>
					<span className='text-2xl space-x-3'>
						<span>
							<span className='text-blue-800 font-semibold uppercase'>
								Invoice
							</span>
							<span className='text-blue-300'>.</span>
						</span>
						<span className='text-gray-300'> /</span>
						<span className='text-gray-500'> {data.number}</span>
					</span>
					<div className='space-2 '>
						<h3>Client</h3>
						<span>{data.client.name}</span>
					</div>
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
							<th className='border-b-2 px-6 py-3 text-right text-xs font-medium text-gray-500'>
								VATT
							</th>
							<th className='border-b-2 px-6 py-3 text-right text-xs font-medium text-gray-500'>
								Subtotal (Excl. VAT)
							</th>
							{/* <th className='border-b-2 px-6 py-3 text-right text-xs font-medium text-gray-500'>
								Subtotal (INcl. VAT)
							</th> */}
						</tr>
					</thead>
					<tbody className=''>
						{data.items.map((item, lineIdx) => (
							<tr
								key={item.id}
								className={lineIdx % 3 === 0 ? "bg-white border-b-2" : ""}>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
									{item.description}
								</td>
								<td className='px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500'>
									{item.units}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500  text-right tabular-nums'>
									{/* {numberFormatter.format(item.price / 100)} */}
									{item.price}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right'>
									{(item.vat * 100).toFixed(0)}%
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right tabular-nums'>
									{item.price * item.units}
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						{vats.map(([vat, total]) => (
							<tr key={vat}>
								<th
									className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right'
									colSpan={4}>
									VAt({vat * 100}%)
								</th>
								<th className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right tabular-nums'>
									{data.items.reduce(
										(sum, item) => sum * item.price * item.units,
										0
									) / 100}
								</th>
							</tr>
						))}
						<tr>
							<th
								className='px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right'
								colSpan={4}>
								Total
							</th>
							<th className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right tabular-nums'>
								{data.items.reduce(
									(sum, item) => sum * item.price * item.units,
									0
								) / 100}
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}
