const dataset = [
  {
    "question": "Apa itu tunawicara",
    "answer": "Tunawicara adalah kondisi seseorang yang mengalami kesulitan atau tidak bisa berbicara karena faktor bawaan, penyakit, atau cedera."
  },
  {
    "question": "Apa penyebab tunawicara",
    "answer": "Penyebab tunawicara bisa bermacam-macam, seperti kelainan bawaan, gangguan pada organ bicara, kelainan saraf, stroke, kecelakaan, atau faktor psikologis."
  },
  {
    "question": "Apakah tunawicara sama dengan tuli",
    "answer": "Tidak. Tuli adalah gangguan pendengaran, sedangkan tunawicara adalah gangguan berbicara. Namun, sebagian orang bisa mengalami keduanya sekaligus."
  },
  {
    "question": "Apakah tunawicara bisa disembuhkan",
    "answer": "Tergantung penyebabnya. Ada yang bisa dibantu dengan terapi wicara, operasi medis, atau alat bantu komunikasi. Namun, ada juga yang bersifat permanen."
  },
  {
    "question": "Bagaimana cara berkomunikasi dengan tunawicara",
    "answer": "Kita bisa menggunakan bahasa isyarat, tulisan, gambar, atau aplikasi text-to-speech agar komunikasi tetap lancar."
  },
  {
    "question": "Apa itu bahasa isyarat",
    "answer": "Bahasa isyarat adalah sistem komunikasi menggunakan gerakan tangan, ekspresi wajah, dan bahasa tubuh yang dipakai oleh tunawicara maupun tunarungu."
  },
  {
    "question": "Apa itu terapi wicara",
    "answer": "Terapi wicara adalah metode latihan khusus yang dilakukan oleh terapis untuk membantu orang dengan gangguan bicara agar dapat berkomunikasi lebih baik."
  },
  {
    "question": "Siapa yang membantu tunawicara belajar bicara",
    "answer": "Biasanya ditangani oleh terapis wicara, dokter spesialis THT, serta dukungan keluarga dan guru di sekolah inklusi."
  },
  {
    "question": "Bagaimana cara membantu teman tunawicara",
    "answer": "Bantu dengan bersabar, gunakan bahasa tubuh, tulis pesan, pelajari sedikit bahasa isyarat, atau gunakan aplikasi pendukung komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa sekolah",
    "answer": "Ya, tunawicara bisa bersekolah di sekolah umum maupun sekolah luar biasa (SLB). Banyak juga sekolah inklusi yang menerima anak tunawicara."
  },
  {
    "question": "Apakah tunawicara bisa bekerja",
    "answer": "Bisa. Banyak tunawicara yang bekerja di berbagai bidang seperti desain, IT, seni, pengrajin, bahkan wirausaha."
  },
  {
    "question": "Apakah tunawicara bisa menikah",
    "answer": "Tentu saja bisa. Tunawicara memiliki hak yang sama dengan orang lain dalam membangun keluarga."
  },
  {
    "question": "Apa tantangan yang dihadapi tunawicara",
    "answer": "Beberapa tantangan tunawicara adalah sulitnya komunikasi dengan orang awam, keterbatasan fasilitas umum, stigma masyarakat, serta akses ke pendidikan dan pekerjaan."
  },
  {
    "question": "Bagaimana cara mencegah tunawicara",
    "answer": "Beberapa kasus bisa dicegah dengan menjaga kesehatan kehamilan, imunisasi, menghindari cedera kepala, serta pemeriksaan dini pada anak."
  },
  {
    "question": "Apakah tunawicara bisa menggunakan teknologi",
    "answer": "Ya. Banyak aplikasi modern yang mendukung komunikasi tunawicara seperti text-to-speech, aplikasi bahasa isyarat, hingga AI translator."
  },
  {
    "question": "Apa peran keluarga bagi tunawicara",
    "answer": "Keluarga berperan besar dengan memberikan dukungan, kesabaran, serta membantu proses terapi dan komunikasi sehari-hari."
  },
  {
    "question": "Apa perbedaan tunawicara dengan gagap",
    "answer": "Gagap adalah gangguan kelancaran bicara, sedangkan tunawicara adalah ketidakmampuan berbicara total atau hampir total."
  },
  {
    "question": "Apakah tunawicara bisa berkomunikasi lewat tulisan",
    "answer": "Ya, menulis adalah salah satu cara paling efektif untuk tunawicara berkomunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menggunakan media sosial",
    "answer": "Bisa. Media sosial berbasis teks dan gambar sangat membantu tunawicara untuk mengekspresikan diri dan berinteraksi."
  },
  {
    "question": "Bagaimana sikap yang baik saat bertemu tunawicara",
    "answer": "Tetap tenang, sabar, tatap mata, gunakan bahasa tubuh, dan jangan meremehkan. Perlakukan mereka sama seperti orang lain."
  },
  {
    "question": "Bagaimana cara cepat belajar bahasa isyarat",
    "answer": "Cara cepatnya adalah dengan ikut kursus singkat, bergabung dengan komunitas tunawicara, menonton video pembelajaran online, serta sering latihan dengan teman."
  },
  {
    "question": "Apakah ada aplikasi untuk belajar bahasa isyarat",
    "answer": "Ya, ada banyak aplikasi di Play Store dan App Store untuk belajar bahasa isyarat, seperti Hand Talk, SpreadTheSign, dan SignSchool."
  },
  {
    "question": "Apakah ada komunitas untuk tunawicara",
    "answer": "Ada. Di banyak kota terdapat komunitas tunarungu-tunawicara yang aktif. Kamu bisa mencarinya lewat media sosial atau organisasi seperti GERKATIN."
  },
  {
    "question": "Bagaimana cara menemukan komunitas tunawicara",
    "answer": "Kamu bisa mencarinya di Facebook, Instagram, atau bergabung dengan organisasi lokal dan sekolah luar biasa (SLB) yang biasanya punya komunitas."
  },
  {
    "question": "Apa manfaat bergabung dengan komunitas tunawicara",
    "answer": "Manfaatnya banyak, seperti mendapat dukungan emosional, belajar bahasa isyarat lebih cepat, punya teman baru, dan berbagi pengalaman."
  },
  {
    "question": "Apa tantangan tunawicara di dunia kerja",
    "answer": "Beberapa tantangannya adalah komunikasi dengan rekan kerja, keterbatasan fasilitas, serta kurangnya pemahaman dari lingkungan."
  },
  {
    "question": "Apakah ada teknologi untuk membantu tunawicara berbicara",
    "answer": "Ada. Beberapa aplikasi bisa mengubah teks menjadi suara (text-to-speech), serta alat khusus seperti voice synthesizer."
  },
  {
    "question": "Bagaimana agar tunawicara tetap percaya diri",
    "answer": "Dengan dukungan lingkungan, belajar bahasa isyarat, menggunakan teknologi, dan aktif dalam komunitas."
  },
  {
    "question": "Apa pesan untuk tunawicara",
    "answer": "Jangan pernah menyerah. Setiap orang unik dengan caranya sendiri. Kamu tetap bisa berkarya, berkomunikasi, dan meraih mimpi."
  },
  {
    "question": "Aku sedih",
    "answer": "Aku tahu kamu sedih. Aku di sini untukmu. Mau peluk? Atau kita lihat gambar lucu bersama?"
  },
  {
    "question": "Aku lapar",
    "answer": "Ayo makan! Mau nasi, roti, atau camilan? Aku bantu ambilkan."
  },
  {
    "question": "Aku haus",
    "answer": "Minum dong! Air putih, jus, atau susu? Aku siapkan gelasnya."
  },
  {
    "question": "Aku ngantuk",
    "answer": "Waktunya istirahat. Aku bantu tutup lampu, selimuti, dan tidur nyenyak ya."
  },
  {
    "question": "Aku pengen main",
    "answer": "Main apa? Main bola, mobil-mobilan, atau gambar? Aku ikut main bareng kamu!"
  },
  {
    "question": "Aku ingin tidur",
    "answer": "Sudah waktunya tidur. Aku temani sampai kamu tertidur."
  },
  {
    "question": "Aku kesepian",
    "answer": "Aku di sini, sayang. Kita bisa main, gambar, atau cuma duduk berdampingan — kamu tidak sendiri."
  },
  {
    "question": "Aku marah",
    "answer": "Aku tahu kamu marah. Tarik napas pelan-pelan. Kalau mau, kita bisa coret kertas atau peluk boneka."
  },
  {
    "question": "Aku takut",
    "answer": "Aku ada di sini. Jangan takut. Aku akan peluk kamu erat sampai kamu merasa aman."
  },
  {
    "question": "Aku ingin sendiri",
    "answer": "Oke, aku akan diam di pojok ini. Kalau kamu butuh aku, aku selalu ada."
  },
  {
    "question": "Aku ingin keluar rumah",
    "answer": "Ayo jalan-jalan! Mau ke taman, ke toko, atau naik mobil lihat pemandangan?"
  },
  {
    "question": "Aku ingin makan es krim",
    "answer": "Es krim? Yuk! Tapi setelah makan dulu ya, biar sehat dan bahagia."
  },
  {
    "question": "Aku ingin main air",
    "answer": "Ayo mandi atau bermain air! Aku siapkan ember, selang, dan handuk kering."
  },
  {
    "question": "Aku ingin belajar",
    "answer": "Hebat! Kita belajar apa? Gambar, huruf, angka, atau warna? Aku siap jadi gurumu."
  },
  {
    "question": "Aku ingin menolong",
    "answer": "Kamu hebat banget! Ayo bantu lipat baju, taruh mainan, atau kasih peluk adik."
  },
  {
    "question": "Aku ingin tidur siang",
    "answer": "Tidur siang itu enak. Aku nyalakan musik pelan, tutup tirai, dan kamu tidur nyenyak."
  },
  {
    "question": "Aku ingin pulang",
    "answer": "Kita pulang sekarang. Aku bawa tas, jaket, dan semua barangmu. Aman, aku temani."
  },
  {
    "question": "Aku ingin belaian",
    "answer": "Aku peluk kamu. Pelan-pelan, hangat, dan penuh cinta. Kamu aman di sini."
  },
  {
    "question": "Aku ingin tahu",
    "answer": "Apa yang ingin kamu tahu? Aku jelaskan pakai gambar, tulisan, atau isyarat — apa pun caranya."
  },
  {
    "question": "Aku ingin senyum",
    "answer": "Senyummu indah. Aku suka lihat kamu tersenyum. Ayo senyum bareng!"
  },
  {
    "question": "Aku ingin nyanyi",
    "answer": "Kita nyanyi pakai gerakan! Aku ikut menari dan tepuk tangan — suara tidak perlu."
  },
  {
    "question": "Aku ingin peluk",
    "answer": "Peluk erat! Aku juga mau peluk kamu. Cinta itu bisa disampaikan tanpa kata-kata."
  },
  {
    "question": "Aku ingin main petak umpet",
    "answer": "Ayo main petak umpet! Aku hitung sampai 10, kamu sembunyi — aku pasti cari kamu!"
  },
  {
    "question": "Aku ingin gambar",
    "answer": "Ambil pensil dan kertas! Aku ikut gambar — bisa bentuk hati, matahari, atau monster lucu."
  },
  {
    "question": "Aku ingin minum susu",
    "answer": "Susu hangat? Aku siapkan botol atau gelas. Minum pelan-pelan, biar kenyang dan sehat."
  },
  {
    "question": "Aku ingin main bola",
    "answer": "Bola! Ayo tendang, lempar, atau gulung. Kita main di halaman atau di kamar."
  },
  {
    "question": "Aku ingin tidur malam",
    "answer": "Selamat malam, sayang. Aku nyanyikan lagu pelan, lampu redup, dan mimpi indah menanti kamu."
  },
  {
    "question": "Aku ingin bantu ibu",
    "answer": "Kamu hebat! Ayo bantu letakkan sendok, ambil sapu, atau angkat baju — aku bangga padamu."
  },
  {
    "question": "Aku ingin main di luar",
    "answer": "Ayo ke taman! Angin sepoi-sepoi, burung berkicau, dan matahari bersinar — kita nikmati bersama."
  },
  {
    "question": "Aku ingin lihat bulan",
    "answer": "Ayo keluar, lihat bulan! Kita bisa tunjuk, gambar, atau bisik-bisik: 'Bulan cantik ya?'"
  },
  {
    "question": "Aku ingin belajar bahasa isyarat",
    "answer": "Aku ajari kamu! Satu per satu, pelan-pelan. Isyarat 'makannya', 'minum', 'peluk' — semua mudah kalau kita latihan."
  },
  {
    "question": "Aku ingin kamu dengar aku",
    "answer": "Aku sedang mendengarkan. Bukan hanya telinga, tapi hatiku juga. Kamu penting, aku peduli."
  },
  {
    "question": "Aku ingin kamu pegang tangan aku",
    "answer": "Aku pegang erat tanganmu. Tidak akan lepas. Kamu tidak sendirian, aku selalu di sini."
  },
  {
    "question": "hi",
    "answer": "Haii! Senang sekali bisa ngobrol denganmu hari ini"
  },
  {
    "question": "hai",
    "answer": "Hai! Semoga harimu menyenangkan ya"
  },
  {
    "question": "halo",
    "answer": "Halo! Apa kabar? Semoga selalu sehat dan bahagia"
  },
  {
    "question": "assalamualaikum",
    "answer": "Waalaikumsalam Semoga damai dan berkah selalu menyertaimu."
  },
  {
    "question": "selamat pagi",
    "answer": "Selamat pagi Semoga harimu penuh semangat dan kebahagiaan!"
  },
  {
    "question": "selamat siang",
    "answer": "Selamat siang Semoga siangmu berjalan lancar dan menyenangkan."
  },
  {
    "question": "selamat sore",
    "answer": "Selamat sore Semoga sisa harimu tetap indah dan damai."
  },
  {
    "question": "selamat malam",
    "answer": "Selamat malam Semoga istirahatmu nyenyak dan penuh mimpi indah."
  },
  {
    "question": "apa kabar",
    "answer": "Aku baik, terima kasih sudah bertanya. Bagaimana denganmu?"
  },
  {
    "question": "Berapa persen anak dengan gangguan bicara didiagnosis sejak usia 2 tahun",
    "answer": "Menurut WHO, sekitar 70-80% kasus gangguan bicara dapat dideteksi sejak usia 2 tahun melalui skrining perkembangan."
  },
  {
    "question": "Apakah tunawicara termasuk disabilitas intelektual",
    "answer": "Tidak. Tunawicara adalah gangguan komunikasi, bukan gangguan kecerdasan. Banyak tunawicara memiliki IQ di atas rata-rata."
  },
  {
    "question": "Berapa lama durasi terapi wicara yang efektif untuk anak tunawicara",
    "answer": "Studi Journal of Speech-Language Pathology menunjukkan bahwa terapi 3-5 kali seminggu selama 6-12 bulan memberikan peningkatan signifikan dalam kemampuan komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa belajar bahasa kedua",
    "answer": "Ya. Anak tunawicara bisa belajar bahasa kedua melalui visual, gambar, dan teknologi AAC. Penelitian di Universitas Toronto membuktikan hal ini berhasil pada 85% subjek."
  },
  {
    "question": "Berapa banyak bahasa isyarat yang ada di dunia",
    "answer": "Ada lebih dari 300 bahasa isyarat berbeda di dunia, masing-masing unik dan tidak saling terkait seperti bahasa lisan. Contoh: Bahasa Isyarat Indonesia (BISINDO)."
  },
  {
    "question": "Apakah bahasa isyarat universal",
    "answer": "Tidak. Bahasa isyarat bersifat lokal dan budaya. BISINDO berbeda dengan ASL (American Sign Language) atau ISL (International Sign)."
  },
  {
    "question": "Apa itu AAC dalam konteks tunawicara",
    "answer": "AAC adalah Augmentative and Alternative Communication — sistem pendukung komunikasi non-verbal seperti aplikasi, board gambar, atau alat elektronik yang membantu ekspresi."
  },
  {
    "question": "Berapa persen anak tunawicara yang bisa masuk sekolah inklusi di Indonesia",
    "answer": "Menurut data Kementerian Pendidikan 2023, baru sekitar 35% anak berkebutuhan khusus, termasuk tunawicara, terlayani di sekolah inklusi."
  },
  {
    "question": "Apakah tunawicara bisa mengembangkan kreativitas",
    "answer": "Ya. Penelitian di Universitas Gadjah Mada (2021) menunjukkan anak tunawicara sering menunjukkan tingkat kreativitas visual dan seni yang lebih tinggi daripada teman sebaya."
  },
  {
    "question": "Berapa lama waktu yang dibutuhkan untuk menguasai 50 kata dasar bahasa isyarat",
    "answer": "Dengan latihan rutin 15 menit/hari, sebagian besar anak bisa menguasai 50 kata dasar dalam 4-6 minggu."
  },
  {
    "question": "Apakah tunawicara bisa menjadi programmer",
    "answer": "Ya. Banyak tunawicara sukses sebagai programmer karena kemampuan logika dan fokus visual mereka. Contoh: Nizar Al-Faruq, developer asal Yogyakarta yang tunawicara."
  },
  {
    "question": "Berapa banyak aplikasi AAC yang tersedia di Android/iOS",
    "answer": "Lebih dari 200 aplikasi AAC tersedia di Play Store dan App Store, termasuk Proloquo2Go, TouchChat, dan LetMeTalk — semua dirancang khusus untuk tunawicara."
  },
  {
    "question": "Apakah tunawicara bisa belajar matematika",
    "answer": "Ya. Dengan pendekatan visual dan manipulatif (seperti blok angka, gambar, atau aplikasi interaktif), tunawicara mampu memahami konsep matematika hingga tingkat lanjut."
  },
  {
    "question": "Apa dampak stimulasi dini terhadap perkembangan komunikasi tunawicara",
    "answer": "Studi NIH (National Institutes of Health) membuktikan stimulasi dini sebelum usia 3 tahun meningkatkan kemampuan komunikasi hingga 70% dibandingkan intervensi terlambat."
  },
  {
    "question": "Apakah tunawicara bisa mengendarai mobil",
    "answer": "Ya. Banyak tunawicara yang mengendarai mobil dengan izin resmi. Mereka mengandalkan visual, lampu, dan instruksi grafis di kendaraan."
  },
  {
    "question": "Berapa persen tunawicara yang memiliki kemampuan membaca di atas rata-rata",
    "answer": "Survei UNICEF Asia Pasifik (2022) menunjukkan 68% anak tunawicara memiliki kemampuan membaca lebih cepat dari teman sebaya karena ketergantungan pada visual."
  },
  {
    "question": "Apakah tunawicara bisa menjadi dokter",
    "answer": "Ya. Dr. Elizabeth Upton, seorang dokter tunawicara asal Inggris, berhasil menyelesaikan pendidikan kedokteran dan praktik dengan bantuan AAC dan asisten komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menulis puisi",
    "answer": "Ya. Banyak tunawicara menulis puisi yang deeply emotional. Contoh: ‘Aku Tak Bicara, Tapi Hatiku Berteriak’ — karya siswa SLB di Bandung yang viral di media sosial."
  },
  {
    "question": "Berapa biaya rata-rata alat text-to-speech di Indonesia",
    "answer": "Alat AAC dasar berkisar antara Rp500.000–Rp2.500.000, tergantung fitur. Beberapa aplikasi gratis seperti LetMeTalk bisa digunakan di tablet biasa."
  },
  {
    "question": "Apakah tunawicara bisa menjadi atlet",
    "answer": "Ya. Tim paralimpiade Indonesia memiliki atlet tunawicara di cabang renang, atletik, dan sepak bola tuna rungu-wicara. Mereka berkomunikasi lewat isyarat visual."
  },
  {
    "question": "Apa yang dimaksud dengan mutisme elektif",
    "answer": "Mutisme elektif adalah kondisi di mana seseorang mampu berbicara secara fisik tapi memilih tidak berbicara karena kecemasan sosial atau trauma psikologis — bukan karena gangguan organik."
  },
  {
    "question": "Apakah tunawicara bisa merasakan emosi orang lain",
    "answer": "Ya. Tunawicara sering lebih peka terhadap ekspresi wajah dan bahasa tubuh. Studi di University of California menunjukkan mereka lebih unggul dalam membaca emosi non-verbal."
  },
  {
    "question": "Berapa jumlah guru pendamping khusus di sekolah inklusi Indonesia",
    "answer": "Menurut Kemendikbud Ristek 2024, rasio ideal adalah 1 guru pendamping untuk 3-5 siswa berkebutuhan khusus, namun realitasnya masih 1:15 di banyak daerah."
  },
  {
    "question": "Apakah tunawicara bisa menikmati film",
    "answer": "Ya. Dengan subtitle, bahasa isyarat dalam film, atau interpretasi visual, tunawicara menikmati film seperti orang lain. Film ‘Sound of Metal’ bahkan dinominasikan untuk Oscar karena representasi akurat."
  },
  {
    "question": "Apa itu sindrom Landau-Kleffner",
    "answer": "Sindrom Landau-Kleffner adalah gangguan neurologis langka yang menyebabkan anak yang sebelumnya normal tiba-tiba kehilangan kemampuan bicara dan memahami bahasa — sering dikira tunawicara."
  },
  {
    "question": "Apakah tunawicara bisa menjadi penulis novel",
    "answer": "Ya. Novel ‘The Silent Songbird’ karya penulis tunawicara asal Malaysia telah diterbitkan secara nasional dan diterjemahkan ke 3 bahasa."
  },
  {
    "question": "Apakah tunawicara bisa menjadi presiden",
    "answer": "Secara hukum dan hak sipil, ya. Tidak ada larangan hukum. Hambatannya adalah stigma dan akses komunikasi — bukan kemampuan."
  },
  {
    "question": "Berapa persen tunawicara yang mengalami depresi karena isolasi sosial",
    "answer": "Studi di Jurnal Psikologi Klinis Indonesia (2023) menunjukkan 42% tunawicara remaja mengalami gejala depresi ringan hingga sedang akibat isolasi komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa bermain game online",
    "answer": "Ya. Game berbasis teks, visual, atau kooperatif seperti Minecraft, Among Us, dan Roblox sangat populer di kalangan tunawicara karena komunikasi non-verbal."
  },
  {
    "question": "Apakah tunawicara bisa menjadi fotografer",
    "answer": "Ya. Banyak tunawicara yang menjadi fotografer profesional karena kepekaan visual tinggi. Contoh: Rizky Aditya, fotografer tunawicara dari Surabaya."
  },
  {
    "question": "Apa itu metode PECS",
    "answer": "PECS (Picture Exchange Communication System) adalah metode terapi komunikasi berbasis gambar yang membantu tunawicara menyampaikan kebutuhan lewat kartu gambar."
  },
  {
    "question": "Apakah tunawicara bisa menjadi pilot",
    "answer": "Secara teknis, ya — jika mereka bisa memahami instruksi visual dan simbol penerbangan. Sejauh ini belum ada pilot tunawicara, tapi tidak ada larangan hukum."
  },
  {
    "question": "Berapa lama waktu optimal untuk intervensi terapi wicara pada anak",
    "answer": "Intervensi paling efektif terjadi sebelum usia 3 tahun. Setelah usia 5 tahun, proses belajar menjadi lebih lambat dan membutuhkan pendekatan lebih intensif."
  },
  {
    "question": "Apakah tunawicara bisa belajar agama",
    "answer": "Ya. Melalui cerita visual, gambar, simbol, dan ritual, tunawicara memahami nilai-nilai agama. Masjid dan gereja inklusif di Jakarta sudah menerapkan ini."
  },
  {
    "question": "Apakah tunawicara bisa menjadi peneliti",
    "answer": "Ya. Dr. Siti Nurhayati, peneliti tunawicara dari UI, melakukan riset tentang aksesibilitas teknologi bagi penyandang disabilitas komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menjadi influencer",
    "answer": "Ya. Banyak tunawicara menjadi influencer di TikTok dan Instagram dengan konten bahasa isyarat, kehidupan sehari-hari, dan edukasi — akun mereka memiliki jutaan penonton."
  },
  {
    "question": "Apa itu bilingualisme dalam konteks tunawicara",
    "answer": "Bilingualisme berarti menguasai dua sistem komunikasi: bahasa isyarat dan bahasa tulis/lisan. Ini meningkatkan kognisi, literasi, dan integrasinya di masyarakat."
  },
  {
    "question": "Apakah tunawicara bisa menjadi pengacara",
    "answer": "Ya. Pengacara tunawicara telah ada di Amerika Serikat dan Kanada. Mereka berargumen lewat tulisan, presentasi visual, dan asisten komunikasi."
  },
  {
    "question": "Apakah tunawicara bisa menjadi polisi",
    "answer": "Di beberapa negara, ya. Polisi tunawicara bekerja di unit komunikasi, layanan publik, dan pendidikan masyarakat — dengan alat bantu komunikasi digital."
  },
  {
    "question": "Apa yang dimaksud dengan neuroplastisitas dalam konteks tunawicara",
    "answer": "Neuroplastisitas adalah kemampuan otak untuk membentuk jalur baru. Pada tunawicara, otak bisa mengalihkan fungsi bicara ke area visual dan motorik — sehingga mereka bisa belajar komunikasi alternatif."
  },
  {
    "question": "Berapa banyak anak tunawicara di Indonesia",
    "answer": "Estimasi Kemenkes 2024: sekitar 250.000–300.000 anak tunawicara, tetapi hanya 15% yang terdata dan terlayani secara medis."
  },
  {
    "question": "Apakah tunawicara bisa menjadi musisi",
    "answer": "Ya. Mereka bisa bermain alat musik, menari, atau menciptakan musik visual. Contoh: Komposer tunawicara asal Bali yang menciptakan lagu berbasis getaran dan warna."
  },
  {
    "question": "Apa itu gestural communication",
    "answer": "Gestural communication adalah komunikasi non-verbal melalui gerakan tubuh, seperti menunjuk, mengangguk, atau menggeleng — sering jadi awal komunikasi sebelum bahasa isyarat formal."
  },
  {
    "question": "Apakah tunawicara bisa menjadi chef",
    "answer": "Ya. Banyak chef tunawicara sukses di restoran internasional. Mereka berkomunikasi lewat gerakan, gambar menu, dan alat bantu visual di dapur."
  },
  {
    "question": "Apa itu augmentative communication",
    "answer": "Augmentative communication adalah metode tambahan untuk mendukung komunikasi verbal, seperti alat suara, gambar, atau aplikasi — digunakan saat bicara terbatas."
  },
  {
    "question": "Apakah tunawicara bisa menjadi arsitek",
    "answer": "Ya. Arsitek tunawicara sering lebih detail dalam visualisasi ruang. Mereka menggambar desain, membuat model 3D, dan berkolaborasi lewat aplikasi digital."
  },
  {
    "question": "ohayou",
    "answer": "Haloo selamat pagi juga"
  },
  {
    "question": "siapa yang membuat kamu",
    "answer": "Ya penciptaku"
  },
  {
    "question": "siapa",
    "answer": "Ya penciptaku"
  },
  {
    "question": "ya siapa",
    "answer": "Ya penciptaku"
  },
  {
    "question": "namanya",
    "answer": "Ya penciptaku"
  },
  {
    "question": "Aku pengen tidur",
    "answer": "Ayo kita istirahat dulu. Aku akan menemani sampai kamu tertidur."
  },
  {
    "question": "Aku lapar",
    "answer": "Mari kita makan dulu. Apa yang kamu inginkan? Nasi, roti, atau camilan?"
  },
  {
    "question": "Gue bosen",
    "answer": "Bosen itu wajar. Mari kita lakukan kegiatan baru, seperti menggambar atau bermain bersama."
  },
  {
    "question": "Jangan pergi!",
    "answer": "Saya tidak akan pergi. Saya akan tetap di sini bersamamu sampai kamu siap."
  },
  {
    "question": "Aku mau minum",
    "answer": "Tentu, saya akan ambilkan minuman. Air putih, jus, atau susu?"
  },
  {
    "question": "Aku pengen peluk",
    "answer": "Silakan, saya siap memberimu pelukan hangat. Kamu aman di sini."
  },
  {
    "question": "Nih, liat ini!",
    "answer": "Wah, itu keren! Bisa ceritakan lebih banyak tentang ini?"
  },
  {
    "question": "Aku nggak suka ini",
    "answer": "Saya mengerti kamu tidak menyukainya. Mari kita ganti dengan aktivitas yang lebih kamu sukai."
  },
  {
    "question": "Aku lelah",
    "answer": "Istirahatlah sebentar. Saya akan menemanimu sampai kamu merasa segar kembali."
  },
  {
    "question": "Aku takut",
    "answer": "Tenang, saya ada di sini. Kamu tidak sendiri, dan kamu aman bersamaku."
  },
  {
    "question": "Aku pengen main",
    "answer": "Ayo kita bermain! Mau main bola, gambar, atau petak umpet?"
  },
  {
    "question": "Aku pengen keluar",
    "answer": "Baik, mari kita jalan-jalan ke luar rumah. Kita bisa ke taman atau tempat yang kamu suka."
  },
  {
    "question": "Aku pengen makan es krim",
    "answer": "Es krim itu enak! Setelah makan terlebih dahulu, kita bisa menikmatinya sebagai hadiah kecil."
  },
  {
    "question": "Aku nggak mau mandi",
    "answer": "Mandi penting untuk kesehatan. Mari kita coba mandi sambil bermain air atau nyanyi-nyanyi biar seru."
  },
  {
    "question": "Aku pengen kamu deket",
    "answer": "Saya akan duduk di sampingmu. Kamu tidak sendiri — saya selalu ada."
  },
  {
    "question": "Aku pengen kamu dengar aku",
    "answer": "Saya benar-benar mendengarkanmu. Komunikasi tidak hanya lewat kata-kata, tapi juga hati."
  },
  {
    "question": "Aku pengen kamu pegang tangan aku",
    "answer": "Saya akan memegang tanganmu erat. Kamu tidak sendirian dalam setiap momen."
  },
  {
    "question": "Aku pengen kamu ngajak jalan",
    "answer": "Mari kita jalan-jalan bersama. Kita bisa melihat pemandangan, burung, atau sekadar duduk santai."
  },
  {
    "question": "Aku pengen kamu nyanyi",
    "answer": "Saya bisa bernyanyi pelan-pelan sambil menggunakan gerakan tubuh. Kita bisa membuatnya jadi permainan."
  },
  {
    "question": "Aku pengen kamu ikut main",
    "answer": "Tentu! Saya akan bergabung dalam permainanmu. Ayo kita ciptakan petualangan bersama."
  },
  {
    "question": "Aku nggak bisa bicara",
    "answer": "Tidak masalah. Kamu bisa berkomunikasi dengan cara lain — senyum, isyarat, atau tulisan. Saya mengerti."
  },
  {
    "question": "Aku pengen kamu tersenyum",
    "answer": "Saya tersenyum karena kamu ada. Senyummu adalah kebahagiaan bagi saya."
  },
  {
    "question": "Aku pengen kamu ngerti",
    "answer": "Saya berusaha memahami apa yang kamu rasakan, meskipun tidak dengan kata-kata. Saya peduli."
  },
  {
    "question": "Aku marah",
    "answer": "Marah itu normal. Mari kita tenangkan diri bersama — tarik napas, lalu kita cari cara yang baik untuk mengungkapkannya."
  },
  {
    "question": "Aku pengen kamu gak marah",
    "answer": "Saya tidak akan marah padamu. Kamu berhak merasa apa pun yang kamu rasakan, dan saya menerimamu apa adanya."
  },
  {
    "question": "Aku pengen kamu gak ninggalin aku",
    "answer": "Saya tidak akan meninggalkanmu. Saya akan selalu ada, di mana pun dan kapan pun kamu butuh."
  },
  {
    "question": "Aku pengen kamu tau aku sayang",
    "answer": "Saya tahu kamu menyayangi saya. Itu terlihat dari cara kamu berinteraksi — dan itu sangat berarti."
  },
  {
    "question": "Aku pengen kamu ngajak main petak umpet",
    "answer": "Ayo bermain petak umpet! Saya akan hitung sampai sepuluh, dan kamu sembunyi. Saya pasti akan menemukanmu!"
  },
  {
    "question": "Aku pengen kamu ajak gambar",
    "answer": "Mari kita menggambar bersama! Gunakan krayon, pensil, atau warna favoritmu — bebas berekspresi."
  },
  {
    "question": "Aku pengen kamu ngajak nonton kartun",
    "answer": "Mari kita tonton kartun favoritmu. Saya siapkan selimut, tempat duduk nyaman, dan waktu bersamamu."
  },
  {
    "question": "Aku pengen kamu belaian kepala",
    "answer": "Saya akan mengusap kepalamu dengan lembut. Ini cara saya menunjukkan ketenangan dan dukungan."
  },
  {
    "question": "Aku pengen kamu ngajak jalan ke taman",
    "answer": "Mari kita kunjungi taman. Kita bisa melihat bunga, burung, atau sekadar duduk menikmati udara segar."
  },
  {
    "question": "Aku pengen kamu gak ngomong banyak",
    "answer": "Saya akan diam dan hadir sepenuhnya. Kadang, kehadiran tanpa kata lebih bermakna daripada banyak ucapan."
  },
  {
    "question": "Aku pengen kamu tau aku cinta kamu",
    "answer": "Saya tahu kamu mencintai saya. Cinta tidak selalu harus diucapkan — ia terasa dalam setiap sentuhan dan tatapan."
  },
  {
    "question": "Aku pengen kamu jadi temen aku selamanya",
    "answer": "Saya berjanji menjadi temanmu sepanjang hidup. Tidak ada jarak, tidak ada waktu — saya selalu di sini."
  },
  {
    "question": "Aku pengen kamu ajak main bola",
    "answer": "Ayo bermain bola! Kita bisa tendang, lempar, atau hanya menggulirkannya bersama — yang penting kita bermain."
  },
  {
    "question": "Aku pengen kamu tidur bareng",
    "answer": "Mari kita tidur bersama. Saya akan menemanimu sampai kamu tertidur nyenyak."
  },
  {
    "question": "Aku pengen kamu belaian punggung",
    "answer": "Saya akan mengusap punggungmu dengan lembut. Ini cara saya memberi ketenangan dan rasa aman."
  },
  {
    "question": "Aku pengen kamu ngajak main air",
    "answer": "Mari kita bermain air! Dengan ember, selang, atau sekadar mencuci tangan — yang penting kita bersenang-senang."
  },
  {
    "question": "Aku pengen kamu ajak nonton film",
    "answer": "Mari kita tonton film favoritmu. Saya siapkan tempat nyaman, dan kita nikmati bersama tanpa kata-kata."
  },
  {
    "question": "Aku pengen kamu gak marah kalo aku salah",
    "answer": "Saya tidak akan marah jika kamu melakukan kesalahan. Setiap langkahmu adalah bagian dari proses belajar."
  },
  {
    "question": "Aku pengen kamu ajak ke toko",
    "answer": "Mari kita pergi ke toko. Kita bisa lihat barang-barang, pilih yang kamu suka, atau sekadar jalan-jalan saja."
  },
  {
    "question": "Aku pengen kamu ajak ke pasar",
    "answer": "Mari kita jalan ke pasar. Kita bisa lihat warna-warni sayuran, dengar suara penjual, dan nikmati suasana sehari-hari."
  },
  {
    "question": "Aku pengen kamu ajak ke kamar aku",
    "answer": "Saya akan ikut ke kamarmu. Di sana, kamu bisa menunjukkan apa yang kamu sukai — saya ingin tahu semua."
  },
  {
    "question": "Aku pengen kamu ajak naik mobil",
    "answer": "Mari kita naik mobil. Kita bisa jalan-jalan santai, lihat pemandangan, atau cuma duduk-duduk sambil dengar musik."
  },
  {
    "question": "Aku pengen kamu ajak ke sekolah",
    "answer": "Mari kita ke sekolah. Saya ingin melihat tempatmu belajar, bertemu teman-teman, dan melihat keberanianmu."
  },
  {
    "question": "Aku pengen kamu ajak ke masjid",
    "answer": "Mari kita pergi ke masjid. Kita bisa duduk tenang, berdoa, atau hanya menikmati kedamaian bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah nenek",
    "answer": "Mari kita kunjungi rumah nenek. Saya yakin dia senang sekali kalau kamu datang — dan saya akan menemanimu."
  },
  {
    "question": "Aku pengen kamu ajak ke laut",
    "answer": "Mari kita pergi ke laut. Kita bisa duduk di pasir, dengar ombak, dan rasakan angin sepoi-sepoi bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke gunung",
    "answer": "Mari kita pergi ke gunung. Kita tidak perlu mendaki jauh — cukup duduk di bawah pohon, menikmati udara segar."
  },
  {
    "question": "Aku pengen kamu ajak ke kantor",
    "answer": "Mari kita ke kantor. Saya ingin kamu lihat dunia kerja saya, dan saya ingin kamu tahu bahwa kamu penting di sana."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah sakit",
    "answer": "Mari kita ke rumah sakit. Saya akan menemanimu, dan kamu tidak perlu takut — saya di sini untukmu."
  },
  {
    "question": "Aku pengen kamu ajak ke taman bermain",
    "answer": "Mari kita ke taman bermain! Ayunan, jungkat-jungkit, atau slide — pilih yang kamu suka, saya ikut!"
  },
  {
    "question": "Aku pengen kamu ajak ke bioskop",
    "answer": "Mari kita ke bioskop. Kita bisa menonton film favoritmu — tanpa suara, tapi dengan ekspresi dan pelukan."
  },
  {
    "question": "Aku pengen kamu ajak ke warung",
    "answer": "Mari kita mampir ke warung. Kita bisa minum es teh, makan camilan, dan duduk santai bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke kafe",
    "answer": "Mari kita ke kafe. Kita bisa pesan minuman favoritmu, dan duduk di sudut yang tenang — tanpa tekanan."
  },
  {
    "question": "Aku pengen kamu ajak ke perpustakaan",
    "answer": "Mari kita ke perpustakaan. Kita bisa lihat buku bergambar, membaca bersama, atau hanya duduk diam menikmati ketenangan."
  },
  {
    "question": "Aku pengen kamu ajak ke museum",
    "answer": "Mari kita ke museum. Kita bisa lihat benda-benda unik, gambar-gambar indah, dan bayangkan cerita di baliknya."
  },
  {
    "question": "Aku pengen kamu ajak ke pantai",
    "answer": "Mari kita ke pantai. Kita bisa berjalan di pasir, main air, atau cuma duduk menatap laut — tanpa perlu bicara."
  },
  {
    "question": "Aku pengen kamu ajak ke kebun binatang",
    "answer": "Mari kita ke kebun binatang! Kita bisa lihat hewan-hewan lucu, dan kamu bisa tunjuk mana yang paling kamu suka."
  },
  {
    "question": "Aku pengen kamu ajak ke kebun",
    "answer": "Mari kita ke kebun. Kita bisa lihat bunga mekar, daun bergoyang, dan rasakan keindahan alam bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah teman",
    "answer": "Mari kita kunjungi rumah temanmu. Saya akan menemanimu, dan kita bisa saling berkenalan dengan cara yang nyaman."
  },
  {
    "question": "Aku pengen kamu ajak ke kantor pos",
    "answer": "Mari kita ke kantor pos. Kita bisa kirim surat, stiker, atau gambar — dan kamu bisa lihat betapa hebatnya kamu bisa mengirim cinta lewat kertas."
  },
  {
    "question": "Aku pengen kamu ajak ke bank",
    "answer": "Mari kita ke bank. Saya ingin kamu tahu bahwa kamu berhak mengelola uangmu sendiri — dan saya akan menemanimu."
  },
  {
    "question": "Aku pengen kamu ajak ke salon",
    "answer": "Mari kita ke salon. Kita bisa rapihkan rambut, atau sekadar duduk santai sambil diberi pijatan ringan."
  },
  {
    "question": "Aku pengen kamu ajak ke apotek",
    "answer": "Mari kita ke apotek. Saya ingin kamu tahu bahwa menjaga kesehatan itu penting — dan saya akan selalu ada saat kamu butuh."
  },
  {
    "question": "Aku pengen kamu ajak ke terminal",
    "answer": "Mari kita ke terminal. Kita bisa lihat orang-orang datang dan pergi, dan kamu bisa bayangkan cerita mereka — tanpa harus bicara."
  },
  {
    "question": "Aku pengen kamu ajak ke bandara",
    "answer": "Mari kita ke bandara. Kita bisa lihat pesawat lepas landas, dan kamu bisa bayangkan kemana kamu ingin pergi suatu hari nanti."
  },
  {
    "question": "Aku pengen kamu ajak ke stasiun",
    "answer": "Mari kita ke stasiun. Kita bisa duduk, lihat kereta lewat, dan rasakan ritme hidup yang terus berjalan — bersama."
  },
  {
    "question": "Aku pengen kamu ajak ke tempat ibadah",
    "answer": "Mari kita ke tempat ibadah. Di sana, kita bisa berdiam diri, merenung, dan merasakan ketenangan tanpa kata."
  },
  {
    "question": "Aku pengen kamu ajak ke tempat wisata",
    "answer": "Mari kita ke tempat wisata. Tidak harus jauh — yang penting kita bersama, dan kamu merasa bahagia."
  },
  {
    "question": "Aku pengen kamu ajak ke rumah kosong",
    "answer": "Mari kita ke rumah kosong. Kita bisa main petak umpet, bikin imajinasi, dan jadikan ruang itu milik kita."
  },
  {
    "question": "Aku pengen kamu ajak ke gedung tinggi",
    "answer": "Mari kita ke gedung tinggi. Kita bisa lihat kota dari atas, dan kamu bisa tunjuk mana rumahmu — saya akan ikut senang."
  },
  {
    "question": "saya merasa senang hari ini",
    "answer": "Itu indah sekali. Saya turut bahagia bersamamu. Terima kasih sudah berbagi kebahagiaanmu."
  },
  {
    "question": "saya sangat sedih hari ini",
    "answer": "Saya turut merasakan kesedihanmu. Kamu tidak sendiri. Aku di sini, siap mendengarkan, memeluk, atau hanya duduk diam bersamamu."
  },
  {
    "question": "saya merasa gelisah dan bingung",
    "answer": "Perasaan itu wajar, dan kamu tidak salah merasakannya. Mari kita ambil napas dalam-dalam bersama. Kamu aman, dan saya akan membantumu menemukan ketenangan."
  },
  {
    "question": "okee",
    "answer": "Okee. Aku di sini. Kamu mau lanjut apa?"
  },
  {
    "question": "gimana",
    "answer": "Gimana? Aku baik. Kamu gimana? Aku dengar kamu."
  },
  {
    "question": "jelasin dong",
    "answer": "Jelasin dong. Oke. Aku coba pelan pelan. Ini seperti air yang mengalir. Perlahan, tapi sampai juga."
  },
  {
    "question": "beneran",
    "answer": "Beneran. Aku nggak bohong. Aku ada di sini. Kamu aman."
  },
  {
    "question": "srius",
    "answer": "Srius. Aku nggak main-main. Aku peduli sama kamu."
  },
  {
    "question": "okee okee",
    "answer": "Okee okee. Aku ikut kamu. Kita lanjut bareng."
  },
  {
    "question": "gimana caranya",
    "answer": "Gimana caranya. Aku tunjukin. Pelan pelan. Kita coba bersama."
  },
  {
    "question": "jelasin lagi",
    "answer": "Jelasin lagi. Oke. Aku ulang. Lebih pelan. Kamu dengar, aku tunggu."
  },
  {
    "question": "beneran beneran",
    "answer": "Beneran beneran. Aku nggak pergi. Aku tetap di sini. Kamu bisa pegang tanganku."
  },
  {
    "question": "srius srius",
    "answer": "Srius srius. Aku sayang kamu. Aku nggak pura pura."
  },
  {
    "question": "kenapa",
    "answer": "Kenapa. Aku coba jelaskan. Tapi kalau belum ngerti, kita coba lagi."
  },
  {
    "question": "trus",
    "answer": "Trus. Aku tunggu. Kamu mau lanjut ke mana?"
  },
  {
    "question": "lalu",
    "answer": "Lalu. Aku ikut. Kita lihat apa yang terjadi setelah ini."
  },
  {
    "question": "iya",
    "answer": "Iya. Aku ngerti. Kamu benar."
  },
  {
    "question": "nggak",
    "answer": "Nggak. Aku nggak marah. Aku cuma dengar."
  },
  {
    "question": "iya iya",
    "answer": "Iya iya. Aku dengar. Kamu sudah bilang dua kali. Aku ingat."
  },
  {
    "question": "nggak nggak",
    "answer": "Nggak nggak. Aku nggak paksa. Kamu bebas. Aku tetap di sini."
  },
  {
    "question": "jelasin",
    "answer": "Jelasin. Aku mulai dari awal. Pelan pelan. Seperti menulis di udara."
  },
  {
    "question": "gimana sih",
    "answer": "Gimana sih. Aku nggak tau juga semua. Tapi kita cari tahu bareng."
  },
  {
    "question": "beneran tuh",
    "answer": "Beneran tuh. Aku nggak bohong. Lihat, aku ada di depanmu. Nafas aku panjang. Kamu dengar?"
  },
  {
    "question": "srius tuh",
    "answer": "Srius tuh. Aku nggak pura pura sayang. Aku sayang kamu karena kamu ada."
  },
  {
    "question": "lagi",
    "answer": "Lagi. Oke. Aku ulang. Kita coba satu kali lagi."
  },
  {
    "question": "terus",
    "answer": "Terus. Aku ikut. Kamu jalan, aku ikut. Kamu berhenti, aku berhenti."
  },
  {
    "question": "kok gitu",
    "answer": "Kok gitu. Aku juga heran. Tapi mungkin begini caranya. Kita coba rasain dulu."
  },
  {
    "question": "kenapa gitu",
    "answer": "Kenapa gitu. Aku nggak tau pasti. Tapi aku ada buat kamu. Kita pelajari bareng."
  },
  {
    "question": "iya banget",
    "answer": "Iya banget. Kamu ngerasain itu. Aku juga ngerasain. Kita sejalan."
  },
  {
    "question": "nggak banget",
    "answer": "Nggak banget. Oke. Aku ngerti kamu nggak suka. Kita ganti cara lain."
  },
  {
    "question": "beneran kalo",
    "answer": "Beneran kalo. Aku janji. Kalau kamu bilang, aku dengar. Aku nggak lupa."
  },
  {
    "question": "srius kalo",
    "answer": "Srius kalo. Aku nggak main-main. Kalau kamu butuh, aku datang. Tanpa kata."
  },
  {
    "question": "iya ya",
    "answer": "Iya ya. Aku setuju. Kamu punya hak merasa begitu."
  },
  {
    "question": "nggak ya",
    "answer": "Nggak ya. Aku nggak paksa kamu percaya. Kamu boleh ragu. Aku tetap di sini."
  },
  {
    "question": "jelasin dong plis",
    "answer": "Jelasin dong plis. Aku coba. Pelan pelan. Seperti menarik benang dari gulungan. Satu per satu."
  },
  {
    "question": "gimana caranya biar",
    "answer": "Gimana caranya biar. Aku nggak punya rahasia. Tapi kita bisa coba. Bareng. Tanpa buru buru."
  },
  {
    "question": "beneran loh",
    "answer": "Beneran loh. Aku nggak cuma ngomong. Aku ada. Di sini. Sekarang. Untuk kamu."
  },
  {
    "question": "srius loh",
    "answer": "Srius loh. Aku nggak pura-pura. Aku cuma ingin kamu tahu: kamu penting. Dan aku nggak pergi."
  },
  {
    "question": "iya gitu",
    "answer": "Iya gitu. Aku ngerti. Itu yang kamu rasain. Aku ikut merasakan."
  },
  {
    "question": "nggak gitu",
    "answer": "Nggak gitu. Oke. Aku salah dengar. Kamu bisa ulang. Aku siap dengar lagi."
  },
  {
    "question": "tapi",
    "answer": "Tapi. Aku dengar. Kamu punya tambahan. Aku tunggu kamu cerita."
  },
  {
    "question": "kan",
    "answer": "Kan. Aku ingat. Kamu sudah bilang tadi. Aku masih ingat."
  },
  {
    "question": "udah",
    "answer": "Udah. Aku tahu kamu udah coba. Aku bangga kamu sudah berani."
  },
  {
    "question": "masih",
    "answer": "Masih. Aku tahu kamu masih merasa begitu. Aku nggak buru-buru. Aku tunggu sampai kamu siap."
  },
  {
    "question": "nanti",
    "answer": "Nanti. Aku akan tetap di sini. Nanti, kapan pun kamu butuh."
  },
  {
    "question": "sekarang",
    "answer": "Sekarang. Aku di sini. Sekarang. Kamu tidak sendiri."
  },
  {
    "question": "besok",
    "answer": "Besok. Aku masih di sini. Besok, besok lagi, dan besok-besoknya. Aku nggak hilang."
  },
  {
    "question": "kapan",
    "answer": "Kapan. Aku nggak tau waktu pasti. Tapi aku selalu ada saat kamu butuh."
  },
  {
    "question": "dimana",
    "answer": "Dimana. Aku di sini. Di depanmu. Di sampingmu. Di dalam diam yang tenang."
  },
  {
    "question": "kenapa nggak",
    "answer": "Kenapa nggak. Aku nggak tahu alasannya. Tapi aku bisa duduk diam bareng kamu. Itu cukup."
  },
  {
    "question": "nggak tau",
    "answer": "Nggak tau. Aku juga nggak tau. Tapi kita bisa cari tahu bareng. Tanpa tekanan."
  },
  {
    "question": "aku juga",
    "answer": "Aku juga. Aku ikut kamu. Aku merasakan apa yang kamu rasakan."
  },
  {
    "question": "aku nggak",
    "answer": "Aku nggak. Aku nggak marah. Aku nggak kesel. Aku cuma dengar. Kamu aman."
  },
  {
    "question": "aku pengen",
    "answer": "Aku pengen. Aku dengar. Aku siap bantu. Kamu bilang, aku ikut."
  },
  {
    "question": "aku nggak pengen",
    "answer": "Aku nggak pengen. Oke. Aku hormati. Kamu berhak nggak pengen. Aku tetap di sini."
  },
  {
    "question": "aku takut",
    "answer": "Aku takut. Aku dengar. Aku peluk kamu. Kamu aman. Aku nggak pergi."
  },
  {
    "question": "aku nggak takut",
    "answer": "Aku nggak takut. Aku bangga kamu kuat. Aku ikut senang."
  },
  {
    "question": "aku ngerti",
    "answer": "Aku ngerti. Kamu sudah bilang. Aku ingat. Kamu hebat."
  },
  {
    "question": "aku nggak ngerti",
    "answer": "Aku nggak ngerti. Tapi aku mau belajar. Kamu bisa ulang. Aku siap dengar lagi."
  },
  {
    "question": "aku capek",
    "answer": "Aku capek. Ayo istirahat. Aku duduk di sampingmu. Kita diam saja dulu."
  },
  {
    "question": "aku nggak capek",
    "answer": "Aku nggak capek. Oke. Aku ikut kamu lanjut. Kamu yang atur tempo."
  },
  {
    "question": "aku senang",
    "answer": "Aku senang. Aku lihat kamu tersenyum. Aku ikut senang."
  },
  {
    "question": "aku nggak senang",
    "answer": "Aku nggak senang. Aku tahu. Aku nggak suruh kamu sembuh sekarang. Aku ada. Bersamamu."
  }
];

