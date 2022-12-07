import React from 'react'
import Layout from './components/layout/layout'

const login = () => {
	return (
		<div>
			<Layout>
			<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex ">
				<div className="p-8 text-center">
					{/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div> */}
					<h1>Login</h1>
				</div>
				</div>
			</div>
			</Layout>
		</div>
	)
}

export default login
