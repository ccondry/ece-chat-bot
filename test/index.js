const egainLibrary = require('../src/egainLibrary.js')
const egainEventHandlers = require('../src/egainEventHandlers')
const egainCustomer = require('../src/egainCustomer')

// go
escalateToEgain('http://cceece/system', '1001', 'hi')

function escalateToEgain (egainHost, entryPointId, message) {
    console.log(`escalating to eGain/ECE agent`)
    // build customer object for connection to eGain
    const customerObject = egainCustomer.create({
      egainHost,
      firstName: 'Coty',
      lastName: 'Condry',
      email: 'ccondry@cisco.com',
      phone: '5551112234',
      subject: message,
      pkey: 'phone'
    })
    try {
      const myLibrary = egainLibrary.get(egainHost)
      // create instance of ECE chat object
      const myChat = new myLibrary.Chat()
      // build ECE chat event handlers. second parameter is used for logging.
      const myEventHandlers = egainEventHandlers.create(myChat, {id: 'test1'})
      // init the ECE chat object. these details can be retrieved from any
      // normal ECE entry point URL.
      myChat.Initialize(entryPointId, 'en', 'US', myEventHandlers, 'aqua', 'v11')
      // set ECE chat customer object
      myLibrary.SetCustomer(customerObject)
      // start chat with ECE system
      myChat.Start()
      // keep a reference to ECE session
      const egainSession = myChat
      // end the chat session after 30 seconds
      setTimeout(() => {
        egainSession.End()
      }, 30 * 1000)
    } catch (e) {
      console.error('error starting ECE chat', e)
    }
  }