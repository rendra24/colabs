import React from 'react'
import { render } from '@testing-library/react'
import ReactTestUtils from 'react-dom/test-utils'; 
import '@testing-library/jest-dom/extend-expect'
import Button from './index'
import Alert from '../alert'

describe('Should not allow to click if disabled', () => {
 
    it('passing test', () => {
        expect(true).toBeTruthy();
      })
  })