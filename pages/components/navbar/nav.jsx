import React from 'react'
import Link from 'next/link'

const nav = () => {
	return (
		<div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/admin">
				<a>Admin</a>
			</Link>
		</div>
	)
}

export default nav
