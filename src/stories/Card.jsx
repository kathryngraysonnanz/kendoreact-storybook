import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as KendoCard,
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  CardSubtitle,
} from "@progress/kendo-react-layout";

import './assets/index.scss';

export const Card = ({...props }) => {

  return (
    <>
    <KendoCard {...props}>
        <CardImage src="https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920" />
        <div className="k-vbox">
          <CardHeader>
            <CardTitle>Coffee with friends</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              The right place to be if you're in love with high quality
              espresso or tea. We offer wide range to top coffee brands as
              Davidoff Cafe, Lavazza, Tchibo, Illy.
            </p>
          </CardBody>
        </div>
      </KendoCard>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.any,
  type: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'error'])
};

Card.defaultProps = {
};
