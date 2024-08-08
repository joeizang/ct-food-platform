import Link from 'next/link'
import React from 'react'

const socials = [
  {
    url: 'https://www.x.com/thecourtyardOftruth/',
    fontIcon: 'bi-twitter-x',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-2xl bi'
  },
  {
    url: 'https://facebook.com/thecourtyard',
    fontIcon: 'bi-facebook',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-2xl bi'
  },
  {
    url: 'https://stackoverflow.com/users/220413/joseph-izang',
    fontIcon: 'bi-instagram',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-2xl bi'
  },
  {
    url: 'https://youtube.com/users/courtyardOfTruth',
    fontIcon: 'bi-youtube',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-2xl bi'
  },
  {
    url: 'https://www.linkedin.com/in/joseph-izang-156b9449/',
    fontIcon: 'bi-linkedin',
    cssClass: 'hover:text-old-brick-400 hover:cursor-pointer text-2xl bi'
  }
]

export default function Footer () {
  return (
    <section className="text-stone-300 flex justify-between bg-mountain-mist-500 min-h-32">
      <div className="p-5">
        <span className="text-2xl text-seance-100"><i className="bi bi-c-circle-fill text-xs text-seance-200 mr-3"></i><small>Courtyard Of Truth</small></span>
        <span className="ml-5"><small>{new Date().getFullYear()}</small></span>
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
      <div className="mr-4 p-5">
        <span className="backToTop text-2xl hover:text-seance-200 hover:cursor-pointer bi bi-arrow-up-circle-fill"></span>
      </div>
    </section>
  )
}