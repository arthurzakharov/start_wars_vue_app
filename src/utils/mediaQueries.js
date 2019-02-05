export default {
  mobile: 'mobile',
  tablet: 'tablet',
  pc: 'pc',
  isMobile(self){ return self.$mq === this.mobile },
  isTablet(self){ return self.$mq === this.tablet },
  isPC(self){ return self.$mq === this.pc },
};

