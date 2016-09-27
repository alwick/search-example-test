var path = require('path');

module.exports = {
  tags: ['sanity'],

  'Load sample app': function (client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, 'pages'));

    client.page.homepage.load().end();
  },

  'Perform simple search': function( client ) {
    require('nightwatch-pages')(client, path.resolve(__dirname, 'pages'));
    client.page.homepage.load();
    client.page.homepage.search('allan', 'Allan').end();
  }
};
