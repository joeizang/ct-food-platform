import Link from 'next/link'
import React from 'react'

const socials = [
  {
    url: 'https://www.x.com/thecourtyardOftruth/',
    fontIcon: 'bi-twitter-x',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-xl sm:text-xs lg:text-2xl bi'
  },
  {
    url: 'https://facebook.com/thecourtyard',
    fontIcon: 'bi-facebook',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-xl sm:text-xs lg:text-2xl bi'
  },
  {
    url: 'https://instagram.com/users/220413',
    fontIcon: 'bi-instagram',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-xl sm:text-xs lg:text-2xl bi'
  },
  {
    url: 'https://youtube.com/users/courtyardOfTruth',
    fontIcon: 'bi-youtube',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-xl sm:text-xs lg:text-2xl bi'
  }
]

export default function Footer () {
  return (
    <section className="flex justify-between bg-mountain-mist-500 min-h-32">
      <div className="p-5">
        <span className="md:text-sm text-seance-100"><i className="bi bi-c-circle-fill text-xs text-seance-200 mr-2"></i><small className="lg:text-2xl sm:text-xs tracking-tight">Courtyard Of Truth</small></span>
        <span className="ml-3 md:hidden">{new Date().getFullYear()}</span>
      </div>
      <div className="p-5 flex flex-col text-center"> 
        <ul className="flex gap-3">
          {
            socials.map((social, idx) => (
              <li key={`${social.fontIcon}-${idx}`} className="hover:text-seance-100">
                <a href={social.url} className={`${social.cssClass} ${social.fontIcon}`} target="_blank"></a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}