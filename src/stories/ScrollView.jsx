import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView as KendoScrollView } from "@progress/kendo-react-scrollview";
import './assets/index.scss';
import { sampleData, displayDate } from './assets/events'

export const ScrollView = ({...props }) => {

  const items = [
  {
    position: 1,
    url: "https://demos.telerik.com/blazor-ui/images/photos/1.jpg",
    alt: "Dozens of hot air baloons against a bright blue sky."
  },
  {
    position: 2,
    url: "https://demos.telerik.com/blazor-ui/images/photos/2.jpg",
    alt: "Many tall trees rising up from a mossy forest floor."
  },
  {
    position: 3,
    url: "https://demos.telerik.com/blazor-ui/images/photos/3.jpg",
    alt: "The wind blowing the seeds off a dandelion."
  },
];

  return (
    <>
    <KendoScrollView style={{ width: 512, height: 384 }} {...props}>
        {items.map((item, index) => {
          return (
            <div className="image-with-text" key={index}>
              <img
                src={item.url}
                alt={item.alt}
                style={{
                  width: 512,
                  height: 384,
                }}
                draggable={false}
              />
            </div>
          );
        })}
      </KendoScrollView>
    </>
  );
};

ScrollView.propTypes = {
  activeView: PropTypes.number,
  arrows: PropTypes.bool,
  automaticViewChange: PropTypes.bool,
  automaticViewChangeInterval: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  endless: PropTypes.bool,
  pageable: PropTypes.bool,
  pagerOverlay: PropTypes.oneOf(['none', 'dark', 'light']),
  style: PropTypes.any 
};

ScrollView.defaultProps = {

};
