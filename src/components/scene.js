const scene = size => {
  
  let arr = [];

  return {

    add(elm) {      
      arr.push(elm);
      if (arr.length > size) {
        arr.shift();
      };
    },

    get() { return arr; },

    ready() { return arr.length === size; }

  };
};

export default scene;