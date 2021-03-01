FHIR.oauth2
  .ready()
  .then(function (client) {
    client.patient.read().then(
      function (pt) {
        document.getElementById("patient").innerText = JSON.stringify(
          pt,
          null,
          4
        );
      },
      function (error) {
        document.getElementById("patient").innerText = error.stack;
      }
    );

    client
      .request("/AllergyIntolerance?patient=" + client.patient.id, {
        resolveReferences: ["allergyIntoleranceReference"],
        graph: true,
      })

      .then(function (data) {
        if (!data.entry || !data.entry.length) {
          throw new Error("No allergies found for the selected patient");
        }
        return data.entry;
      })

      .then(
        function (allergies) {
          document.getElementById("allergies").innerText = JSON.stringify(
            allergies,
            null,
            4
          );
        },
        function (error) {
          document.getElementById("allergies").innerText = error.stack;
        }
      );
  })
  .catch(console.error);
