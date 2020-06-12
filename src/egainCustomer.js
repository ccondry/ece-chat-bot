const egainLibrary = require('./egainLibrary.js')

function create ({egainHost, firstName, lastName, phone, email, visitId, subject, pkey}) {
  const myLibrary = egainLibrary.get(egainHost)
  const customerObject = new myLibrary.Datatype.CustomerObject();

  // if pkey set to email, use email as the primary key for the contact
  if (pkey === 'email') {
    customerObject.SetPrimaryKey(customerObject.PrimaryKeyParams.PRIMARY_KEY_EMAIL, email)
  } else {
    // default to primary key = phone number
    customerObject.SetPrimaryKey(customerObject.PrimaryKeyParams.PRIMARY_KEY_PHONE, phone)
  }

  // first name
  const customerFirstName = new myLibrary.Datatype.CustomerParameter();
  customerFirstName.eGainParentObject = "casemgmt";
  customerFirstName.eGainChildObject = "individual_customer_data";
  customerFirstName.eGainAttribute = "first_name";
  customerFirstName.eGainValue = firstName;
  customerFirstName.eGainParamName = "first_name";
  customerFirstName.eGainMinLength = "1";
  customerFirstName.eGainMaxLength = "50";
  customerFirstName.eGainRequired = "1";
  customerFirstName.eGainFieldType = "1";
  customerFirstName.eGainPrimaryKey = "0";
  customerFirstName.eGainValidationString = "";
  customerObject.AddCustomerParameter(customerFirstName);

  // last name
  const customerLastName = new myLibrary.Datatype.CustomerParameter();
  customerLastName.eGainParentObject = "casemgmt";
  customerLastName.eGainChildObject = "individual_customer_data";
  customerLastName.eGainAttribute = "last_name";
  customerLastName.eGainValue = lastName;
  customerLastName.eGainParamName = "last_name";
  customerLastName.eGainMinLength = "1";
  customerLastName.eGainMaxLength = "50";
  customerLastName.eGainRequired = "1";
  customerLastName.eGainFieldType = "1";
  customerLastName.eGainPrimaryKey = "0";
  customerLastName.eGainValidationString = "";
  customerObject.AddCustomerParameter(customerLastName);

  // email address
  const customerEmail = new myLibrary.Datatype.CustomerParameter();
  customerEmail.eGainParentObject = "casemgmt";
  customerEmail.eGainChildObject = "email_address_contact_point_data";
  customerEmail.eGainAttribute = "email_address";
  customerEmail.eGainValue = email;
  customerEmail.eGainParamName = "email_address";
  customerEmail.eGainMinLength = "1";
  customerEmail.eGainMaxLength = "50";
  customerEmail.eGainRequired = "1";
  customerEmail.eGainFieldType = "1";
  customerEmail.eGainPrimaryKey = "1";
  customerEmail.eGainValidationString = "";
  customerObject.AddCustomerParameter(customerEmail);

  // phone number
  const customerPhone = new myLibrary.Datatype.CustomerParameter();
  customerPhone.eGainParentObject = "casemgmt";
  customerPhone.eGainChildObject = "phone_number_data";
  customerPhone.eGainAttribute = "phone_number";
  customerPhone.eGainValue = phone;
  customerPhone.eGainParamName = "phone_number";
  customerPhone.eGainMinLength = "1";
  customerPhone.eGainMaxLength = "18";
  customerPhone.eGainRequired = "1";
  customerPhone.eGainFieldType = "1";
  customerPhone.eGainPrimaryKey = "0";
  customerPhone.eGainValidationString = "";
  customerObject.AddCustomerParameter(customerPhone);

  // add subject, if exists
  if (subject) {
    const customerSubject = new myLibrary.Datatype.CustomerParameter();
    customerSubject.eGainParentObject = "casemgmt";
    customerSubject.eGainChildObject = "activity_data";
    customerSubject.eGainAttribute = "subject";
    customerSubject.eGainValue = subject;
    customerSubject.eGainParamName = "subject";
    customerSubject.eGainMinLength = "1";
    customerSubject.eGainMaxLength = "120";
    customerSubject.eGainRequired = "0";
    customerSubject.eGainFieldType = "2";
    customerSubject.eGainPrimaryKey = "0";
    customerSubject.eGainValidationString = "";
    customerObject.AddCustomerParameter(customerSubject);
  }

  return customerObject
}

module.exports = {create}
