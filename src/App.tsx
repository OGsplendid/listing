// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import './App.css'
import { Listing } from './components/Listing/Listing'
import * as etsy from './components/etsy.json'

// const str = 'default' as string;

function App() {
  console.log(etsy)
  const data = etsy['default'];

  return (
    <>
      <Listing items={data} />
    </>
  )
}

export default App
