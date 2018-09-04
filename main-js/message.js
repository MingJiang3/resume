
  var APP_ID = 'LvGf85PnKyDeY32xFvDBFpRA-gzGzoHsz';
  var APP_KEY = 'I4j1SbFgMqCV3rC7n4bRdm3v';
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });

  var query = new AV.Query('Todo');
  query.find().then(function (todos) {
    todos.forEach(function(todo) {
      todo.set('status', 1);
    });
    return AV.Object.saveAll(todos);
  }).then(function(todos) {
    // 更新成功
  }, function (error) {
    // 异常处理
  });






  let myForm = document.querySelector('#postMessageForm')
  myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('message');
    var message = new Message();
    message.save({
      'content':content
    }).then(function(object) {
      alert('提交成功')
    })
  })

  

