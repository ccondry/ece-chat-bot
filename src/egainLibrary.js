// Begin ECE
const eGainLibrarySettings = require('./egainNode').eGainLibrarySettings

// create instance
function get (host) {
  const myLibrarySettings = new eGainLibrarySettings()
  myLibrarySettings.CORSHost = host
  myLibrarySettings.IsDevelopmentModeOn = false
  myLibrarySettings.eGainContextPath = "./"
  /* Next create a new instance of the eGainLibrary */
  /* passing in the settings you have just created. */
  const eGainLibrary = require('./egainNode').eGainLibrary
  const myLibrary = new eGainLibrary(myLibrarySettings)
  myLibrary.CORSHost = host
  return myLibrary
}

module.exports = { get }
