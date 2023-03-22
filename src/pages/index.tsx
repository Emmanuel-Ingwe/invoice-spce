import Head from "next/head";
import { Fragment } from "react";

export default function Invoice() {
	let data = {
		number: "0008",
		me: {
			name: "Company name",
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
		<div className='text-1xl'>
			<div className='bg-white page shadow p-12'>
				<header>
					<h1 className='text-3xl font-bold text-blue-800'>{data.me.name}</h1>
				</header>

				<div>
					<span className='text-2xl'>
						<span className='text-blue-800 font-semibold uppercase'>
							Invoice
						</span>
						<span className='text-blue-300'>.</span>
						<span className='text-gray-500'> / {data.number}</span>
					</span>
				</div>

				<div className='grid grid-cols-5'>
					<div className='font-bold'>Description</div>
					<div className='font-bold'>#</div>
					<div className='font-bold'>Unit price</div>
					<div className='font-bold'>VAT</div>
					<div className='font-bold'>Subtotal</div>

					{data.items.map((item) => (
						<Fragment key={item.id}>
							<div>{item.description}</div>
							<div>{item.units}</div>
							<div>{item.price}</div>
							<div>{item.vat}</div>
							<div>{item.units * item.price}</div>
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
}
