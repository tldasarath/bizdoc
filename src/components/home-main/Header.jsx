// 'use client';
// import React, { useEffect, useLayoutEffect, useState } from 'react';

// import loadBackgroudImages from '../../common/loadBackgroudImages';
// import SplitText from '../text/SplitText';
// function Header() {
//   useEffect(() => {
//     loadBackgroudImages();
//   }, []);
//     const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     // Run SplitText after 10 seconds
//     const timer = setTimeout(() => {
//       setShowText(true);
//     }, 2000); // 10s delay

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <header
//       className=" main-header bg-img valign"
//       // data-background="/assets/imgs/background/bg5.jpg"
//       data-background="	https://img.freepik.com/premium-photo/futuristic-b…gy-big-data-vexel-concept_31965-347666.jpg?w=2000"

//       data-overlay-dark="7"
//     >
//       <div className="container ontop">
//         <div className="row">
//           <div className="col-lg-11">
//    <div className="caption">
//       {showText && (
//         <>
//           <SplitText
//             text="Business Setup Company in"
//             tag="h1"
//             className=" "
//             delay={100}
//             duration={0.8}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 40 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="left"
//           />

//           <div className="d-flex flex-column">
//             <div>
//               <SplitText
//                 text="UAE, Proven & Professional."
//                 tag="h1"
//                 className="nowrap"
//                 delay={100}
//                 duration={0.8}
//                 ease="power3.out"
//                 splitType="chars"
//                 from={{ opacity: 0, y: 40 }}
//                 to={{ opacity: 1, y: 0 }}
//                 threshold={0.1}
//                 rootMargin="-100px"
//                 textAlign="left"
//               />
//             </div>
//           </div>
//         </>
//       )}
//     </div>

//           </div>
//         </div>
//         <div className="row mt-80">
//           <div className="col-lg-6 order-md-2">
//             <div className="icon-img">
//               <img src="/assets/imgs/icon-img/arrow-down-big.png" alt="" />
//             </div>
//           </div>
//           {/* <div className="col-lg-6 d-flex justify-content-end order-md-1">
//             <div className="info">
//               <h2 className="mb-10">12k +</h2>
//               <h6>
//                 Projects completed <br />
//                 <span className="main-color">successfully</span>
//               </h6>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
'use client';
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../../common/loadBackgroudImages';
import SplitText from '../text/SplitText';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Run SplitText after 2 seconds
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className="main-header bg-img valign"
      data-background="/assets/images/home/hero.jpg"
      data-overlay-dark="7"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-11">
          <div id="hero-caption" className="caption">
  {showText && (
    <>
      <SplitText text="Business Setup" tag="h1" textAlign="left" trigger="#hero-caption" duration={1.6} delay={200} />
      <SplitText text=" Company in UAE ," tag="h1" className="nowrap" textAlign="left"  duration={1.6} delay={200} trigger="#hero-caption" />
      <SplitText text=" Proven & Professional." tag="h1" className="nowrap" textAlign="left"  duration={1.6} delay={200} trigger="#hero-caption" />
    </>
  )}
</div>

          </div>
        </div>
        {/* <div className="row mt-80">
          <div className="col-lg-6 order-md-2">
            <div className="icon-img">
              <img src="/assets/imgs/icon-img/arrow-down-big.png" alt="" />
            </div>  
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default Header;