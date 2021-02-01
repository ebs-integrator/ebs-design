// Default size for vertical form
export const defaultCol = {
  size: 12, // Full width column
};

// Default sizes for horizontal form
export const defaultLabelCol = {
  size: 4,
};

export const defaultControlCol = {
  size: 8,
};

export const getColumnSizes = (type: string, labelCol, controlCol) => {
  if (type === 'vertical') {
    return {
      labelCol: labelCol ? labelCol : defaultCol,
      controlCol: controlCol ? controlCol : defaultCol,
    };
  }

  return {
    labelCol: labelCol ? labelCol : defaultLabelCol,
    controlCol: controlCol ? controlCol : defaultControlCol,
  };
};
