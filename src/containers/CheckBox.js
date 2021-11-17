import React from 'react'

export const CheckBox = (props) => {
    return (
        <div>
            <label className="checkboxStyle">
                <input type="checkbox" className="form-checkbox" value={props.CheckBoxValue}
                    checked={props.checked}
                    onChange={props.onChange}
                />
                <span className="ml-2">{props.CheckBoxValue}</span>
            </label>
        </div>
    )
}

