import React, { useContext } from 'react'
import ApiContext from '../contextApi/apiContext'


function Alert(props) {
    const context = useContext(ApiContext)
    const { alert, showAlert } = context
    const cap = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '55px' }}>
            {alert && <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{cap(alert.type)}</strong>  {alert.msg}

            </div>}
        </div>
    )
}

export default Alert
