import React from "react";
import ".components/style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <p className="p">
              <span className="text-wrapper">호선별</span>
              <span className="span"> 개정 현황</span>
            </p>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <p className="div-2">
              <span className="text-wrapper">부서별</span>
              <span className="span"> 개정코드 발생수</span>
            </p>
          </div>
        </div>
        <div className="div-3">
          <div className="div-3">
            <div className="div-wrapper">
              <div className="text-wrapper-2">
                공정 현황 데이터 <br />
                모니터링
              </div>
            </div>
          </div>
          <div className="text-wrapper-3">호선별 개정 현황</div>
          <div className="text-wrapper-4">호선별 개정 현황</div>
          <div className="text-wrapper-5">호선별 개정 현황</div>
          <img className="ellipse" alt="Ellipse" src="ellipse-3.png" />
          <div className="text-wrapper-6">gkain0125</div>
          <img className="union" alt="Union" src="union.svg" />
        </div>
        <div className="rectangle" />
        <div className="overlap-2">
          <div className="rectangle-2" />
          <p className="div-4">
            <span className="text-wrapper">최신 개정 </span>
            <span className="span">내역</span>
          </p>
          <img className="line" alt="Line" src="line-10.svg" />
          <div className="rectangle-3" />
        </div>
        <div className="overlap-3">
          <div className="rectangle-4" />
          <p className="div-5">
            <span className="text-wrapper">부서별 </span>
            <span className="span">개정 비율</span>
          </p>
          <img className="img" alt="Ellipse" src="ellipse-11.svg" />
          <img className="ellipse-2" alt="Ellipse" src="ellipse-13.svg" />
          <div className="text-wrapper-7">75%</div>
          <div className="ellipse-3" />
          <div className="text-wrapper-8">어디 부서</div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-5" />
          <p className="div-6">
            <span className="text-wrapper">호선별 </span>
            <span className="span">개정 비율</span>
          </p>
          <img className="ellipse-4" alt="Ellipse" src="ellipse-14.svg" />
          <img className="ellipse-5" alt="Ellipse" src="ellipse-15.svg" />
          <div className="text-wrapper-9">75%</div>
          <div className="ellipse-6" />
          <div className="text-wrapper-10">어디 호선</div>
        </div>
        <div className="overlap-5">
          <img className="element" alt="Element" src="1.png" />
          <p className="div-7">
            <span className="text-wrapper">호선 </span>
            <span className="span">및 </span>
            <span className="text-wrapper">부서</span>
            <span className="span"> 선택</span>
          </p>
          <div className="overlap-6">
            <img className="union-2" alt="Union" src="image.svg" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="text-wrapper-11">P1</div>
            <img className="union-2" alt="Union" src="union-2.svg" />
          </div>
          <div className="overlap-7">
            <div className="rectangle-8" />
            <div className="text-wrapper-12">검색</div>
          </div>
        </div>
      </div>
    </div>
  );
};
