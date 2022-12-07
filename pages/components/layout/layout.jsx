import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import classes from './layout.module.css'
import { useRouter } from 'next/router'

const layout = ({ children }) => {
	// const { asPath, locale, defaultLocale } = useRouter();
	// if (locale === defaultLocale) return asPath;
	// let router = useRouter()

	return (
		<div>
			<Head>
				<title>custom app</title>
				<link rel="icon" href="favicon.ico" />
			</Head>

			<header>
				<nav className="flex justify-center space-x-4">
					<Link href="/" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link>
					<Link href="/about" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</Link>
					<Link href="/admin" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Admin</Link>
					<Link href="/login" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</Link>
					{/* <a href="/projects" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
					<a href="/reports" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a> */}
				</nav>
			</header>

			<main>{children}</main>

			<footer className={classes.footer}>
				<p className='text-center'> copyright 2022 by inbo</p>

				<ul>
					{router.locales.map((locale) => (
						<li key={locale}>
							<Link href={router.asPath} locale={locale}>{locale}</Link>
						</li>
					))}
				</ul>
			</footer>
		</div>
	)
}

export default layout
