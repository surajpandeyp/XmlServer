const express = require("express");
const bodyParser = require("body-parser");
const libxml = require("libxmljs2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.text({ type: "application/xml" }));

// Fake database
const Users = [
  { age: "21" },
  { age: "25" }
];

app.post("/check", (req, res) => {
  try {
    const xmldata = req.body;

    // ❌ INTENTIONALLY UNSAFE (LAB / CTF ONLY)
    const doc = libxml.parseXml(xmldata, {
      noent: true,
      dtdload: true,
      dtdattr: true
    });

    const ageNode = doc.get("//age");
    if (!ageNode) {
      return res
        .type("application/xml")
        .send(`<error>age tag missing</error>`);
    }

    const age = ageNode.text();

    const found = Users.find(u => u.age === age);

    if (found) {
      // Normal case
      return res
        .type("application/xml")
        .send(`<result>YES user exists</result>`);
    } else {
      // 🔥 ENTITY dala ho to yahin leak dikhega
      return res
        .type("application/xml")
        .send(`<result>NO</result><leak>${age}</leak>`);
    }

  } catch (err) {
    return res
      .type("application/xml")
      .send(`<error>${err.message}</error>`);
  }
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
