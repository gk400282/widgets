import React, {useState} from 'react';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <div key = {item.pageid}>
        <div
          className = {`title ${active}`}
          onClick = {() => onTitleClick(index)}
        >
          <i className = "dropdown icon"></i>
          {item.title}
        </div>
        <div className = {`content ${active}`}>
          <p dangerouslySetInnerHTML = {{__html: item.snippet}}></p>
        </div>
      </div>
    );
  });

  return (
    <div className = "ui styled accordion">
      {renderedItems}
    </div>
  );
}

export default Accordion;
