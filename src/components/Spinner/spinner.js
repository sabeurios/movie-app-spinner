import React from 'react'

const Spinner = ({loading}) => {


        return (
            <div className="loader center">
                    { loading && <i className="fa fa-spinner fa-spin" /> }
            </div>
        )
}
export default Spinner
