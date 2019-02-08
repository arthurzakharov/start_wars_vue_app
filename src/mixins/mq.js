export const mq = {
  computed: {
    isMobile: function () {
      return this.$mq === 'mobile';
    },
    isTablet: function () {
      return this.$mq === 'tablet';
    },
    isPC: function () {
      return this.$mq === 'pc'
    },
  },
};
