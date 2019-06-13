

Vue.component('greeting-row' , {

    template:
    <!-- Header -->
    '<div style="background: #fff;">'+
    '<header class="py-5 mb-5" style="background: #293f50;">'+
        '<div class="container h-100">'+
            '<div class="row h-100 align-items-center">'+
                '<div class="col-lg-12">'+
                    '<h1 class="display-4 text-white mt-5 mb-2">IV Всероссийская научно-практическая конференция с международным участием</h1>'+
                    '<h1 class="display-6 text-white-50">«Современные проблемы профессионального образования: опыт и пути решения»</h1>'+
                    '<h3 class="display-6 text-white-50">1 – 4 октября 2019 года</h3>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '</header>'+

        '<div class="container h-100 " >'+
            '<div class="col-md-12 mb-5" >'+
                '<p>Приглашаем Вас принять участие в работе Четвертой всероссийской научно-практической конференции с международным участием «Современные проблемы профессионального образования: опыт и пути решения», которая проводится под эгидой Правительства Иркутской области и Совета ректоров Иркутской области. </p>'+
                '<p>В 2019 году работа конференции приурочена к 100-летию Иркутского государственного медицинского университета.</p>'+
                '<p>Дата и место проведения: 1–4 октября 2019 года в городе Иркутске на базе Иркутского государственного медицинского университета и других вузов города Иркутска.</p>'+
                '<a class="btn btn-outline-light" style="background: #293f50;" href="/registration">Принять участие&raquo;</a>'+
            '</div>'+

        '</div>'+

        '<div class="container" style="background: #fff;">'+


'<h3 class="display-4 mt-5 mb-2">Секции конференции</h3>'+
'<hr>'+
'<div class="row">'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;">Секция 1 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Тенденции, перспективы, инновации в развитии высшего образования в России </h4>'+
                '<div v-show="$root.sectionInfo1">'+
                    '<p class="card-text">- проблемы внедрения профессиональных стандартов в системе высшего образования;</p>'+
                    '<p class="card-text">- система оценки качества образовательных программ научно-педагогическими работниками, работодателями и обучающимися;</p>'+
                    '<p class="card-text">- опыт оценки качества подготовки специалистов (в том числе опыт независимой оценки качества, профессионально-общественной аккредитации);</p>'+
                    '<p class="card-text">- инновационные процессы в высшем образовании;</p>'+
                    '<p class="card-text">- проблемы реализации инклюзивного образования.</p>'+
                '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                '<a><input v-show="$root.sectionInfo1==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" v-on:click="$root.sectionInfo1=true" /></a>'+
                '<a><input v-show="$root.sectionInfo1" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" v-on:click="$root.sectionInfo1=false" /></a>'+
            '</div>'+

        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;">Секция 2 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Актуальные вопросы методики преподавания учебных дисциплин</h4>'+
                    '<div v-show="$root.sectionInfo2">'+
                        '<p class="card-text">- современные подходы и опыт разработки учебно-методического обеспечения дисциплин;</p>'+
                        '<p class="card-text">- использование современных образовательных технологий как средство повышения качества обучения (метод проектов, проблемное обучение, вопросы активизации познавательной деятельности обучающихся, технологии портфолио, кейс-стади, вопросы оптимального построения лекционных курсов и организации практических занятий);</p>'+
                        '<p class="card-text">- опыт разработки и реализации образовательных программ подготовки магистров и аспирантов;</p>'+
                        '<p class="card-text">- научно-исследовательские темы по педагогике высшей школы, проводимые вузами Российской Федерации.</p>'+
                    '</div>'+
                '</div>'+
                '<div class="card-footer text-muted">'+
                    '<a><input v-show="$root.sectionInfo2==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" v-on:click="$root.sectionInfo2=true"/></a>'+
                    '<a><input v-show="$root.sectionInfo2" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" v-on:click="$root.sectionInfo2=false"/></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;">Секция 3 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Современные информационные технологии в образовательном процессе </h4>'+
                    '<div v-show="$root.sectionInfo3">'+
                        '<p class="card-text">- модернизация образовательного процесса на основе информационных технологий обучения;</p>'+
                        '<p class="card-text">- реализация электронного обучения и дистанционных образовательных технологий;</p>'+
                        '<p class="card-text">- развитие электронной информационно-образовательной среды.</p>'+
                    '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                    '<a><input v-show="$root.sectionInfo3==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" @click="$root.sectionInfo3=true"/></a>'+
                    '<a><input v-show="$root.sectionInfo3" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" @click="$root.sectionInfo3=false" /></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'+

'<div class="row">'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;">Секция 4 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Организация образовательной деятельности при реализации федеральных государственных образовательных стандартов высшего образования</h4>'+
                '<div v-show="$root.sectionInfo4">'+
                    '<p class="card-text">- проблемы организации образовательной деятельности при реализации образовательных программ высшего образования;</p>'+
                    '<p class="card-text">- современные формы, методы и технологии организации самостоятельной работы обучающихся;</p>'+
                    '<p class="card-text">- фонды оценочных средств как основной инструмент контроля и оценки уровня сформированности компетенций обучающихся;</p>'+
                    '<p class="card-text">- оценка качества образовательных программ научно-педагогическими работниками, работодателями и обучающимися;</p>'+
                    '<p class="card-text">- инновационные процессы в высшем образовании.</p>'+
                '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                '<a><input v-show="$root.sectionInfo4==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" @click="$root.sectionInfo4=true"  /></a>'+
                '<a><input v-show="$root.sectionInfo4" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" @click="$root.sectionInfo4=false"  /></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;">Секция 5 </div>'+
                '<div class="card-body">'+
                '<h4 class="card-title">Преемственность образовательных программ по уровням образования при реализации ФГОС в контексте концепции непрерывного образования: школа – колледж – вуз</h4>'+
                    '<div v-show="$root.sectionInfo5">'+
                        '<p class="card-text">- компетентностный подход в методике обучения в контексте непрерывного образования;</p>'+
                        '<p class="card-text">- цифровизация образования: взгляды, вызовы и пути решения;</p>'+
                        '<p class="card-text">- современные подходы к формированию индивидуальных образовательных траектории;</p>'+
                        '<p class="card-text">- актуальные вопросы подготовки обучающихся к ГИА в форме ЕГЭ, ОГЭ, ГВЭ и иных действующих и перспективных форматах.</p>'+
                    '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                    '<a><input v-show="$root.sectionInfo5==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" @click="$root.sectionInfo5=true" /></a>'+
                    '<a><input v-show="$root.sectionInfo5" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" @click="$root.sectionInfo5=false"  /></a>'+
                '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;">Секция 6</div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Теория и практика воспитательной работы и психологического сопровождения образовательной деятельности в образовательной организации  </h4>'+
                '<div v-show="$root.sectionInfo6">'+
                    '<p class="card-text">- организация воспитательной работы в образовательной организации: особенности, формы, методы, инновации;</p>'+
                    '<p class="card-text">- опыт психологического сопровождения образовательной деятельности: формы и методы;</p>'+
                    '<p class="card-text">- проблемы и технологии мотивации учебно-познавательной деятельности;</p>'+
                    '<p class="card-text">- создание студенческих сообществ как форма воспитательной работы в образовательной организации;</p>'+
                    '<p class="card-text">- актуальные проблемы образования глазами студента.</p>'+
                '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                '<a><input v-show="$root.sectionInfo6==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" @click="$root.sectionInfo6=true"  /></a>'+
                '<a><input v-show="$root.sectionInfo6" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" @click="$root.sectionInfo6=false"  /></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'+
<!-- /.row -->
'<div class="row">'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;"> Секция 7 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Актуальные вопросы модернизации среднего профессионального образования</h4>'+
                    '<div v-show="$root.sectionInfo7">'+
                        '<p class="card-text">- опыт применения современных образовательных технологий, информационно-коммуникационных технологий в образовательном процессе;</p>'+
                        '<p class="card-text">- модернизация образовательных программ СПО в контексте профессиональных стандартов;</p>'+
                        '<p class="card-text">- эффективные формы и методы организации практической подготовки, а также самостоятельной работы студентов.</p>'+
                    '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                    '<a><input v-show="$root.sectionInfo7==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" @click="$root.sectionInfo7=true"  /></a>'+
                    '<a><input v-show="$root.sectionInfo7" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" @click="$root.sectionInfo7=false"  /></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #293f50;"> Секция 8 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Наука, образование, производство: взаимодействие в современном обществе</h4>'+
                    '<div v-show="$root.sectionInfo8">'+
                        '<p class="card-text">- интеграционные процессы в профессиональном образовании, создающие единое образовательное пространство в союзе с производством и наукой;</p>'+
                        '<p class="card-text">- содержание и формы социального партнерства в профессиональном образовании;</p>'+
                        '<p class="card-text">- правовое обеспечение интеграции науки, образования и производства;</p>'+
                        '<p class="card-text">- эффективное взаимодействие вузов с потенциальными работодателями и рынком труда;</p>'+
                        '<p class="card-text">- основные направления сотрудничества науки, образования и производства;</p>'+
                        '<p class="card-text">- создание и поддержка бизнес-инкубаторов, технопарков и других интегрированных научно-образовательных структур;</p>'+
                        '<p class="card-text">- развитие взаимовыгодного бизнес-партнерства высшей школы и производственной сферы;</p>'+
                        '<p class="card-text">- интеграция образования, науки и производства как основа управления качеством профессионального образования;</p>'+
                        '<p class="card-text">- новые организационные связи науки, образования и производства;</p>'+
                        '<p class="card-text">- подготовка инженерных кадров на основе взаимодействия науки, образования, производства.</p>'+
                    '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                    '<a><input v-show="$root.sectionInfo8==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" @click="$root.sectionInfo8=true"  /></a>'+
                    '<a><input v-show="$root.sectionInfo8" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" @click="$root.sectionInfo8=false"  /></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
            '<div class="text-white  card-header" style="background: #293f50;"> Секция 9 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Подготовка кадров высшей квалификации (аспирантура, ординатура). Организационно-методические вопросы повышения квалификации работников высшей школы</h4>'+
                '<div v-show="$root.sectionInfo9">'+
                    '<p class="card-text">- вопросы организации образовательного процесса по программам аспирантуры и ординатуры;</p>'+
                    '<p class="card-text">- современные подходы к организации повышения квалификации преподавателей высшей школы.</p>'+
                '</div>'+
        '</div>'+
        '<div class="card-footer text-muted">'+
                '<a><input v-show="$root.sectionInfo9==false" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Подробнее" @click="$root.sectionInfo9=true"  /></a>'+
                '<a><input v-show="$root.sectionInfo9" type = "button"  class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Скрыть" @click="$root.sectionInfo9=false"  /></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
        '</div>'+


'<h3 class="display-4 mt-5 mb-2">Круглые столы</h3>'+
'<hr>'+

'<div class="row">'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #293f50;"> Круглый стол 1 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Роль профессионального образования в кадровом обеспечении экономики региона</h4>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #293f50;"> Круглый стол 2 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Лучшие практики организации воспитательной работы среди студентов как ресурс профилактики идеологии терроризма и экстремизма</h4>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #293f50;"> Круглый стол 3 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Реализация процессов интернационализации в образовательных организациях региона</h4>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'+

'<div class="row">'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #293f50;"> Круглый стол 4 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Образовательный консорциум: цифровые технологии решений</h4>'+
            '</div>'+
        '</div>'+
        '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #293f50;"> Круглый стол 5 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Студенческий спорт и физическая культура в обеспечении здоровьесбережения в современном образовательном пространстве</h4>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-4 mb-5">'+
        '<div class="card h-100">'+
        '<div class="text-white  card-header" style="background: #293f50;"> Круглый стол 6 </div>'+
            '<div class="card-body">'+
                '<h4 class="card-title">Монголия</h4>'+
            '</div>'+
        '</div>'+
    '</div>'+

        '</div>'+
        '</div>'+
    <!-- Footer -->

    '</div>',

});
app2 = new Vue({
    el: '#app-greeting',
    template:
        '<div>'+
        '<greeting-row/>'+
        '</div>',
    data: {
        nav:'',
        userId:'',
        userGroup:'',
        sectionInfo1:false,
        sectionInfo2:false,
        sectionInfo3:false,
        sectionInfo4:false,
        sectionInfo5:false,
        sectionInfo6:false,
        sectionInfo7:false,
        sectionInfo8:false,
        sectionInfo9:false,

    },

    created: function () {


    },
});