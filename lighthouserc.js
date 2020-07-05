module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'passenger start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
