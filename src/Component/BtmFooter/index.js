import React from 'react'
import { Container } from 'react-bootstrap'

/**
* @author
* @function BtmFooter
**/

const BtmFooter = (props) => {
    return (
        <div className="copyright py-4 text-center text-white">
            <Container>
                <small>Copyright © Your Website 2020</small>
            </Container>
        </div>
    )

}

export default BtmFooter