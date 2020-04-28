const schema = {
  simple: {
    a: {
      size: 3,
      sequence: [
        6, 9, 2,
        5, 1, 7,
        8, 4, 3
      ]
    },
    b: {
      size: 3,
      sequence: [
        9, 2, 1,
        4, 3, 5,
        8, 7, 6
      ]
    },
    c: {
      size: 3,
      sequence: [
        2, 3, 8,
        1, 9, 4,
        7, 6, 5
      ]
    },
    e: {
      size: 3,
      sequence: [
        2, 5, 8,
        7, 9, 4,
        6, 1, 3
      ]
    },
    h: {
      size: 3,
      sequence: [
        8, 6, 7,
        5, 9, 4,
        2, 1, 3
      ]
    },
  },
  difficult: {
    d: {
      size: 4,
      sequence: [
        11, 4, 15, 8,
        3, 13, 1, 2,
        14, 7, 12, 16,
        9, 6, 5, 10
      ]
    },
    e: {
      size: 4,
      sequence: [
        11, 12, 1, 16,
        9, 8, 14, 3,
        10, 13, 15, 6,
        2, 4, 5, 7
      ]
    },
    g: {
      size: 4,
      sequence: [
        13, 15, 12, 9,
        8, 6, 16, 4,
        7, 3, 5, 14,
        10, 11, 1, 2,
      ]
    }
  }
};

export default schema;