!function () {
  var view = document.querySelector('section.message')
  var model = {
    // 获取数据
    init: function () {
      var APP_ID = 'LvGf85PnKyDeY32xFvDBFpRA-gzGzoHsz';
      var APP_KEY = 'I4j1SbFgMqCV3rC7n4bRdm3v';
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch: function () {
      var query = new AV.Query('message');
      return query.find()
    },
    //创建数据
    save: function (name, content) {
      var Message = AV.Object.extend('message');
      var message = new Message();
      return message.save({
        'content': content,
        'name': name
      })
    }
  }
  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetch().then((message) => {
        let array = message.map((item) => item.attributes)
        array.forEach((item) => {
          let li = document.createElement('li')
          li.innerText = `${item.name}: ${item.content}`
          this.messageList.appendChild(li)
        })
      }
      )
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      this.model.save(name, content).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view, model)
}.call()



