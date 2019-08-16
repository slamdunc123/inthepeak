import React from 'react';

// css
import './Activities.css';

// components
import DateTime from '../partials/DateTime';

const divStyle = {
  maxWidth: '100%'
};

const Activities = () => {
  return (
    <div className='container flex-container'>
      <div className='flex-container-column-left'>
        <DateTime />
      </div>

      <div className='flex-container-column-right'>
        <div className='' style={divStyle}>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img
                src='https://via.placeholder.com/300x200'
                className='card-img'
                alt='...'
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>Hiking</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className='card-text'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='card mb-3' style={divStyle}>
          <div className='row no-gutters'>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>Mountain Biking</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className='card-text'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <img
                src='https://via.placeholder.com/300x200'
                className='card-img'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
