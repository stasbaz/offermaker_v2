import React from "react";

function BenefitAgriculture({ img, content }) {
  return (
    <div className="benefits_info_item">
      <img className="benefit_photo" src={img} alt="Agriculture" />
      {content}
    </div>
  );
}

export default BenefitAgriculture;