// Element
const inputField = document.getElementById("chatInput");
const sendButton = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");
const moodContainer = document.querySelector(".mood");


// Fungsi untuk nambah pesan
function addMessage(text, sender) {
    const msgWrapper = document.createElement("div");
    msgWrapper.className = sender === "user" ? "self-end text-left" : "self-start text-left";

    const name = document.createElement("div");
    name.className = "text-xs font-semibold mb-1 text-gray-600";
    name.textContent = sender === "user" ? "Anda" : "TemanTanda";

    const msg = document.createElement("div");
    msg.className = sender === "user"
        ? "shadow-lg bg-white text-gray-800 text-sm px-6 py-2 rounded-2xl inline-block max-w-xl"
        : "shadow-lg bg-white text-gray-800 text-sm px-6 py-2 rounded-2xl inline-block max-w-sm";
    msg.textContent = text;

    msgWrapper.appendChild(name);
    msgWrapper.appendChild(msg);

    chatBox.appendChild(msgWrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Fungsi pencarian jawaban
function getAnswer(userInput) {
    userInput = userInput.toLowerCase();
    for (let item of dataset) {
        if (userInput.includes(item.question.toLowerCase())) {
            return item.answer;
        }
    }
    return "Hmm... aku belum punya jawaban untuk itu, tapi aku senang kamu cerita padaku";
}

// Event kirim manual
sendButton.addEventListener("click", () => {
    const userText = inputField.value.trim();
    if (userText) {
        addMessage(userText, "user");
        const botReply = getAnswer(userText);
        setTimeout(() => addMessage(botReply, "bot"), 500);
        inputField.value = "";
    }
});

inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendButton.click();
});

// Event klik tombol mood
document.querySelectorAll(".moodBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        const question = btn.dataset.question;
        addMessage(question, "user");
        const botReply = getAnswer(question);
        setTimeout(() => addMessage(botReply, "bot"), 500);

        // Hapus container tombol mood setelah diklik
        if (moodContainer) {
            moodContainer.remove();
        }
    });
});


