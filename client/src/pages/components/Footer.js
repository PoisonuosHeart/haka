import React from 'react'
import {Footer} from 'react-materialize'
import './ComponentsStyle/footer.css'

export const MFooter = () => {
    return([
      <div className="divider black"/>,
      <Footer
          className="grey darken-3"
          copyrights="copy 2015 Copyright Text"
          links={<p>some</p>}
          moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}>
            
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
    </Footer>
    ]
    )
}