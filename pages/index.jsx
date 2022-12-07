import React from 'react'
import { useRouter } from 'next/router'
import Layout from './components/layout/layout'
import useTranslation from "next-translate/useTranslation";


const Home = () => {
  let { t, lang } = useTranslation();
  
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex ">
          <div className="p-8 text-center">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{t('common:greeting')}</a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default Home