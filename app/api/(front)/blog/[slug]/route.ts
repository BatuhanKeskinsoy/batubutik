import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "Zarafet ve Konforun Kusursuz Dengesi",
    short_text:
      "Kadın iç giyiminde doğru seçimle rahatlık ve zarafeti bir araya getirin. Sütyen, külot ve korse modelleri arasından vücudunuza uygun iç çamaşırları seçmenin püf noktalarını öğrenin.",
    slug: "zarafet-ve-konforun-kusursuz-dengesi",
    keywords:
      "kadın iç giyim, iç çamaşırı, sütyen modelleri, rahat iç giyim, kaliteli iç çamaşırları, kadın iç giyim modası, şık iç giyim, konforlu iç çamaşırı, kadın sütyen modelleri",
    content:
      `<h1>Kadın İç Giyim: Zarafet, Konfor ve Özgüven İçin İpuçları</h1>` +
      `<p>Kadın iç giyimi, günlük hayatımızda kendimizi iyi hissetmemizi sağlayan önemli parçalardan biridir. Doğru iç giyim seçimiyle sadece rahatlık değil, aynı zamanda özgüven de kazanabiliriz. İç giyim ürünleri; günlük yaşamdan özel anlara kadar her durumda kendinizi iyi hissetmeniz için farklı seçenekler sunar. Bu yazıda, kadın iç giyiminde dikkat edilmesi gereken konulara, farklı sütyen ve külot modellerine, ayrıca vücut tipine göre seçim ipuçlarına değineceğiz.</p>` +
      `<h2>Kadın İç Giyimde Dikkat Edilmesi Gerekenler</h2>` +
      `<p>Kadın iç giyimi satın alırken, yalnızca estetik değil, aynı zamanda rahatlık ve cilt sağlığı da göz önünde bulundurulmalıdır. Doğru materyallerden üretilmiş, kaliteli ve cilt dostu iç çamaşırları seçmek önemlidir. Pamuklu ürünler, özellikle günlük kullanım için tercih edilirken, özel günlerde dantelli veya ipek modeller daha şık bir tercih olabilir.</p>` +
      `<h2>Doğru Sütyen Seçimi</h2>` +
      `<p>Kadın iç giyiminde sütyen, en önemli parçalardan biridir. Sütyen seçiminde doğru beden ve model belirlemek, hem rahatlık hem de kıyafetlerin daha iyi durması açısından büyük önem taşır.</p>` +
      `<h3>Farklı Sütyen Modelleri</h3>` +
      `<p><strong>Push-up</strong>, <strong>destekli</strong>, <strong>balensiz</strong>, <strong>bralette</strong> ve <strong>spor sütyen</strong> gibi farklı modeller arasından ihtiyacınıza ve kıyafetinize uygun olanı seçmek, gün boyu rahat etmenizi sağlar.</p>` +
      `<h3>Günlük ve Spor İçin Rahat Seçenekler</h3>` +
      `<p>Özellikle spor yaparken tercih edilen spor sütyenler, göğüsleri sıkı tutarak hareket ederken rahatlık sunar. Günlük kullanımda ise balensiz veya bralette modeller, doğal bir görünüm sağlayarak konforu artırır. Daha özel günlerde ise dantelli ve push-up modeller, estetik bir görünüm kazandırır.</p>` +
      `<h2>Külot Seçiminde Konfor ve Şıklık</h2>` +
      `<p>Külot seçerken, vücut yapınıza uygun ve rahat modelleri tercih etmek, gün boyu rahat olmanızı sağlar.</p>` +
      `<h3>Çeşitli Külot Kesimleri</h3>` +
      `<p><strong>Slip</strong>, <strong>tanga</strong> ve <strong>boxer</strong> gibi çeşitli kesimlere sahip külotlar, farklı ihtiyaçlara yanıt verir. Pamuklu ve nefes alabilir kumaşlardan üretilmiş modeller, hassas ciltler için idealdir. Şıklık arayanlar ise dantelli veya ince detaylarla süslenmiş külotları tercih edebilir.</p>` +
      `<h2>Korse ve Body Modelleri ile Kusursuz Duruş</h2>` +
      `<p>Korse ve body modelleri, özel günlerde kıyafetlerin altında pürüzsüz bir görünüm sağlamada yardımcı olur. Korse kullanımı, beli inceltip kıvrımları belirginleştirirken, body modelleri de tüm vücudu toparlayarak daha estetik bir duruş sunar.</p>` +
      `<h3>Günlük ve Özel Günlerde Korse Kullanımı</h3>` +
      `<p>Günlük kullanımda hafif sıkılaştırıcı modeller tercih edilirken, özel günlerde daha belirgin sıkılaştırıcı korse ve body seçenekleri tercih edilebilir.</p>` +
      `<h2>Kaliteli İç Çamaşırının Önemi</h2>` +
      `<p>Kaliteli iç çamaşırları, hem dayanıklılık açısından uzun ömürlüdür hem de cilt sağlığına katkı sağlar. Özellikle pamuklu ve nefes alabilir kumaşlardan üretilen iç giyim ürünleri, cilt tahrişini en aza indirir. Sentetik kumaşlardan uzak durmak, sağlıklı bir iç giyim tercihinde oldukça önemlidir.</p>` +
      `<h2>İç Giyim Trendleri: Moda ve Şıklık</h2>` +
      `<p>Kadın iç giyiminde her yıl değişen trendler, hem şıklığı hem de rahatlığı bir araya getiriyor. Özellikle pastel renkler, dantel detaylar ve soft kumaşlar bu yılın trendleri arasında. İç giyimde moda unsurlarını göz önünde bulundururken, tarzınıza ve rahatlığınıza uygun ürünler tercih etmeyi unutmayın.</p>` +
      `<h2>Sonuç</h2>` +
      `<p>Kadın iç giyiminde doğru seçimler yapmak, gün boyu konforlu hissetmenizi sağlar. Kendinize ve ihtiyaçlarınıza en uygun iç çamaşırlarını seçerken, beden ölçülerinize ve cilt sağlığınıza dikkat etmeyi unutmayın. Böylece hem dış görünüşünüz daha iyi olacak hem de kendinizi daha özgüvenli hissedeceksiniz.</p>`,
    image: {
      original: "/assets/banner/banner.webp",
      thumbnail: "/assets/banner/banner.webp",
    },
    views_count: 376,
    other_blogs: [],
    created_at: "2024-10-12T09:10:00.000000Z",
    updated_at: null,
  },
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const product = blogs.find((blog) => blog.slug === params.slug);

  if (!product) {
    return NextResponse.json({ error: "Blog bulunamadı" }, { status: 404 });
  }

  return NextResponse.json(product);
}
