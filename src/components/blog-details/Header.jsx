'use client';
import React, { useEffect, useLayoutEffect } from 'react';

import loadBackgroudImages from '../../common/loadBackgroudImages';
function Header({title}) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <header className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="caption">
             
              <h1 className="fz-55 mt-30">
              {title}
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex align-items-center">
                  <div className="author-info">
                   
                  </div>
                 
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
