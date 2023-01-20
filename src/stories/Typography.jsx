import React from 'react';
import PropTypes from 'prop-types';
import { Typography as KendoTypography } from "@progress/kendo-react-common";
import './assets/index.scss';

export const Typography = ({...props }) => {

  return (
    <>
      <KendoTypography.h1 {...props}>Headline 1</KendoTypography.h1>
      <KendoTypography.h2 {...props}>Headline 2</KendoTypography.h2>
      <KendoTypography.h3 {...props}>Headline 3</KendoTypography.h3>
      <KendoTypography.h4 {...props}>Headline 4</KendoTypography.h4>
      <KendoTypography.h5 {...props}>Headline 5</KendoTypography.h5>
      <KendoTypography.h6 {...props}>Headline 6</KendoTypography.h6>
      <KendoTypography.p {...props}>I am a paragraph</KendoTypography.p>
      <KendoTypography.code {...props}>code</KendoTypography.code>
      <KendoTypography.pre {...props}>
        <KendoTypography.code {...props}
          dangerouslySetInnerHTML={{
            __html: `const handleChange = ({ target }) => {
  const { name, value } = target;
  const newData = Object.assign({}, data, { [name]: value });
  setData(newData);
}`,
          }}
        />
      </KendoTypography.pre>
    </>
  );
};

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fontSize: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  fontWeight: PropTypes.oneOf(['light', 'normal', 'bold']),
  id: PropTypes.string,
  margin: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'thin', 'hair']),
  style: PropTypes.any,
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  textTransform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
  themeColor: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse'])
};

Typography.defaultProps = {
};
