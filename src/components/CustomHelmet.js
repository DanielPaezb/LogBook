import React from 'react';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const CustomHelmet = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}

CustomHelmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default CustomHelmet;
