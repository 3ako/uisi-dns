<template>
<div class="theory">
 <el-backtop :right="100" :bottom="100" />
  <el-card class="box-card" shadow="Never">
    <template #header>
      <div class="card-header">
        <h2>Domain Name System</h2>
         <router-link to='/'><el-button type="info"><el-icon><ArrowLeftBold /></el-icon>Вернуться в меню</el-button></router-link>
      </div>
    </template>
    <el-collapse>
      <el-collapse-item v-for = 'item in data' :title="item.title" :name="item.title">
        <div v-html="item.html">

        </div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</div>

</template>
<script lang="ts" setup>
const data = [{
    title: 'Что такое DNS?',
    html: '<img width = "400" src="/src/assets/dns.gif"></img><br>>DNS (Domain Name System) – система доменных имен – это одно из основных понятий современного интернета. DNS – служит для распределенного хранения записей о доменных зонах. Система DNS – соотносит буквенные названия интернет ресурсов их ip адресам.DNS использует распределенную базу для имен интернет ресурсов. Структура такое базы данных очень похожа на дерево и называется пространством имен домена. У каждого отдельного узла в этом пространстве существует свое уникальное имя. Корнем — этого дерева является корневой домен, который и будет наивысшим уровнем иерархии DNS, этот уровень обозначается точкой. Далее от корневого домена ответвляются остальные зоны доменов или компьютеры сети.Само же пространство имен доменов в зоне DNS, имеет два вида организации плоское или иерархическое. В первом варианте имя узла задается каждому адресу нестрого по шаблону и последовательностью символов, которая не имеет четкое структуры. У такого варианта есть ключевой недостаток – такой вариант нельзя использовать в больших системах из-за хаотичности из-за сложности проверки на дублирование. Во втором варианте – иерархическом, каждое имя состоит из определенных частей, например: зона ru или dataenginer.ru. В таком случае максимально просто отследить дубли имен по иерархии и распределить доменные зоны.'
},{
    title: 'Сопоставление имен DNS',
    html: 'Как же сопоставляется имя сайта и ip адрес. Допустим вы набираете в строке адреса Dataenginer.ru и нажимаете клавишу Enter. Браузер отправляет запрос DNS серверу сети (как правило на начальном уровне это роутер), сервер либо находит запись о таком имени и отвечает сам или передает запрос на DNS сервер более высокого уровня. Таким образом запрос начинает свое странствие сначала до корневого сервера DNS, затем сервера зоны RU, затем сервера dataenginer и так далее, пока не будет найдено запрашиваемое имя, после чего запрос начнет путешествие в обратную сторону. Кто управляет и поддерживает DNS-сервера? Когда в строке браузера, где указывается адрес вы набираете адрес нужного вам ресурса, он сначала отправляет запрос на DNS – сервер корневой зоны. Всего таких серверов 13. Управляют такими DNS – сервера различные операторы и организации, в том числе один сервер DNS обслуживает и НАСА. Каждый оператор, который администрирует ресурсы и сервера DNS, предоставляет доступ к услуге доменных имен бесплатно, а также отвечает за безотказную работу, ведь нарушение работы одного или нескольких из DNS-серверов приведет к недоступности целого сегмента интернета. Ранее основные сервера DNS располагались в Северной Америке, но с появлением технологии альтернативной адресации, сервера были размещены по всей планете, что привело к их росту с 13 до 123.'
},{
    title: 'Защита от атак',
    html: 'Хакеры уже давно используют атаки на DNS – сервера, для нарушения работы интернет – ресурсов. В прошлом из – за атак на DNS – сервера уже пострадали такие интернет гиганты как Twitter, который на протяжении нескольких часов был недоступен для множества пользователей. Самая же крупная атака произошла в 2002 году, когда атаки подверглось сразу 10 из 13 корневых серверов. Протокол DNS поддерживает TCP, но в основном в своей работе использует протокол UDP, который имеет ряд уязвимостей. В основном это уязвимости связанные с подменой адресов. В настоящее время, чтобы невелировать данные уязвимости используется целый комплекс методик для предотвращения поддмены ip-адреса. Одним из самых актуальных методов является uRPF, данный метод проверяет может ли сетевой интерфейс принять пакет. Чтобы пройти проверки uRPF, необходимо, чтобы пакет был отправлен с сетевого интерфейса, который используется для общения с отправителем пакета. Иначе пакет не принимается. Звучит страшно и сложно? На самом же деле, если сказать несколько проще: uRPF поддерживает общение только через один и тот же интерфейс. К сожалению данная функция, не может сто процентов обеспечить сто процентную фильтрацию поддельного трафика. В современном мире так же активно используется технология IP Source Guard. В основе данного метода лежит URPF. Данный метод отслеживает траффик на отдельных портах коммутаторов и определяет какие сетевые адреса были назначены определенным в сети устройствам. Вся информация собирается и хранится в таблице, а позже данная таблица используется для фильтрации трафика. Если пакет приходит с IP которого нет в таблице то пакет отклоняется.'
},{
    title: 'Проблемы с безопасностью',
    html: 'Первоначально проблемы безопасности не были основными соображениями при разработке программного обеспечения DNS или любого программного обеспечения для развёртывания в раннем Интернете, поскольку сеть не была открыта для широкой общественности. Однако рост Интернета в коммерческом секторе в 1990-х годах изменил требования к мерам безопасности для защиты целостности данных и аутентификации пользователей. Несколько уязвимостей были обнаружены и использованы злоумышленниками. Одной из таких проблем является отравление кэша DNS, в котором данные распространяются на кэширующие преобразователи под предлогом того, что они являются авторитетным сервером происхождения, тем самым загрязняя хранилище данных потенциально ложной информацией и длительными сроками действия (время жизни). Впоследствии, запросы легитимных приложений могут быть перенаправлены на сетевые хосты, контролируемые злоумышленником. DNS-ответы ранее не имели криптографической подписи, что давало возможность для множества вариантов атаки. Современные расширения системы безопасности доменных имен (DNSSEC) изменяют DNS, чтобы добавить поддержку криптографически подписанных ответов. Другие расширения, такие как TSIG, добавляют поддержку криптографической аутентификации между доверенными одноранговыми узлами и обычно используются для авторизации передачи зоны или операций динамического обновления. Некоторые доменные имена могут использоваться для достижения эффектов спуфинга. Например, paypal.com и paypa1.com — это разные имена, но пользователи могут не различать их в графическом пользовательском интерфейсе в зависимости от выбранного шрифта пользователя. Во многих шрифтах буква l и цифра 1 выглядят очень похожими или даже идентичными. Эта проблема остро стоит в системах, которые поддерживают интернационализированные доменные имена, поскольку многие коды символов в ISO 10646 могут отображаться на типичных экранах компьютеров. Эта уязвимость иногда используется в фишинге.'
},{
    title: 'Типы записей DNS-сервера',
    html: '<ul><li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">А — IP-адрес веб-ресурса, который соответствует определённому имени домена,</span></li><li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">MX — адрес почтового сервера,</span></li><li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">CNAME — указывает аналог основному доменному имени. Эта запись чаще всего используется для прикрепления поддомена,&nbsp;</span></li><li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">NS — адрес DNS-сервера, где хранятся все ресурсные записи,</span></li><li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">TXT — любая текстовая информация о домене,</span></li><li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">SPF — список серверов, которым позволено отправлять письма от имени указанного домена,</span></li><li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">SOA — исходная запись зоны, в которой указаны сведения о сервере.&nbsp;</span></li></ul>'
}]
</script>

<style scoped>
.theory {
    width: 1000px;
    max-width: 100%;
    margin: auto;
}
a:-webkit-any-link  {
    text-decoration: none !important;
}
</style>