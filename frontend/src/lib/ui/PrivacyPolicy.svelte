<script>
	import { _ } from '$lib/i18n'
	import { setupI18n, isLocaleLoaded, locale } from '$lib/i18n'
</script>

<div>
	{#if $locale == "ru"}
		<h1>Политика конфиденциальности</h1>
		<p>A1 Telecom Privnote серьезно относится к проблеме конфиденциальности инфомации, поскольку основная цель сайта - ее сохранение и защищенная передача. В данной политике изложены меры, принимаемые A1 Telecom Privnote для защиты конфиденциальности своих пользователей.</p>
		<h2>1. Описание сервиса</h2>
		<p>A1 Telecom Privnote - это  веб-сервис, позволяющий пользователям создавать зашифрованные записки, которыми они могут обмениваться через интернет в виде уникальных одноразовых HTTPS URL (далее ссылки), которые по умолчанию истекают после первого доступа к ним через любой веб-браузер. Однако сервис также позволяет выставлять параметры по количеству доступов к записке или времени ее доступности.</p>
		<p>Поскольку  A1 Telecom Privnote не предоставляет никаких способов для передачи ссылки, ответственность за отправку ссылки полностью лежит на пользователях A1 Telecom Privnote .</p>
		<p>В зависимости от выбранного вами канала связи (например, электронная почта,  SMS, телефон, служба обмена мгновенными сообщениями, мессенджеры, социальные сети) может существовать определенный риск того, что третьи лица перехватят ваше сообщение, получат информацию о переданной ссылке и, таким образом, смогут прочитать вашу записку.</p>
		<h2>2. Как обрабатываются записки и их содержимое</h2>
		<p>Ссылка генерируется в браузере пользователя и ни в коем случае не отправляется в  A1 Telecom Privnote как таковая. Таким образом, ссылка находится только в руках отправителя (а позже, возможно, и получателя). Поэтому не существует способа восстановить записку, если пользователь  A1 Telecom Privnote потеряет ссылку.</p>
		<p>Поскольку только ссылка связывает ключ расшифровки с содержимым записки, а  A1 Telecom Privnote не имеет ссылки, ни одна заметка не хранится в  A1 Telecom Privnote в состоянии, пригодном для чтения. Это гарантирует, что никто (включая администраторов A1 Telecom Privnote ) не сможет прочитать созданную записку.</p>
		<p>При использовании функционала  A1 Telecom Privnote по умолчанию, когда записка извлекается, ее данные полностью удаляются из A1 Telecom Privnote . Из этого следует, что нет абсолютно никакого способа восстановить ее снова.</p>
		<p>При создании записки, если выбрать "Опции" и указать временной интервал для удаления заметки, то независимо от того, сколько раз записка будет извлечена, она будет удалена только по истечении указанного времени.</p>
		<p>После удаления заметки из сервиса A1 Telecom Privnote ее невозможно восстановить.</p>
		<p>Команда системных администраторов  A1 Telecom Privnote сделает все возможное, чтобы защитить сайт от несанкционированного доступа, модификации или уничтожения данных. Но даже если кому-то или чему-то удастся получить доступ к базе данных, они не смогут прочитать записки, поскольку их содержимое зашифровано и не может быть расшифровано без ссылок, которыми A1 Telecom Privnote никогда не располагала.</p>
		<h2>3. Обработка IP-адресов</h2>
		<p>A1 Telecom Privnote не регистрирует IP-адреса; они обрабатываются для обеспечения связи с серверами A1 Telecom Privnote, но не являются частью файлов журнала. IP-адреса удаляются, как только они перестают быть необходимыми для осуществления связи.</p>
		<h2>4. Псевдонимные данные</h2>
		<p>Создатель записки может внести в нее личные данные. Даже если эти данные зашифрованы, они могут быть расшифрованы снова и, таким образом, представляют собой псевдонимные (личные) данные. В любом случае, из базы данных  A1 Telecom Privnote невозможно вычислить создателя записки, так как  A1 Telecom Privnote не хранит IP-адреса.</p>
		<p>Расшифровка данных записки принадлежит пользователям (отправителю и получателю).  A1 Telecom Privnote не может расшифровать заметку и получить доступ к данным (личным или иным), представленным создателем, поскольку  A1 Telecom Privnote никогда не владеет ключом расшифровки, который содержится только в ссылке.</p>
		<h2>5. Отказ от ответственности</h2>
		<p>Если человек переходит по ссылке https://privnote.a1call.me/, A1 Telecom Privnote снимает с себя всякую ответственность за содержание записки.</p>
		<h2>6. Разглашение данных третьим лицам</h2>
		<p>A1 Telecom Privnote  не передает и не продает никакую информацию другим лицам, а также не использует ее каким-либо образом, не упомянутым в данной Политике конфиденциальности.</p>
		<h2>7. Использование файлов cookie</h2>
		<p>A1 Telecom Privnote использует cookies (небольшие текстовые файлы, которые сохраняются на вашем компьютере браузером при посещении веб-сайта) в наших собственных интересах для улучшения использования нашего сайта и услуг. В некоторых случаях они также используются в рекламных целях. Ниже перечислены типы файлов cookie, которые использует A1 Telecom Privnote:</p>
		<i>Функциональные файлы cookie</i>
		<p>A1 Telecom Privnote  использует постоянные файлы cookie для поддержания сессии на предпочтительном языке пользователя и для записи вашего уведомления о том, что  A1 Telecom Privnote  использует файлы cookie, как объясняется в этом разделе. Также некоторые cookies используются как часть механизма скрытия ссылок при чтении записки, эти cookies должны быть включены для работы  A1 Telecom Privnote  и удаляются сразу после получения записки.</p>
		<i>Нефункциональные файлы cookie</i>
		<p>Используются в коммерческих и рекламных целях. Нефункциональные файлы cookie размещаются третьими лицами. В случае граждан стран Европы эти файлы cookie не хранят персональные данные (неперсонализированная реклама).</p>
		<p>Если вы хотите удалить определенные файлы cookie или заблокировать их сохранение в вашем браузере, это возможно через настройки браузера для файлов cookie. Однако, если вы это сделаете, сайт может работать не так, как ожидалось.</p>
		<h2>8. Срок действия настоящей Политики конфиденциальности</h2>
		<p>Пожалуйста, обратите внимание, что настоящая Политика конфиденциальности может время от времени меняться. Мы ожидаем, что большинство изменений будут незначительными. Независимо от этого, мы будем публиковать любые изменения Политики на этой странице, а если изменения будут значительными, мы предоставим более заметное уведомление, например, сообщение на главной странице.</p>
	{:else if $locale == "ua"}
		<h1>Політика Приватності</h1>
		<p>A1 Telecom Privnote серйозно ставиться до проблеми конфіденційності інформації, так як основною метою сайту є її збереження та безпечна передача. У даній політиці викладені заходи, що вживаються A1 Telecom Privnote задля захисту конфіденційності своїх користувачів.</p>
		<h2>1. Опис сервісу</h2>
		<p>A1 Telecom Privnote - це веб-сервіс, що дозволяє користувачам створювати зашифровані записки, якими вони можуть обмінюватися через інтернет у вигляді унікальних одноразових URL-адрес (далі посилання), які за замовчуванням перестають працювати після першого доступу до них через будь-який веб-браузер. Однак сервіс також дозволяє виставляти параметри кількості доступів до записки або часу її доступності.</p>
		<p>Оскільки A1 Telecom Privnote не надає жодних способів передачі посилання, відповідальність за відправку посилання повністю несуть користувачі A1 Telecom Privnote.</p>
		<p>В залежності від обраного вами каналу зв'язку (наприклад, електронна пошта, SMS, телефон, служба обміну миттєвими повідомленнями, месенджери, соціальні мережі) може існувати певний ризик того, що треті особи перехоплять ваше повідомлення, отримають інформацію про надіслане посилання і, таким чином, зможуть прочитати вашу записку.</p>
		<h2>2. Як обробляються записки та їх зміст</h2>
		<p>Посилання генерується в браузері користувача і в жодному разі не відправляється в A1 Telecom Privnote як таке. Таким чином, посилання знаходиться лише у відправника (а пізніше, можливо, й також в одержувача). Тому немає можливості відновити записку, якщо користувач A1 Telecom Privnote втратить посилання.</p>
		<p>Оскільки лише посилання пов'язує ключ розшифровки зі змістом записки, а A1 Telecom Privnote не має посилання, жодна записка не зберігається в A1 Telecom Privnote у стані, придатному для читання. Це гарантує, що ніхто (включно з адміністраторами A1 Telecom Privnote) не зможе прочитати створену записку.</p>
		<p>За використання функціоналу A1 Telecom Privnote за замовчуванням, коли записка буде вилучена з сервісу A1 Telecom Privnote, її дані повністю видаляються з A1 Telecom Privnote. З цього випливає, що немає жодного способу відновити її знову.</p>
		<p>При створенні записки, якщо вибрати "Опції" і вказати часовий інтервал для видалення записки, незалежно від того, скільки разів записка буде вилучена з сервісу A1 Telecom Privnote, вона буде видалена тільки після закінчення зазначеного часу.</p>
		<p>Після видалення нотатки з A1 Telecom Privnote її неможливо відновити.</p>
		<p>Команда системних адміністраторів A1 Telecom Privnote зробить все можливе, щоб захистити сайт від несанкціонованого доступу, модифікації чи знищення даних. Але навіть якщо комусь або чомусь вдасться отримати доступ до бази даних, вони не зможуть прочитати записки, оскільки їхній зміст зашифрований і не може бути розшифрований без посилань, яких команда системних адміністраторів A1 Telecom Privnote ніколи не мала.</p>
		<h2>3. Обробка IP-адрес</h2>
		<p>A1 Telecom Privnote не реєструє IP-адреси; вони обробляються задля забезпечення зв'язку з серверами A1 Telecom Privnote, але є частиною файлів журналу. IP-адреси видаляються, як тільки вони перестають бути необхідними реалізації зв'язку.</p>
		<h2>4. Псевдонімні дані</h2>
		<p>Особа, що створила записку, може внести в неї особисті дані. Навіть якщо ці дані зашифровані, вони можуть бути розшифровані знову і, таким чином, є псевдонімними (особистими) даними. У жодному разі, з бази даних A1 Telecom Privnote неможливо ідентифікувати автора записки, оскільки A1 Telecom Privnote не зберігає IP-адреси.</p>
		<p>Розшифровку даних записки можуть здійснювати лише користувачі (відправник та одержувач). A1 Telecom Privnote не може розшифрувати записку та отримати доступ до даних (особистих або інших), представлених особою, що створила записку, оскільки команда адміністраторів A1 Telecom Privnote ніколи не має ключа розшифровки, який міститься лише у посиланні.</p>
		<h2>5. Відмова від відповідальності</h2>
		<p>Якщо особа переходить за посиланням https://privnote.a1call.me/, A1 Telecom Privnote знімає з себе відповідальність за зміст записки.</p>
		<h2>6. Розголошення даних третім особам</h2>
		<p>A1 Telecom Privnote не передає та не продає жодної інформації іншим особам, а також не використовує її у будь-який спосіб, що не був згаданий у даній Політиці конфіденційності.</p>
		<h2>7. Використання файлів cookie</h2>
		<p>A1 Telecom Privnote використовує cookies (невеликі текстові файли, які зберігаються на вашому комп'ютері браузером під час відвідування веб-сайту) у наших власних інтересах для покращення використання нашого сайту та послуг. У деяких випадках вони також використовуються у рекламних цілях. Нижче наведено типи файлів cookie, які використовує A1 Telecom Privnote:</p>
		<i>Функціональні файли cookie</i>
		<p>A1 Telecom Privnote використовує постійні файли cookie для підтримки сесії мовою, якій надає перевагу користувач, та для запису вашого сповіщення про те, що A1 Telecom Privnote використовує файли cookie, як пояснюється в цьому розділі. Також деякі cookies використовуються як частина механізму приховування посилань під час читання записки, ці cookies повинні бути включені до роботи A1 Telecom Privnote і видаляються одразу після отримання записки.</p>
		<i>Нефункціональні файли cookie</i>
		<p>Використовуються в комерційних та рекламних цілях. Нефункціональні файли cookie розміщуються третіми особами. У разі громадян країн Європи ці файли cookie не зберігають особисті дані (неперсоналізована реклама).</p>
		<p>Якщо ви бажаєте видалити певні файли cookie або заблокувати їх збереження у вашому браузері, це можливо через налаштування браузера для файлів cookie. Однак якщо ви це зробите, сайт може працювати не так, як очікувалося.</p>
		<h2>8. Термін дії даної Політики приватності</h2>
		<p>Будь ласка, зверніть увагу, що ця Політика конфіденційності може час від часу змінюватись. Ми очікуємо, що більшість змін будуть незначними. Незалежно від цього, ми будемо публікувати будь-які зміни Політики на цій сторінці, а якщо зміни будуть значними, ми зробимо більш помітне сповіщення, наприклад, повідомлення на головній сторінці.</p>
	{:else if $locale == "en"}
		<h1>Privacy Policy</h1>
		<p>At A1 Telecom Privnote privacy is taken very seriously, since the main purpose of the site is to preserve it. This policy outlines the measures taken by A1 Telecom Privnote to protect the privacy of its users.</p>
		<h2>1. Service description</h2>
		<p>A1 Telecom Privnote is a free web based service that allows users to create encrypted notes that they can share over the internet as unique one-time-use HTTPS URLs (hereafter referred to as links) which by default expire after its first access via any web browser. However, the service also allows you to set parameters on the number of times a note can be accessed or when it is available.</p>
		<p>As A1 Telecom Privnote does not provide any means for transmitting the link, the act of sending the link is the full responsibility of A1 Telecom Privnote users.</p>
		<p>Depending on the communication channel of your choice (e.g., e-mail, fax, SMS, phone, instant messaging, social media), there may be a certain risk that third parties intercept your communication, get knowledge of the communicated link and thus may be able to read your note.</p>
		<h2>2. How the notes and its contents are processed</h2>
		<p>The link is generated in the user's browser and at no time is sent as such to A1 Telecom Privnote. The link is thus in the sender's (and later possibly in the recipient's) hands only. Therefore, there is no way to recover a note if a A1 Telecom Privnote user losses the link.</p>
		<p>Since only the link binds the decryption key to the note's content and since A1 Telecom Privnote does not have the link, at no time is any note held in any readable format state at A1 Telecom Privnote. This assures that nobody (including A1 Telecom Privnote's administrators) can read a note.</p>
		<p>When using A1 Telecom Privnote's default funtionality, when a note is retrieved, its data is completely removed from A1 Telecom Privnote; there is absolutely no way to recover it again.</p>
		<p>When "Show options" is selected and the user opts for a time interval for the note's removal, then independently of how many times the note is retrieved, the note will be deleted only after that specified time is completed.</p>
		<p>After a note is deleted from A1 Telecom Privnote, there is absolutely no way to recover it again.</p>
		<p>The A1 Telecom Privnote sysadmin team will do as much as possible to protect the site against unauthorized access, modification or destruction of the data. But, even if someone or something could manage to gain access to the database, they would be unable to read the notes since their contents are encrypted and can't be decrypted without the links which Privnote never has a hold of.</p>
		<h2>3. Processing of IP addresses</h2>
		<p>A1 Telecom Privnote is not logging the IP addresses; they are processed to enable communication with A1 Telecom Privnote's servers but they are not part of the log-files. IP addresses are deleted as soon as they are no longer needed for the purpose of communication.</p>
		<h2>4. Pseudonymous data</h2>
		<p>The creator of the note can introduce personal data into the note. Even though this data is encrypted, the data can be decrypted again and thus constitutes pseudonymous (personal) data. In any case, one cannot deduce the note's creator from A1 Telecom Privnote's database, as A1 Telecom Privnote does not store IP addresses.</p>
		<p>The decryption of the note's data is in the users' hands (sender and recipient). A1 Telecom Privnote is not able to decrypt the note and access the data (personal or otherwise) introduced by the creator since A1 Telecom Privnote is never in possession of the decryption key which is contained only in the link.</p>
		<h2>5. Disclaimer</h2>
		<p>When a person clicks https://privnote.a1call.me/ link, A1 Telecom Privnote declines any responsibility related to the note's content.</p>
		<h2>6. Disclosure of Data to Third Party</h2>
		<p>A1 Telecom Privnote  does not share nor sell any information to others, nor use it in any way not mentioned in this Privacy Policy.</p>
		<h2>7. Use of cookies</h2>
		<p>A1 Telecom Privnote  uses cookies (small text files that are stored on your computer by your browser when you visit a website) for our own interest in improving the use of our site and service. In some cases they will also be used for promotional purposes. The type of cookies A1 Telecom Privnote  uses are listed below:</p>
		<i>Functional cookies</i>
		<p>A1 Telecom Privnote  uses persistent cookies to keep a session in the user's preferred language and to record your notification that A1 Telecom Privnote  uses cookies as explained in this section. Also some cookies are used as part of the link hiding mechanism when reading a note, these cookies in particular must be enabled for A1 Telecom Privnote  to function and are deleted immediately after the note is retrieved.</p>
		<i>Non-functional cookies</i>
		<p>Used for commercial and promotional purposes. Non-functional cookies are placed by third parties. In case of European citizens, these cookies do not store personal data (non-personalized ads).</p>
		<p>If you would want to remove certain cookies, or block them from being stored in your browser, it is possible via your browser settings for cookies. However, if you do this, the site might not work as expected.</p>
		<h2>8. Validity of this Privacy Policy</h2>
		<p>Please note that this Privacy Policy may change from time to time. We expect most changes to be minor. Regardless, we will post any Policy changes on this page, and if the changes are significant, we will provide a more prominent notice such as a message on the home page.</p>
	{:else if $locale == "de"}
		<h1>Datenschutzbestimmungen</h1>
		<p>Bei A1 Telecom Privnote wird der Datenschutz sehr ernst genommen, da der Hauptzweck der Website darin besteht, ihn zu schützen. Diese Richtlinie beschreibt die Maßnahmen, die A1 Telecom Privnote ergreift, um die Privatheit ihrer Nutzer zu schützen.</p>
		<h2>1. Beschreibung des Services</h2>
		<p>A1 Telecom Privnote ist ein kostenloses webbasiertes Service, das es Nutzern ermöglicht, verschlüsselte Notizen zu erstellen, die sie über das Internet als einmalig verwendbare HTTPS-URLs (im Folgenden als Links bezeichnet) weitergeben können, die standardmäßig nach dem ersten Zugriff über einen beliebigen Webbrowser ablaufen. Das Service ermöglicht es Ihnen jedoch auch, Parameter für die Anzahl der Zugriffe auf eine Notiz oder die Zeit, in der sie verfügbar ist, festzulegen.</p>
		<p>Da A1 Telecom Privnote keine Mittel zur Übermittlung des Links zur Verfügung stellt, liegt der Vorgang des Übermittelns des Links in der vollen Verantwortung der A1 Telecom Privnote Nutzer.</p>
		<p>Je nach gewähltem Kommunikationskanal (z.B. E-Mail, Fax, SMS, Telefon, Instant Messaging, Social Media) besteht ein gewisses Risiko, dass Dritte Ihre Kommunikation abfangen, Kenntnis von dem übermittelten Link erlangen und somit Ihre Nachricht lesen können.</p>
		<h2>2. Wie die Notizen und ihr Inhalt verarbeitet werden</h2>
		<p>Der Link wird im Browser des Nutzers generiert und wird zu keinem Zeitpunkt als solcher an A1 Telecom Privnote gesendet wird. Der Link befindet sich somit nur in den Händen des Absenders (und später möglicherweise in jenen des Empfängers). Es gibt daher keine Möglichkeit, eine Notiz wiederherzustellen, wenn ein A1 Telecom Privnote Benutzer den Link verliert.</p>
		<p>Da nur der Link den Entschlüsselungsschlüssel an den Inhalt der Notiz bindet und A1 Telecom Privnote nicht über den Link verfügt, wird zu keinem Zeitpunkt eine Notiz in einem lesbaren Format bei A1 Telecom Privnote gehalten. Damit ist sichergestellt, dass niemand (auch nicht die Administratoren von A1 Telecom Privnote) eine Notiz lesen kann.</p>
		<p>Wenn Sie die Default-Funktion von A1 Telecom Privnote verwenden, werden die Daten beim Abrufen einer Notiz vollständig aus A1 Telecom Privnote entfernt; es gibt absolut keine Möglichkeit, sie wiederherzustellen.</p>
		<p>Wenn "Optionen anzeigen" ausgewählt ist und der Benutzer ein Zeitintervall für die Entfernung der Notiz angibt, wird die Notiz unabhängig davon, wie oft sie abgerufen wird, erst nach Ablauf der angegebenen Zeit gelöscht.</p>
		<p>Nachdem eine Notiz von A1 Telecom Privnote gelöscht wurde, gibt es keine Möglichkeit, sie wiederherzustellen.</p>
		<p>Das A1 Telecom Privnote Systemadministratorenteam wird so viel wie möglich tun, um die Seite vor unbefugtem Zugriff, Veränderung oder Zerstörung der Daten zu schützen. Aber selbst wenn es jemandem oder etwas gelingen sollte, sich Zugang zur Datenbank zu verschaffen, könnte er die Notizen nicht lesen, da ihr Inhalt verschlüsselt ist und ohne die Links, über die Privnote nie verfügt, nicht entschlüsselt werden kann.</p>
		<h2>3. Verarbeitung von IP Adressen</h2>
		<p>A1 Telecom Privnote loggt die IP-Adressen nicht; sie werden verarbeitet, um die Kommunikation mit den Servern von A1 Telecom Privnote zu ermöglichen, aber sie sind kein Teil der Logfiles. IP-Adressen werden gelöscht, sobald sie für den Zweck der Kommunikation nicht mehr benötigt werden.</p>
		<h2>4. Pseudonyme Daten</h2>
		<p>Der Ersteller der Notiz kann persönliche Daten in die Notiz einfügen. Auch wenn diese Daten verschlüsselt sind, können sie wieder entschlüsselt werden und stellen somit pseudonyme (persönliche) Daten dar. Aus der Datenbank von A1 Telecom Privnote kann jedenfalls nicht auf den Ersteller der Notiz geschlossen werden, da A1 Telecom Privnote keine IP-Adressen speichert.</p>
		<p>Die Entschlüsselung der Daten der Notiz liegt in den Händen der Benutzer (Absender und Empfänger). A1 Telecom Privnote ist nicht in der Lage, die Notiz zu entschlüsseln und auf die (persönlichen oder anderen) Daten zuzugreifen, die vom Verfasser eingegeben wurden, da A1 Telecom Privnote niemals im Besitz des Entschlüsselungsschlüssels ist, der nur im Link enthalten ist.</p>
		<h2>5. Haftungsausschluß</h2>
		<p>Wenn eine Person auf den Link https://privnote.a1call.me/ klickt, lehnt A1 Telecom Privnote jegliche Verantwortung in Bezug auf den Inhalt der Notiz ab.</p>
		<h2>6. Weitergabe der Daten an Dritte</h2>
		<p>A1 Telecom Privnote gibt keine Informationen an Dritte weiter, verkauft sie nicht und verwendet sie nicht auf jegliche Art und Weise, die nicht in dieser Datenschutzbestimmung erwähnt wird.</p>
		<h2>7. Verwendung von Cookies</h2>
		<p>A1 Telecom Privnote verwendet Cookies (kleine Textdateien, die von Ihrem Browser auf Ihrem Computer gespeichert werden, wenn Sie eine Website besuchen) in unserem eigenen Interesse, um die Nutzung unserer Website und unseres Services zu verbessern. In einigen Fällen werden sie auch für Werbezwecke verwendet. Die Art der Cookies, die A1 Telecom Privnote verwendet, ist unten aufgeführt:</p>
		<i>Funktionale cookies</i>
		<p>A1 Telecom Privnote verwendet dauerhafte Cookies, um eine Session in der bevorzugten Sprache des Benutzers aufrechtzuerhalten und um Ihre Mitteilung, dass A1 Telecom Privnote Cookies verwendet, wie in diesem Abschnitt erklärt, zu speichern. Außerdem werden einige Cookies als Teil des Link-Hiding-Mechanismus beim Lesen einer Notiz verwendet. Diese Cookies müssen aktiviert sein, damit A1 Telecom Privnote funktioniert, und werden sofort nach dem Abrufen der Notiz gelöscht.</p>
		<i>Nicht-funktionale Cookies</i>
		<p>Sie werden zu kommerziellen und Werbezwecken verwendet. Nicht-funktionale Cookies werden von Dritten platziert. Im Falle von europäischen Bürgern, speichern diese Cookies keine persönlichen Daten (nicht personalisierte Anzeigen).</p>
		<p>Wenn Sie bestimmte Cookies entfernen oder deren Speicherung in Ihrem Browser blockieren möchten, können Sie dies über Ihre Browsereinstellungen für Cookies tun. Wenn Sie dies tun, funktioniert die Website jedoch möglicherweise nicht wie erwartet.</p>
		<h2>8. Gültigkeit der Datenschutzbestimmungen</h2>
		<p>Bitte beachten Sie, dass sich diese Datenschutzbestimmungen von Zeit zu Zeit ändern können. Wir gehen davon aus, dass die meisten Änderungen geringfügig sind. Unabhängig davon werden wir alle Änderungen auf dieser Seite bekannt geben, und wenn es sich um wesentliche Änderungen handelt, werden wir einen deutlicheren Hinweis, z. B. auf der Startseite, geben.</p>
	{/if}
</div>

<style>

</style>