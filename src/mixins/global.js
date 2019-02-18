const globalMixin = {
  methods: {
    getUID(item) {
      let str = JSON.stringify(item);
      let hash = 0, i, chr;
      if (str.length === 0) {
        console.warn('globalMixin/getUID: passed item lenght is 0, returned hash: ', hash);
        return hash;
      }
      for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
      }
      return Math.abs(parseInt(hash / Math.random()));
    },
  },
};

export default globalMixin;
