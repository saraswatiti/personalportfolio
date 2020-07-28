import React from 'react'

/**
* @author
* @function ControlGroup
**/

const ControlGroup = ({ labelTitle, id, type, placeholder, ValideMessage, row }) => {
    return (

        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>{labelTitle}</label>
            {row ? (
                <textarea className="form-control" id={id}
                    type={type} placeholder={placeholder}
                    required="required" rows={row}
                    data-validation-required-message={ValideMessage} />
            ) : (
                    <input className="form-control" id={id}
                        type={type} placeholder={placeholder}
                        required="required"
                        data-validation-required-message={ValideMessage} />
                )}

            <p className="help-block text-danger"></p>
        </div>
    )

}

export default ControlGroup