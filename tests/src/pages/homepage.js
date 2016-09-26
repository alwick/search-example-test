module.exports = {
  load: function () {
    return this.client
      .url('http://www.allan.com:8080')
      .waitForElementVisible('body', 1000)
      .assert.title('CXID Login');
  },

  search: function (query) {
    return this.client
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', query)
      .waitForElementVisible('input[name=go]', 1000)
      .click('input[name=go]')
      .pause(1000);
  }
};

