import '@testing-library/react/jest-dom'
// import * as React from 'react'
import { render } from '@testing-library/react'
import {Home} from '../src/pages/Home'
 
describe('App', () => {
  it('renders App component', () => {
    render(<Home/>)
    expect(screen.getByText('MKS')).toBeInTheDocument()
  })
  
})

