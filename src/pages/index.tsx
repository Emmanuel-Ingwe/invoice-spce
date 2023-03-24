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

				<table className='block '>
					<thead className=''>
						<tr>
							<th className='border-b-2 border-none-slate-600 pr-9 ...'>
								Name
							</th>
							<th className='border-b-2 border-none-slate-600 pr-9 ...'>
								Title
							</th>
							<th className='border-b-2 border-none-slate-600 pr-9 ...'>
								Email
							</th>
							<th className='border-b-2 border-none-slate-600 pr-9 ...'>
								Role
							</th>
						</tr>
					</thead>
					<tbody className=''>
						<tr>
							<td className='border-none border-none-slate-700 ...'>Indiana</td>
							<td className='border-none border-none-slate-700 ...'>
								Indianapolis
							</td>
							<td>jane455@gmail.com</td>
							<td>Amin</td>
						</tr>
						<tr>
							<td className='border-none border-none-slate-700 ...'>Ohio</td>
							<td className='border-none border-none-slate-700 ...'>
								Columbus
							</td>
							<td>okon.com@yahoomail</td>
							<td>Owner</td>
						</tr>
						<tr>
							<td className='border-none border-none-slate-700 ...'>
								Michigan
							</td>
							<td className='border-none border-none-slate-700 ...'>Detroit</td>
						</tr>
					</tbody>
				</table>

				<div className='px-12'>
					<table className='w-full border mx-12 '>
						<thead>
							<tr className='font-bold text-left'>
								<th>Description</th>
								<th>#</th>
								<th>Unit price</th>
								<th>VAT</th>
								<th>Subtotal</th>
							</tr>
						</thead>

						<tbody>
							{data.items.map((item) => (
								<tr key={item.id}>
									<td>{item.description}</td>
									<td>{item.units}</td>
									<td>{item.price}</td>
									<td>{item.vat}</td>
									<td>{item.units * item.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
