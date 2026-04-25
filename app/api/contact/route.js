export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name || "";
    const contact = body.contact || "";
    const service = body.service || "";
    const message = body.message || "";

    if (!name || !contact || !message) {
      return Response.json(
        { ok: false, message: "Lütfen ad, iletişim ve mesaj alanlarını doldurun." },
        { status: 400 }
      );
    }

    // Buraya mail gönderme entegrasyonu bağlanacak.
    // Şu an test amaçlı başarılı dönüş yapıyoruz.
    console.log("Yeni iletişim formu:", {
      name,
      contact,
      service,
      message,
    });

    return Response.json({
      ok: true,
      message: "Mesajınız başarıyla alındı.",
    });
  } catch (error) {
    return Response.json(
      { ok: false, message: "Mesaj gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
