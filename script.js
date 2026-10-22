/* Mosquito Guys — small helpers for the website */

// Keep the copyright year in the footer up to date automatically.
(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

// Always open each page at the top (unless the link points to a spot on the page),
// and make menu links to the page you are already on scroll back to the top.
(function () {
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}

  function toTop() { if (!location.hash) window.scrollTo(0, 0); }
  toTop();
  window.addEventListener("load", toTop);
  window.addEventListener("pageshow", toTop);

  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("a[href]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === here || (here === "index.html" && href === "./")) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
})();

// Quote request form
(function () {
  var form = document.getElementById("quote-form");
  if (!form) return;

  var box = document.getElementById("form-message");
  var PHONE = "612-707-1770";
  var EMAIL = "mosquitoguysllc@gmail.com";

  function show(text, isError) {
    box.textContent = text;
    box.className = "form-message" + (isError ? " error" : "");
    box.hidden = false;
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Friendly check that every required field is filled in
    var missing = Array.prototype.filter.call(
      form.querySelectorAll("[required]"),
      function (el) { return !el.value.trim(); }
    );
    if (missing.length) {
      show("Please fill in your first name, phone number, email and address so we can prepare your quote.", true);
      missing[0].focus();
      return;
    }
    var name = form.elements["First name"].value.trim();

    // The form has not been connected to an email address yet (see README.md).
    if (form.action.indexOf("YOUR-EMAIL") !== -1) {
      show("Thank you! Our online form is not quite ready yet. Please call us at " + PHONE + " and we will be glad to help.", true);
      return;
    }

    var button = form.querySelector("button[type=submit]");
    var original = button.innerHTML;
    button.disabled = true;
    button.textContent = "Sending...";

    var data = {};
    new FormData(form).forEach(function (value, key) {
      // Checkboxes can have several answers; list them together.
      data[key] = data[key] ? data[key] + ", " + value : value;
    });

    fetch(form.action.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        form.reset();
        show("Thank you, " + name + "! We got your request and will contact you soon. If it is urgent, call us at " + PHONE + ".", false);
      })
      .catch(function () {
        // Backup: let the customer send the same details from their own email app.
        var lines = [];
        Object.keys(data).forEach(function (key) {
          if (key.charAt(0) !== "_" && data[key]) lines.push(key + ": " + data[key]);
        });
        var mailto = "mailto:" + EMAIL +
          "?subject=" + encodeURIComponent("Quote request from " + name) +
          "&body=" + encodeURIComponent(lines.join("\n"));
        show("Sorry, your request did not go through. Tap the button below to email it to us instead, or call or text " + PHONE + ".", true);
        var link = document.createElement("a");
        link.className = "btn btn-primary";
        link.style.marginTop = "14px";
        link.href = mailto;
        link.textContent = "Email My Request Instead";
        box.appendChild(document.createElement("br"));
        box.appendChild(link);
      })
      .then(function () {
        button.disabled = false;
        button.innerHTML = original;
      });
  });
})();
