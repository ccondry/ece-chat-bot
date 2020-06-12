// const localization = require('./models/localization')

function create (myChat, session) {
  let myEventHandlers = myChat.GetEventHandlers()

  myEventHandlers.OnConnectionInitialized = function (args) {
    console.log(`${session.id} - eGain OnConnectionInitialized. XEgainSession =`, args ? args.XEgainSession : 'undefined')
  }
  myEventHandlers.OnConnectionPaused = function (args) {
    console.log(`${session.id} - eGain OnConnectionPaused`, args)
  }
  myEventHandlers.OnConnectionResumed = function (args) {
    console.log(`${session.id} - eGain OnConnectionResumed`, args)
  }
  myEventHandlers.OnConnectionAttached = function (args) {
    console.log(`${session.id} - eGain OnConnectionAttached`, args)
  }
  myEventHandlers.OnConnectionAttachedFailure = function (args) {
    console.log(`${session.id} - eGain OnConnectionAttachedFailure`, args)
  }
  myEventHandlers.OnDuplicateSession = function (args) {
    console.log(`${session.id} - eGain OnDuplicateSession`, args)
    // session.onEgainEnd()
  }
  myEventHandlers.OnSysemMessageReceived = function (args) {
    console.log(`${session.id} - eGain OnSysemMessageReceived`, args)
  }
  myEventHandlers.OnGetQueueCurrentStatus = function (args) {
    console.log(`${session.id} - eGain OnGetQueueCurrentStatus`, args)
  }
  myEventHandlers.OnMessagePropertyLoad = function (args) {
    console.log(`${session.id} - eGain OnMessagePropertyLoad`, args)
  }
  myEventHandlers.OnErrorOccured = function (args) {
    console.log(`${session.id} - eGain OnErrorOccured`, args)
  }


  /* Example browser alert when chat is connected */
  myEventHandlers.OnConnectSuccess = function (args) {
    console.log(`${session.id} - eGain OnConnectSuccess`, args)
    if (session.botEnabled) {
      // console.log(welcomeMessage)
      // session.addMessage('system', localization[session.languageCode].welcomeMessage)
    } else {
      // do nothing
    }
  }
  /* Example browser alert when there is a connection failure */
  myEventHandlers.OnConnectionFailure = function (args) {
    console.log(`${session.id} - eGain OnConnectionFailure`, args)
    // session.onEgainFail(args)
  };
  /* Example output of agent messages to a DIV named TransScript with jQuery */
  myEventHandlers.OnAgentMessageReceived = function (args) {
    console.log(`${session.id} - eGain OnAgentMessageReceived`)
    // session.addMessage('agent', args.Message)
  };
  /* Example output of system messages to the same DIV */
  myEventHandlers.OnSystemMessageReceived = function (args) {
    console.log(`${session.id} - eGain OnSystemMessageReceived:`, args.Message)
    // send customer all system messages except the ECE 12.0 "agentPickup" and "activityTransfer"
    if (!args.Message.startsWith('agentPickup') && !args.Message.startsWith('activityTransfer')) {
      // session.addMessage('system', args.Message)
    }
  }
  /* Example browser console.log when an error occurs */
  myEventHandlers.OnErrorOccurred = function (args) {
    console.log(`${session.id} - eGain OnErrorOccurred`, args)
    // session.addMessage('system', args.toString())
    if (args.status === 'error') {
      // session.addMessage('system', localization[session.languageCode].errorMessage)
      // session.onEgainEnd()
      // session.deescalate(args.message)
    } else if (args.status === 'log') {
    }
  }
  /* Example browser console.log when agents are not available */
  myEventHandlers.OnAgentsNotAvailable = function (args) {
    console.log(`${session.id} - eGain OnAgentsNotAvailable`, args)
    // session.addMessage('system', args.toString())
  };
  /* Example browser console.log when the chat is completed */
  myEventHandlers.OnConnectionComplete = function () {
    console.log(`${session.id} - eGain OnConnectionComplete`, args)
    // session.onEgainEnd()
  };
  /* Example of adding message in transcript when customer attachment invite is sent to server */
  myEventHandlers.OnCustomerAttachmentNotificationSent = function (args) {
    console.log(`${session.id} - eGain OnCustomerAttachmentNotificationSent`, args)
    // send command for sparky-ui chat client to accept
    // session.addMessage('system', localization[session.languageCode].waitingAcceptAttachment)
    // session.addCommand('accept-attachment')
  }
  /* Example of uploading attachment to chat server when agent accepts attachment invite */
  myEventHandlers.OnAttachmentAcceptedByAgent = function (args) {
    console.log(`${session.id} - eGain OnAttachmentAcceptedByAgent`, args)
    // TODO implement something else here?
    // file.uniqueFileId = args.uniqueFileId
    // myChat.UploadAttachment(file, args.agentName)
    // session.addMessage('system', localization[session.languageCode].acceptedAttachment)
  }

  /* Example of sending notification to chat server when customer accepts attachment invite */
  myEventHandlers.OnAttachmentInviteReceived = function (args) {
    console.log(`${session.id} - eGain OnAttachmentInviteReceived`, args)
    // session.addMessage('system', `${args.Attachment.AgentName} ${localization[session.languageCode].attachmentReceived}: ${args.Attachment.Name}`)
    // var acceptBtn = document.createElement('input');
    // acceptBtn.type = "button";
    // acceptBtn.value = "Accept";
    // acceptBtn.addEventListener('click', function () {
    //   sendAcceptChatAttachmentNotification(args.Attachment);
    // });
    // $('#messages ul').append( '<li><span class="systemmsg-chat">' + args.Attachment.AgentName + " has sent attachment "+args.Attachment.Name + '</span><div class="clear"></div></li>');
    // $('#messages ul').append(acceptBtn);
  };

  /* Example of downloading file when attachment is fetched from server */
  myEventHandlers.OnGetAttachment = function(args){
    console.log(`${session.id} - eGain OnGetAttachment`, args)
    // if (typeof fileName !== 'undefine' && fileName !== null) {
    //   if ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileName)) {
    //     myChat.GetAttachmentImage(args.fileId, args.uniqueFileId);
    //   }
    //   else{
    //     var data = args.data;
    //     var blob = new Blob([data]);
    //     url = window.URL || window.webkitURL;
    //     var fileUrl = url.createObjectURL(blob);
    //     window.open(fileUrl);
    //   }
    // }

  }
  /* Example of downloading file when attachment thumbnail is fetched from server */
  myEventHandlers.OnGetAttachmentImageThumbnail = function(args){
    console.log(`${session.id} - eGain OnGetAttachmentImageThumbnail`, args)
    // var thumbnailElement = document.createElement('img');
    // thumbnailElement.src = args.data;
    // $('#messages ul').append("<br />");
    // $('#messages ul').append(thumbnailElement);
    // session.addCommand('show-thumbnail', args.src)
  }

  // function sendAcceptChatAttachmentNotification(attachment){
  //   fileName = attachment.Name
  //   myChat.SendAcceptChatAttachmentNotification(attachment.Id, attachment.Name)
  //   myChat.GetAttachment(attachment.Id)
  // };

  return myEventHandlers
}

module.exports = {create}
