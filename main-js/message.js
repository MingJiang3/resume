!function() {
  var APP_ID = 'LvGf85PnKyDeY32xFvDBFpRA-gzGzoHsz';
  var APP_KEY = 'I4j1SbFgMqCV3rC7n4bRdm3v';
  
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
  
  var TestObject = AV.Object.extend('TestObject');
  var testObject = new TestObject();
  testObject.save({
    words: 'Hello World!'
  }).then(function(object) {
  })
}.call()
