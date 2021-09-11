describe('#test()', function() {
  it('unknown test that pass every time', function()
     {
      return {message: () => `passed`, pass: false,};
  })
})
