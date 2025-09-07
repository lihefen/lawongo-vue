<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-28 11:42:11
 * @LastEditors: hean
 * @LastEditTime: 2025-08-08 12:55:13
-->
<template>
  <div class="main">
        <div class="banner"></div>
        <div class="title1"></div>
        <a href="javascript:;" @click="showeValuation = true" class="bar"></a>
        <div class="registerMain">
            <div class="input phoneInput">
                <span class="phoneIcon"></span>
                <input type="text" placeholder="Phone Number" v-model="mobileVal"></input>
            </div>

            <div class="input sendInput">
                <input type="text" v-model="codeVal" placeholder="Verification Code"></input>
                <a href="javascript:;" class="sendBtn" @click="sendCode">send</a>
            </div>
            <div class="privacy">
                <van-checkbox v-model="checked"></van-checkbox>
                I accept these <a href="javascript:;" @click="showUseAgreementDialog = true">Terms of Use</a> and <a href="javascript:;" @click="showPrivacyDialog = true"> Privacy Policy</a>
            </div>
            <a href="javascript:;" @click="loginCode" class="suggestionsBtn"></a>
        </div>
        <div class="title2"></div>
        <div class="teamMain">
            <Swiper class="teamSwiper" :options="swiperOptionTeam">
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="person">
                                <div class="photo1"></div>
                                <div class="name">Lawyer Zhang </div>
                                <div class="starList">
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                </div>
                            </div>
                            <div class="info">
                                <div class="year"><span>Duration：</span>7 years</div>
                                <div class="served"><span>served：</span>1000+person</div>
                                <div class="work">
                                    <span>Work area：</span>P2P Overdue，Credit Card Default，Multiple Loans
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="person">
                                <div class="photo2"></div>
                                <div class="name">Lawyer Zhang </div>
                                <div class="starList">
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                </div>
                            </div>
                            <div class="info">
                                <div class="year"><span>Duration：</span>8 years</div>
                                <div class="served"><span>served：</span>1000+person</div>
                                <div class="work">
                                    <span>Work area：</span>P2P Overdue，Credit Card Default，Multiple Loans
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="person">
                                <div class="photo3"></div>
                                <div class="name">Lawyer Zhang </div>
                                <div class="starList">
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                </div>
                            </div>
                            <div class="info">
                                <div class="year"><span>Duration：</span>6 years</div>
                                <div class="served"><span>served：</span>1000+person</div>
                                <div class="work">
                                    <span>Work area：</span>P2P Overdue，Credit Card Default，Multiple Loans
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="title3"></div>
        <div class="partnerMain">
            <Swiper class="partnerSwiper" :options="swiperOptionPartner">
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>




            </Swiper>
        </div>
        <div class="title4"></div>
        <div class="voiceMain">
            <Swiper class="voiceSwiper" :options="swiperOptionVoice">
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_1.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_2.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_3.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_4.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_5.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
        <div class="title5"></div>
        <div class="about-text1">-Core members of our team-</div>
        <div class="aboutImg"></div>
        <div class="about-text2">-A Trusted Debt Relief Partner-</div>
        <div class="platWrap">
            <div class="inner">
                <div class="item">
                    <div class="num">8000<span>+</span></div>
                    <div class="text">Suceess stories</div>
                </div>

                <div class="item">
                    <div class="num">500<span>+</span></div>
                    <div class="text">Registered lawyers</div>
                </div>

                <div class="item">
                    <div class="num"><span>4.9</span></div>
                    <div class="text">Excellent rating</div>
                </div>
            </div>
        </div>
        <div class="title6"></div>
        <div class="fagMain">
            <van-collapse v-model="activeNames">
                <van-collapse-item :title="item.title" :name="item.name" v-for="(item,index) in faqList" :key="index + 88787">
                   <div v-html="item.content"></div>
                </van-collapse-item>
             
            </van-collapse>
        </div>

        <div class="btmText">
            LawOnGo, Your legal advisor！
        </div>
        <a href="https://wa.me/6282324599898" class="contactBtn"></a>

        <van-popup v-model="showeValuation">
            <div class="valuationDialog">
                <div class="main">
                    <a href="/h5/evaluation-page/index.html" class="btn"></a>
                </div>
                <a href="javascript:;" class="closeBtn" @click="showeValuation = false"></a>
            </div>
        </van-popup>


        <van-popup v-model="showSuccessDialog">

            <div class="successDialog">
                <div class="successIcon"></div>
                <div class="successTitle">Successfully</div>
                <div class="successText">Our mediation advisor will <br/>
                    contact you via WhatsApp.
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.kopa.lawongo&pcampaignid=web_share" class="successBtn1"></a>
                <a href="https://wa.me/6282324599898"" class="successBtn2"></a>
                <a href="javascript:;" class="closeBtn" @click="showSuccessDialog = false"></a>
            </div>
        </van-popup>

        <van-popup v-model="showUseAgreementDialog" position="bottom">
            <div class="agreementDialog">
                <div class="main">
                    <div class="content">
                        <template>
                            <div class="">
                                <div class="ql-container ql-snow"><div class="ql-editor"><p><strong>SYARAT DAN KETENTUAN PENGGUNAAN PLATFORM LAWONGO</strong></p><p><strong>Efektif per: [*]</strong></p><p><strong>Selamat datang di LawOnGo,</strong></p><p><strong>HARAP BACA DENGAN TELITI DAN SEKSAMA SYARAT DAN KETENTUAN INI SEBELUM MENGGUNAKAN PLATFORM LAWONGO.</strong></p><p class="ql-align-justify">Dengan mengakses dan/atau mendaftar dan/atau menggunakan LawOnGo dan/atau menikmati Layanan yang tersedia, Anda menyatakan bahwa Anda telah membaca, memahami, mengetahui, menerima, dan menyetujui seluruh informasi, syarat, dan ketentuan penggunaan platform LawOnGo yang terdapat dalam dokumen ini. Jika Anda tidak menyetujui sebagian atau seluruh Syarat &amp; Ketentuan, Anda tidak diperkenankan untuk menggunakan Layanan.</p><p>&nbsp;</p><p><br></p><p><strong>DEFINISI</strong></p><p><strong>Kecuali secara tegas ditentukan lain, istilah berikut memiliki arti sebagai berikut:</strong></p><ol><li class="ql-align-justify"><strong>LawOnGo</strong> adalah sebuah platform teknologi berbasis kecerdasan buatan (AI) yang dikelola oleh PT Solusi Pertiwi Teknologi ("LawOnGo"), yang mempertemukan Pengguna dengan Penyedia Jasa hukum (advokat) untuk menangani permasalahan hukum terkait utang, termasuk namun tidak terbatas pada penyelesaian sengketa, negosiasi dan/atau mediasi dengan kreditur, dan restrukturisasi kewajiban pembayaran utang.</li><li class="ql-align-justify"><strong>Layanan</strong> adalah seluruh jasa dan fitur yang tersedia dalam platform LawOnGo, termasuk:</li></ol><p class="ql-align-justify">○&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konsultasi hukum berbasis pesan, panggilan suara, atau video;</p><p class="ql-align-justify">○&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pembuatan dan pengiriman dokumen hukum yang relevan;</p><p class="ql-align-justify">○&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bantuan dalam negosiasi atau penyelesaian sengketa utang;</p><p class="ql-align-justify">○&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rekomendasi atas langkah hukum awal yang dapat diambil Pengguna; dan</p><p class="ql-align-justify">○&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Layanan lain yang dapat dikembangkan dari waktu ke waktu.</p><ol><li class="ql-align-justify"><strong>Pengguna</strong> adalah pihak perorangan atau badan hukum yang menggunakan LawOnGo untuk mendapatkan Layanan.</li><li class="ql-align-justify"><strong>Penyedia Jasa</strong> adalah Advokat yang telah terdaftar dan bekerja sama secara resmi dengan LawOnGo dalam memberikan layanan hukum kepada Pengguna. Penyedia Jasa bukan bagian dari LawOnGo secara kelembagaan maupun korporasi, namun bekerjasama berdasarkan perjanjian khusus dengan LawOnGo.</li><li class="ql-align-justify"><strong>Akun</strong> adalah akun yang didaftarkan oleh Pengguna atau Penyedia Jasa pada sistem LawOnGo.</li><li class="ql-align-justify"><strong>Materi</strong> adalah semua informasi, panduan, artikel, konten hukum, data, dan lainnya yang tersedia pada platform LawOnGo.</li><li class="ql-align-justify"><strong>Informasi Pribadi</strong> adalah data yang diberikan Pengguna atau Penyedia Jasa termasuk namun tidak terbatas pada nama, alamat, nomor identitas, data kontak, informasi finansial, dan dokumen hukum pribadi.</li><li class="ql-align-justify"><strong>Kebijakan Privasi</strong> adalah ketentuan terpisah yang menjelaskan cara LawOnGo mengumpulkan, menyimpan, dan melindungi Informasi Pribadi.</li><li class="ql-align-justify"><strong>Hari dan Jam Kerja</strong> merujuk pada hari Senin hingga Jumat pukul 09.00–17.00 WIB, kecuali hari libur nasional.</li></ol><p>&nbsp;</p><p><br></p><p><strong>KETENTUAN UMUM PENGGUNAAN PLATFORM</strong></p><ol><li class="ql-align-justify">LawOnGo bukan firma hukum dan tidak memberikan layanan hukum secara langsung.</li><li class="ql-align-justify">Hubungan hukum antara Pengguna dan Penyedia Jasa hanya terbentuk setelah adanya kesepakatan konsultasi, dan merupakan hubungan Advokat-Klien yang diatur oleh perjanjian dan hukum dan etika profesi yang berlaku.</li><li class="ql-align-justify">LawOnGo bertindak hanya sebagai penghubung, dan tidak bertanggung jawab atas kualitas atau hasil dari layanan hukum yang diberikan oleh Penyedia Jasa.</li><li class="ql-align-justify">Setiap rekomendasi awal dari sistem AI adalah panduan umum dan tidak menggantikan konsultasi hukum profesional.</li><li class="ql-align-justify">LawOnGo tidak menjamin bahwa penyelesaian masalah utang akan berhasil, dan tidak bertanggung jawab atas setiap kerugian akibat tindakan berdasarkan informasi dari platform.</li></ol><p>&nbsp;</p><p><br></p><p><strong>AKUN DAN KEAMANAN</strong></p><ol><li>Pengguna wajib memberikan informasi yang akurat, lengkap, dan benar pada saat pendaftaran.</li><li>Pengguna bertanggung jawab atas kerahasiaan akun dan kata sandi serta seluruh aktivitas yang terjadi melalui akun tersebut.</li><li>LawOnGo tidak bertanggung jawab atas penyalahgunaan akun oleh pihak ketiga yang terjadi karena kelalaian Pengguna dalam menjaga keamanan akses akun.</li><li>Jika terjadi pelanggaran keamanan, pengguna wajib segera melaporkan kepada tim Customer Support LawOnGo.</li></ol><p>&nbsp;</p><p><strong>PELAKSANAAN DAN PENGAKHIRAN LAYANAN</strong></p><ol><li class="ql-align-justify">Layanan akan dimulai setelah adanya persetujuan antara Pengguna dan Penyedia Jasa, serta persetujuan antara Advokat dengan Pengguna.</li><li class="ql-align-justify">LawOnGo berhak menghentikan sementara atau permanen akses akun jika ditemukan pelanggaran terhadap Syarat &amp; Ketentuan atau penyalahgunaan layanan, pelanggaran hukum, atau dugaan aktivitas mencurigakan yang dapat merugikan pihak manapun dalam platform.</li><li class="ql-align-justify">Pengguna dapat mengakhiri penggunaan Layanan kapan saja, dengan pemberitahuan melalui platform atau media resmi LawOnGo namun kewajiban pembayaran atas layanan yang telah dilakukan tetap berlaku.</li><li class="ql-align-justify">LawOnGo berhak mengakhiri atau menolak layanan kepada Pengguna apabila ditemukan indikasi pelanggaran hukum, penipuan, atau tindakan yang bertentangan dengan tujuan platform.</li><li class="ql-align-justify">Komunikasi antara Pengguna dan Penyedia Jasa tunduk pada ketentuan kerahasiaan profesi sebagaimana diatur dalam UU Advokat dan Kode Etik Advokat yang berlaku di Indonesia.</li></ol><p>&nbsp;</p><p><br></p><p><strong>BATASAN TANGGUNG JAWAB</strong></p><ol><li class="ql-align-justify">LawOnGo tidak bertanggung jawab atas isi komunikasi, saran hukum, atau dokumen yang diberikan Penyedia Jasa kepada Pengguna.</li><li class="ql-align-justify">LawOnGo berkomitmen menjaga keamanan sistem sesuai standar PSE yang berlaku. Namun, LawOnGo tidak bertanggung jawab atas keterlambatan atau gangguan akses layanan yang disebabkan oleh force majeure, gangguan pihak ketiga, atau kesalahan sistem di luar kendali LawOnGo, sepanjang telah dilakukan upaya pengamanan dan pemulihan sesuai kewajiban yang berlaku.</li><li class="ql-align-justify">Pengguna menggunakan platform atas risiko sendiri dan bertanggung jawab penuh atas keputusan hukum yang diambil berdasarkan saran atau informasi dari platform.</li><li class="ql-align-justify">Fitur berbasis kecerdasan buatan (AI) pada platform LawOnGo hanya berfungsi sebagai alat bantu analisis awal dan penyedia referensi umum. AI tidak melakukan penilaian hukum secara independen, tidak menggantikan peran Advokat, dan tidak dapat dijadikan dasar tunggal dalam pengambilan keputusan hukum. Segala tindakan hukum yang diambil Pengguna tetap harus dikonsultasikan terlebih dahulu dengan Advokat yang berwenang.</li></ol><p>&nbsp;</p><p><br></p><p class="ql-align-justify"><strong>PERUBAHAN SYARAT &amp; KETENTUAN</strong></p><p class="ql-align-justify"><strong>LawOnGo berhak untuk mengubah Syarat &amp; Ketentuan ini sewaktu-waktu. Setiap perubahan akan diberitahukan melalui platform. Penggunaan layanan setelah tanggal berlakunya perubahan dianggap sebagai bentuk persetujuan terhadap Syarat &amp; Ketentuan yang baru.</strong></p><p class="ql-align-justify"><strong>&nbsp;</strong></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong>LAIN-LAIN</strong></p><ol><li class="ql-align-justify">Syarat &amp; Ketentuan ini tunduk pada hukum Republik Indonesia.</li><li class="ql-align-justify">Jika terdapat bagian dari ketentuan ini yang dinyatakan tidak sah&nbsp;atau tidak berlaku, atau tidak dapat dilaksanakan oleh pengadilan yang berwenang, maka bagian tersebut akan dihapus sejauh yang diperlukan dan tidak memengaruhi keberlakuan bagian lainnya..</li></ol><p class="ql-align-justify">Untuk pertanyaan atau pengaduan, silakan hubungi layanan pelanggan LawOnGo melalui [alamat email/call center akan ditentukan].</p><p><br></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div></div>
                            </div>
                        </template>

                    </div>
                    <a href="javascript:;" class="agreementBtn">Get It</a>
                </div>
                <a href="javascript:;" class="closeBtn" @click="showAgreementDialog = false"></a>
               
            </div>
        </van-popup>

        <van-popup v-model="showPrivacyDialog" position="bottom">
            <div class="agreementDialog">
                <div class="main">
                    <div class="content">
                        <template>
                            <div>
                                <div class="ql-container ql-snow"><div class="ql-editor" ><h1><strong>KEBIJAKAN PRIVASI LAWONGO</strong></h1><p><strong>Nomor Dokumen:</strong><em> </em>LOG/PP/001/V1</p><p><strong><em>Versi:</em></strong><em> </em>1.0</p><p><strong><em>Tanggal Berlaku:</em></strong><em> [20250730]</em></p><p><strong>&nbsp;</strong></p><p><strong>MOHON BACA SELURUH KEBIJAKAN PRIVASI INI DENGAN CERMAT DAN SEKSAMA SEBELUM MENGGUNAKAN LAYANAN YANG TERSEDIA DALAM LAWONGO</strong></p><p class="ql-align-justify">LawOnGo sangat menjunjung tinggi prinsip perlindungan data pribadi dan berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana LawOnGo mengumpulkan, menggunakan, memproses, menyimpan, mengungkapkan, dan melindungi data pribadi Anda saat Anda menggunakan layanan kami dalam menyelesaikan permasalahan hukum utang melalui teknologi kecerdasan buatan yang terhubung dengan advokat terdaftar.</p><p class="ql-align-justify">LawOnGo memproses data pribadi berdasarkan persetujuan Anda sebagai subjek data, atau berdasarkan ketentuan hukum yang berlaku, perjanjian, atau kepentingan sah sebagaimana diatur dalam Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP). Kecuali ditentukan lain, istilah-istilah dalam Kebijakan Privasi ini memiliki arti sebagaimana dimaksud dalam Syarat dan Ketentuan Penggunaan LawOnGo.</p><p>&nbsp;</p><h2><strong>1. PENGUMPULAN DAN PENGGUNAAN INFORMASI</strong></h2><p class="ql-align-justify">Anda dapat mengakses situs dan membaca konten informatif LawOnGo tanpa membuat akun. Namun, untuk menggunakan layanan konsultasi hukum atau fitur penyelesaian utang, Anda diwajibkan untuk membuat akun dan menyetujui Syarat &amp; Ketentuan serta Kebijakan Privasi ini.</p><p class="ql-align-justify">&nbsp;</p><h3><strong style="color: black;">Informasi Pribadi Pengguna</strong></h3><p>Kami mengumpulkan data berikut saat Anda mendaftar dan menggunakan layanan:</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nama lengkap (sesuai KTP/Paspor)</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tanggal lahir</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jenis kelamin</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nomor telepon dan/atau email aktif</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alamat tempat tinggal</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alamat sesuai KTP</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informasi keuangan dasar (termasuk namun tidak terbatas pada:&nbsp;jumlah utang, nama kreditur, status pembayaran, penghasilan per bulan)</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dokumen pendukung (termasuk namun tidak terbatas pada: salinan perjanjian pinjaman, bukti tagihan, surat somasi, dll.)</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aktivitas penggunaan layanan konsultasi hukum melalui aplikasi sebelumnya</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify">Beberapa informasi di atas dapat dikategorikan sebagai data pribadi yang bersifat spesifik sesuai UU PDP. LawOnGo akan menangani informasi tersebut dengan kehati-hatian dan hanya untuk tujuan yang sah.</p><p class="ql-align-justify">&nbsp;</p><h3 class="ql-align-justify"><strong style="color: black;">Informasi Pribadi Advokat (Penyedia Jasa Hukum)</strong></h3><p>Kami juga mengumpulkan informasi dari penyedia jasa hukum, untuk keperluan verifikasi dan pemrosesan layanan, LawOnGo akan meminta:</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nama lengkap</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nomor HP dan email</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nama dan Alamat Kantor Hukum</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Latar belakang pendidikan</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spesialisasi dan preferensi penanganan kasus serta lamanya praktek sebagai Advokat</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Riwayat kesuksesan perkara (tanpa menyebutkan identitas para pihak) terkait penyelesaian utang</p><p>&nbsp;</p><h3><strong style="color: black;">Penggunaan Data</strong></h3><p>Data pribadi dikumpulkan dengan persetujuan Pengguna dan untuk tujuan:</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verifikasi identitas pengguna dan advokat</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pemberian rekomendasi hukum berbasis AI</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pemrosesan otomatis untuk mempertemukan pengguna dengan advokat yang sesuai</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pengolahan dan penyajian analisa hukum dan keuangan</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pengiriman notifikasi, surat elektronik, dan informasi terkait layanan</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Membantu proses penyaringan awal dan pemberian rekomendasi awal berbasis AI secara informatif, tanpa menggantikan pertimbangan hukum profesional;</p><p>●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kepatuhan terhadap hukum yang berlaku</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><h2><strong>2. KERAHASIAAN DAN PERLINDUNGAN INFORMASI PRIBADI</strong></h2><p class="ql-align-justify">LawOnGo menerapkan langkah-langkah teknis dan organisasi yang wajar untuk menjaga keamanan data pribadi Anda, termasuk enkripsi, autentikasi dua faktor, dan audit sistem. Namun, transmisi data melalui internet tidak sepenuhnya aman, dan Anda memahami bahwa risiko tersebut berada di luar kendali LawOnGo.</p><p class="ql-align-justify">Informasi Anda disimpan di server yang dikelola secara profesional di pusat data terpilih dan tunduk pada ketentuan kerahasiaan dan perlindungan data sesuai peraturan perundang-undangan di Indonesia.</p><p>&nbsp;</p><p class="ql-align-justify">Apabila terdapat pemrosesan data oleh pihak ketiga di luar wilayah Indonesia, kami akan memastikan bahwa transfer tersebut dilakukan sesuai ketentuan perlindungan data lintas negara.</p><p>&nbsp;</p><h2><strong>3. PENGUNGKAPAN INFORMASI PRIBADI</strong></h2><p>LawOnGo dapat mengungkapkan informasi pribadi Anda kepada pihak ketiga hanya dalam keadaan berikut:</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Untuk menghubungkan Anda dengan advokat dan antara advokat dengan kreditur secara sah dan aman</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jika diminta oleh lembaga penegak hukum atau regulator sesuai kewenangan hukum</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dalam rangka penyelesaian sengketa antara Anda dengan pihak lain melalui layanan LawOnGo</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kepada vendor atau penyedia layanan pendukung yang tunduk pada perjanjian kerahasiaan</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dengan persetujuan eksplisit Anda</p><p>&nbsp;</p><h2><strong>4. PENYIMPANAN DAN PENGHAPUSAN DATA</strong></h2><p class="ql-align-justify">LawOnGo akan menyimpan data pribadi Anda selama akun masih aktif atau selama diperlukan untuk mematuhi ketentuan hukum yang berlaku. Dokumen terkait layanan hukum akan disimpan selama 30 (tiga puluh) hari terhitung setelah jasa hukum dinyatakan selesai, kecuali diwajibkan lain oleh hukum yang berlaku di Indonesia.</p><p class="ql-align-justify">Permintaan penghapusan akun dan data pribadi dapat diajukan melalui email resmi. Namun, Kami tetap dapat menyimpan data tertentu untuk tujuan audit, keamanan sistem, atau kepatuhan hukum selama periode yang diperbolehkan oleh peraturan perundang-undangan.</p><p>&nbsp;</p><p>&nbsp;</p><h2><strong>5. HAK-HAK PENGGUNA</strong></h2><p class="ql-align-justify">Anda memiliki hak untuk:</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mengakses dan memperbarui data pribadi Anda</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menarik persetujuan atas pemrosesan data pribadi Anda</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mengajukan keberatan atas penyalahgunaan data</p><p class="ql-align-justify">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meminta penghapusan atau pembatasan pemrosesan data</p><p class="ql-align-justify">Permintaan tersebut dapat diajukan melalui email ke: [cs@lawongo.id]</p><p>Semua permintaan akan ditindaklanjuti sesuai prosedur dan waktu tanggap yang ditetapkan oleh hukum.</p><p>&nbsp;</p><p>&nbsp;</p><h2><strong>6. KEGAGALAN PERLINDUNGAN DATA</strong></h2><p class="ql-align-justify">Dalam hal terjadi kebocoran atau pelanggaran data pribadi, LawOnGo akan memberitahu Anda paling lambat dalam 3 x 24 jam melalui surat elektronik beserta langkah mitigasi yang telah dilakukan.</p><p>&nbsp;</p><p>&nbsp;</p><h2><strong>7. PEMBAHARUAN KEBIJAKAN PRIVASI</strong></h2><p class="ql-align-justify">LawOnGo dapat mengubah isi Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahukan perubahan tersebut melalui email atau notifikasi dalam aplikasi. Dengan terus menggunakan layanan LawOnGo setelah pemberitahuan tersebut, Anda dianggap menyetujui Kebijakan Privasi terbaru.</p><p class="ql-align-justify">&nbsp;</p><p><br></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div></div>
                                </div>
                        </template>
                    </div>
                    <a href="javascript:;" class="agreementBtn">Get It</a>
                </div>
                <a href="javascript:;" class="closeBtn" @click="showPrivacyDialog = false"></a>
               
            </div>
        </van-popup>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>