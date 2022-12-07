import React from 'react'
// import Link from 'next/link'
import Layout from './components/layout/layout'
import useTranslation from "next-translate/useTranslation";


const About = ({ children }) => {
	let { t } = useTranslation();


	return (
	<div>
		<Layout>
			<div className='text-center'>
				<h1 className='bold'>{t('about:title')}</h1>
				<p>{t("about:introduction", {
					name: 'Inbo',
					age: 31,
				})}</p>
			</div>
		</Layout>
	</div>
	)
}

export default About