import React from 'react'
import WidgetTitle from '../WidgetTitle'

/**
* @author
* @function Widget
**/

const Widget = (props) => {
    return (
        <div>
            <WidgetTitle widgetTitle="Location" />
            {props.children}
        </div>
    )

}

export default Widget