async function handleContactSubmit(event) {
  event.preventDefault();

  setFormStatus({
    type: "sending",
    message: "Mesajınız gönderiliyor...",
  });

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Mesaj gönderilemedi.");
    }

    setFormData({
      name: "",
      contact: "",
      service: "",
      message: "",
    });

    setFormStatus({
      type: "success",
      message: "Mesajınız başarıyla gönderildi.",
    });
  } catch (error) {
    setFormStatus({
      type: "error",
      message: error.message || "Mesaj gönderilirken bir hata oluştu.",
    });
  }
}
