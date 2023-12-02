const areaCalc = (width, height = 0) => {
  if ((typeof width === "number" && !isNaN(width) && ((typeof height === "number" && !isNaN(height))))) {
    if (!height) {
      return width * width;
    } else {
      return width * height;
    }
  }
  return 0;
};

export default areaCalc;
