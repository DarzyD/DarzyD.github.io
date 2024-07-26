import React from 'react'
import type {Brand} from './TechStackData'
import { programmingLanguages, tools } from './TechStackData'
type Size = 'small' | 'medium' | 'large';

interface SizeProps {
  [key: string]: string;
}

const width = { small: '18', medium: '30', large: '42' } as SizeProps;
const height = { small: '20', medium: '30', large: '40' } as SizeProps;

const TechStackPage = () => {
  return (
    <div className="pt-2 rounded-lg">
      
    </div>
  )
}

export default TechStackPage