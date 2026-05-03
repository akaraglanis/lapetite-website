/*
 * Contact form handler — i18n-aware
 * ---------------------------------
 * Default behaviour:
 *   The form opens the visitor's email client with a pre-filled mailto:.
 *
 * To receive submissions to your inbox instead, sign up for any of:
 *   - Formspree:  https://formspree.io
 *   - Web3Forms:  https://web3forms.com
 *   - Getform:    https://getform.io
 * Then paste the endpoint URL into FORM_ENDPOINT below.
 *
 * Translated messages live in assets/js/i18n.js (form_* keys).
 */

(function () {
  const FORM_ENDPOINT = "";                       // <-- paste your Formspree/Web3Forms endpoint here
  const FALLBACK_EMAIL = "lapetite.m@outlook.com"; // <-- your real email

  const form   = document.getElementById("contact-form");
  const msgBox = document.getElementById("form-msg");
  const submit = document.getElementById("contact-submit");

  if (!form) return;

  const t = (window.LaPetite && window.LaPetite.t) || function (k) { return k; };

  // Pre-fill cake field from ?cake= query param
  const params = new URLSearchParams(window.location.search);
  const cakeParam = params.get("cake");
  if (cakeParam) {
    const cakeField = form.querySelector('[name="cake"]');
    if (cakeField) cakeField.value = cakeParam;
  }

  // Re-translate the submit button on language change (when idle)
  document.addEventListener("lapetite:langchange", function () {
    if (!submit.disabled) submit.textContent = t("form_submit");
  });

  function setMessage(type, text) {
    msgBox.className = "form-msg show " + type;
    msgBox.textContent = text;
  }
  function clearMessage() {
    msgBox.className = "form-msg";
    msgBox.textContent = "";
  }

  function buildMailto(data) {
    const subject = encodeURIComponent("Cake enquiry from " + (data.name || "your website"));
    const lines = [
      "Hi La Petite,",
      "",
      "Name: "    + (data.name    || ""),
      "Email: "   + (data.email   || ""),
      "Date: "    + (data.date    || "(not set)"),
      "Servings: "+ (data.servings|| "(not set)"),
      "Cake: "    + (data.cake    || "(not set)"),
      "",
      "Message:",
      data.message || "",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    return "mailto:" + FALLBACK_EMAIL + "?subject=" + subject + "&body=" + body;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    clearMessage();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Honeypot
    if (data.company && String(data.company).trim().length > 0) {
      form.reset();
      setMessage("success", t("form_success_sent"));
      return;
    }

    if (!data.name || !data.email || !data.message ||
        String(data.message).trim().length < 10) {
      setMessage("error", t("form_err_fill"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      setMessage("error", t("form_err_email"));
      return;
    }

    if (!FORM_ENDPOINT) {
      window.location.href = buildMailto(data);
      setMessage("success", t("form_success_mailto", { email: FALLBACK_EMAIL }));
      return;
    }

    submit.disabled = true;
    submit.textContent = t("form_sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Server responded with " + res.status);

      form.reset();
      setMessage("success", t("form_success_sent"));
    } catch (err) {
      setMessage("error", t("form_err_send", { email: FALLBACK_EMAIL }));
    } finally {
      submit.disabled = false;
      submit.textContent = t("form_submit");
    }
  });
})();
