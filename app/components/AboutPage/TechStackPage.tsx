import React from 'react'
import Logo from './Logo'
import { programmingLanguages, tools } from './TechStackData'

const TechStackPage = () => {
  return (
    <div className="pt-4 rounded-lg">
      <h1 className="text-xl font-bold mb-2">Technical skills</h1>
      <div className="programming-language flex">
        <div className="flex flex-wrapitems-center">
          <p className="font-normal pr-1">Programming Languages:</p>
          {programmingLanguages.map((language, index) => (
              <Logo key={index} brand={language} />
          ))}
        </div>
      </div>
      <div className="mt-2 tech-stack flex">
        <div className="flex flex-wrap items-center">
          <p className="font-normal pr-1">Tools:</p>
          {tools.map((language, index) => (
              <Logo key={index} brand={language} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStackPage