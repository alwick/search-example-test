module.exports = {
  load: function () {
    return this.client
      .url('http://www.allan.com:8080')
      .waitForElementVisible('body', 1000)
      .assert.title('Wickidcool Table Sorting Example');
  },

  search: function (query, result) {
    return this.client
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', query)
      .waitForElementVisible('button[name=go]', 1000)
      .click('button[name=go]')
      .waitForElementVisible('li[class=list-group-item]', 1000)
      .assert.containsText('li[class=list-group-item]',result);
  }
};

