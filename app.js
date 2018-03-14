/*eslint no-console: ["error", { allow: ["log"] }] */

var $ = jQuery = require('jquery');
var fhir = require('fhir.js/src/adapters/jquery');
var config = { baseUrl: "https://sb-fhir-stu3.smarthealthit.org/smartstu3/open", debug: true };
var client = fhir(config);

// Create a new patient.
//client.create({ resource: { resourceType: 'Patient', name: [ { family: 'Wazoo-2' } ] } })
//  .then(function(res){
//    var patient = res.data;
//    console.log(patient);
//  })
//  .catch(function(res){
//    if (res.status){
//      console.log("Error Status:", res.status);
//    }
//    if (res.message){
//      console.log("Error Message:", res.message);
//    }
//  });

// Set a default patient ID, override with query param `patient`.
var patientId = "eb3271e1-ae1b-4644-9332-41e32c829486";
var queryParams = new URLSearchParams(window.location.search);
if (queryParams.has("patient")){
  patientId = queryParams.get("patient");
}

// Patient Demographics
client
  .read({type: "Patient", id: patientId})
  .then(function(res){
    var patient = res.data;

    console.log(patient);

    var patientName = patient.name[0];
    var patientNameEl = document.getElementById("patient-name");
    patientNameEl.innerHTML = patientName.family + ", " + patientName.given;

    var patientDobEl = document.getElementById("patient-dob");
    patientDobEl.innerHTML = patient.birthDate;
  })
  .catch(function(res){
    if (res.status){
      console.log("Error Status:", res.status);
    }
    if (res.message){
      console.log("Error Message:", res.message);
    }
  });

// MedicationRequests
client
  .search({type: "MedicationRequest", query: { "subject": patientId }})
  .then(function(res) {
    var bundle = res.data;

    console.log(bundle);
    var count = (bundle.entry && bundle.entry.length) || 0;

    // medication count
    var medicationRequestsEl = document.getElementById("medication-requests");
    medicationRequestsEl.innerHTML = count;

    // medication details, if any
    var medicationRequestDetailsEl = document.getElementById("medication-request-details");
    medicationRequestDetailsEl.innerHTML = "";
    bundle.entry.forEach(function(item){
      if (item.resource.medicationCodeableConcept) {
        medicationRequestDetailsEl.innerHTML += "<li>" + item.resource.medicationCodeableConcept.text + "</li>";
      }
      if (item.resource.medicationReference) {
        client.resolve({reference: item.resource.medicationReference}).then(function(res) {
          var item = res.data;
          medicationRequestDetailsEl.innerHTML += "<li>" + item.code.text + "</li>";
        });
      }
    });
  })
  .catch(function(res){
    if (res.status){
      console.log("Error Status:", res.status);
    }
    if (res.message){
      console.log("Error Message:", res.message);
    }
  });

