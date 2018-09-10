export default {
  toStringOrEmpty: (target: any): string => {
    if (target === null || target === undefined) {
      return '';
    }
    return target;
  }
};
