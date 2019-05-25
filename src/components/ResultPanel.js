import React from 'react';
import PropTypes from 'prop-types';
import './ResultPanel.css';

const ResultPanel = (props) => {
    
    const {error, result} = props;
    
    const renderResult = () => <div>{`Triangle is ${result}`}</div>;
    
    const renderError = () => <div className="error">{error.message}</div>;

    return (
        (error || result) &&
        (<form data-ts="Form" className="result-panel">
            {props.result ? renderResult(): renderError()}
        </form>)
    )
}

ResultPanel.propType = {
    result: PropTypes.string,
    error: PropTypes.objectOf(PropTypes.bool, PropTypes.string)
};

export default ResultPanel;