import copy from './copy.json'

export const LANGUAGE = {
  SV: 'sv',
  DE: 'de'
}

export default ({language, copy: key, ...props}) => {
  return (copy[key][language])
} 