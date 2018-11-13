import * as utils from './utils'
import * as fc from 'fast-check'

describe('given utils.flatten', () => {
  it('property of as == flatten(as.map(a => [a]))', ()=>
    fc.assert(fc.property(fc.array(fc.anything()), (as) => {expect(utils.flatten(as.map(x=>[x]))).toEqual(as)}))
  )
})