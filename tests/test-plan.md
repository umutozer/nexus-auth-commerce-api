# Test Plani
## Giriş Sayfası
* Giriş formu validasyonu: Kullanıcı adı ve şifre alanlarının doldurulmaması durumunda hata mesajı gösterilmelidir.
* Beklenen sonuç: Kullanıcı adı ve şifre alanları boş bırakıldığında hata mesajı görünür.
* Giriş fonksiyonu: Doğru kullanıcı adı ve şifre girildiğinde sisteme giriş yapılmalıdır.
* Beklenen sonuç: Doğru kullanıcı adı ve şifre girildiğinde sisteme giriş yapılır.
## Ürün Listesi Sayfası
* Ürün listeleme: Ürünlerin listelendiği sayfada her ürünün adı, fiyatı ve stoğu görünmelidir.
* Beklenen sonuç: Ürün listesi sayfalarında ürünlerin adı, fiyatı ve stoğu doğru olarak listelenir.
* Ürün filtreleme: Ürünlerin kategorilere göre filtrelenmesi fonksiyonu çalışmalıdır.
* Beklenen结果: Ürün filtreleme fonksiyonu doğru çalışır ve seçilen kategoriye ait ürünler listelenir.
## Kullanıcı Yönetimi Sayfası
* Kullanıcı listeleme: Sistemdeki tüm kullanıcıların listelendiği sayfada her kullanıcının adı, emaili ve rolü görünmelidir.
* Beklenen sonuç: Kullanıcı listesi sayfalarında kullanıcıların adı, emaili ve rolü doğru olarak listelenir.
* Kullanıcı rol atama: Kullanıcılara farklı roller atanabilmelidir.
* Beklenen sonuç: Kullanıcıya rol atama fonksiyonu doğru çalışır ve kullanıcıya atanmış rol görünür.
## Responsiveness ve Cross-Browser Testleri
* Tüm sayfaların mobil, tablet ve masaüstü cihazlarda doğru görünmesi gerekmektedir.
* Beklenen sonuç: Tüm sayfalar farklı cihazlarda ve tarayıcılarda (Chrome, Firefox, Safari, Edge) doğru bir şekilde görünür.
## Performans ve Güvenlik Testleri
* Sayfaların yükleme hızı: Sayfaların yüklenme süresi 3 saniyeyi geçmemelidir.
* Beklenen sonuç: Sayfalar 3 saniyeden kısa sürede yüklenir.
* Güvenlik testleri: XSS ve CSRF saldırılarına karşı sistem güvenliği sağlanmalıdır.
* Beklenen sonuç: Sistem XSS ve CSRF saldırılarına karşı güvenli olur.