import React from "react";
import "./ProductTypeSelector.scss";

const ProductTypeSelector = ({
  isOpen,
  onClose,
  productTypes,
  onProductTypeSelect,
  currentProductType,
}) => {
  if (!isOpen) return null;

  return (
    <div className="product-type-selector-overlay" onClick={onClose}>
      <div
        className="product-type-selector"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="product-type-selector__header">
          <h3 className="product-type-selector__title">Select Product Type</h3>
          <button className="product-type-selector__close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="product-type-selector__content">
          <p className="product-type-selector__description">
            Choose a product type to customize your dashboard experience.
          </p>

          <div className="product-type-selector__grid">
            {productTypes.map((productType) => (
              <button
                key={productType.value}
                className={`product-type-selector__option ${
                  currentProductType === productType.value
                    ? "product-type-selector__option--active"
                    : ""
                }`}
                onClick={() => onProductTypeSelect(productType.value)}
              >
                <div className="product-type-selector__option-header">
                  <h4 className="product-type-selector__option-title">
                    {productType.label}
                  </h4>
                  {currentProductType === productType.value && (
                    <span className="product-type-selector__option-badge">
                      Current
                    </span>
                  )}
                </div>
                <p className="product-type-selector__option-description">
                  {productType.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="product-type-selector__footer">
          <button className="product-type-selector__cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTypeSelector;
