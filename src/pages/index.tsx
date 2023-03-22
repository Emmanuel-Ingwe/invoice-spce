import Head from "next/head";

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
			{ description: "Line item #1", price: 1234, vat: 0.21 },
			{ description: "Line item #2", price: 43321, vat: 0.14 },
			{ description: "Line item #3", units: 0, price: 2134, vat: 0.31 },
		],
	};

	return (
		<div className='text-6xl'>
			<div className='bg-white page shadow p-12'>
				<header>
					<h1>{data.me.name}</h1>
				</header>

				<div>
					<span>Invoice {data.number}</span>
				</div>
			</div>
		</div>
	);
}
