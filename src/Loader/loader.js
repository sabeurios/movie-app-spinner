import React from 'react'

const Loader = ({loading}) => {


        return (
            <div className="loader center">
                    { loading && <i className="fa fa-spinner fa-spin" /> }
            </div>
        )
}
export default Loader
