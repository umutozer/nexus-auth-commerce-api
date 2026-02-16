-- KATEGORILER
INSERT INTO categories (name, description) VALUES
('Elektronik','Cep telefonu, bilgisayar ve aksesuarlar'),
('Giyim','Kadın & Erkek & Çocuk kıyafetleri'),
('Ev & Yaşam','Mobilya, aydınlatma, mutfak gereçleri');

-- KULLANICILAR (password: Admin123!)
INSERT INTO users (email, password_hash, first_name, last_name) VALUES
('admin@nexus.com','$2a$11$rTgFCtQeO7m1C6I1gYMH2uKqMvN0Yp2VHHqRzVJ8l5lQZfKjJ1Ztq','Admin','User'),
('merve@nexus.com','$2a$11$rTgFCtQeO7m1C6I1gYMH2uKqMvN0Yp2VHHqRzVJ8l5lQZfKjJ1Ztq','Merve','Demir'),
('ali@nexus.com','$2a$11$rTgFCtQeO7m1C6I1gYMH2uKqMvN0Yp2VHHqRzVJ8l5lQZfKjJ1Ztq','Ali','Çelik');

-- URUNLER
INSERT INTO products (name, description, price, stock_quantity, category_id) VALUES
('iPhone 15 Pro','128 GB Gece Siyamı',49999,12,1),
('MacBook Air M2','13.6 inç, 8GB RAM, 256GB SSD',34999,5,1),
('Samsung 65'' QLED TV','4K UHD Akıllı TV',23999,8,1),
('Kadın Kot Ceket','Mavi, streç, skinny fit',1299,35,2),
('Erkek Spor Ayakkabı','Siyah, koşu ve günlük kullanım',1799,22,2),
('Çocuk T-shirt','%100 pamuk, 3-12 yaş',79,50,2),
('Koltuk Takımı','3+2+1, kumaş, gri',12999,6,3),
('Kahve Makinesi','Espresso, 1350W, siyah',1199,15,3),
('LED Masa Lambası','5W, dokunmatik dimmer',249,18,3);