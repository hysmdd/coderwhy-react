import React from 'react'
import ThemeContext from './contexts/theme-context'

function HomeBanner() {
  return (
    <div>
        <ThemeContext.Consumer>
            {
                value => {
                    return <h2>Banner Color: {value.color}</h2>
                }
            }
        </ThemeContext.Consumer>
    </div>
  )
}

export default HomeBanner