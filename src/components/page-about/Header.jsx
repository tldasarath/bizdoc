'use client';
import React, { useEffect, useLayoutEffect } from 'react';

import loadBackgroudImages from '../../common/loadBackgroudImages';
function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <header
      className=" page-header bg-img section-padding valign"
      data-background="/assets/images/about-us/bg.png"
      data-overlay-dark="1"
    >
      <div className="container pt-80">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-u ls1 fz-80">
                About <span className="fw-200">us</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
