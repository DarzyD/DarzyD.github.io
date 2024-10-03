import React from 'react'
import Icons from '.././lib/components/Icons'
const Certifications = () => {
  return (
    <div className="pt-4 rounded-lg">
        <p className="font-normal pr-1">Certifications:</p>
        <div className="flex flex-wrap items-center">
            <a href="https://www.credly.com/badges/9ea4f359-ed2d-43e6-949f-1abdd765ec3e/public_url" target="_blank"> 
                <Icons size="h-40 w-40" src = 'assets/images/aws-certified-cloud-practitioner.png' alt = 'AWS Cloud Practioner Icon' />
            </a>
        </div>
    </div>
  )
}

export default Certifications