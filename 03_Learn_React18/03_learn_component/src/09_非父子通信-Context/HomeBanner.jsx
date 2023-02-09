import React from 'react'
import ThemContext from './context/ThemContext'

export default function HomeBanner() {
  return (
    <ThemContext.Consumer>
      {
        value => {
          return (
            <div>homebanner:color:{value.color}</div>
          )
        }
      }
    </ThemContext.Consumer>
  )
}
