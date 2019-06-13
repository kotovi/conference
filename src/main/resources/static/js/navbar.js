
var app2;
var navbarApi = Vue.resource('/nav');
var role = "ADMIN";
Vue.component('nav-row' , {
    props: ['nav'],

    template:
    '<div class="container">'+
        '<nav class="navbar  navbar-expand-md navbar-dark bg-dark fixed-top">'+
                '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
                    '<span class="navbar-toggler-icon"></span>'+
                '</button>'+
                '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
                    '<ul class="navbar-nav mr-auto">'+
                        '<li class="nav-item active">'+
                            '<a class="nav-link" href="/">Главная <span class="sr-only">(current)</span></a>'+
                        '</li>'+
                        '<li v-if="nav.userRole > 0" class="nav-item active">'+
                            '<a class="nav-link" href="/tezis">Мои Заявки <span class="sr-only">(current)</span></a>'+
                        '</li>'+

                        '<li v-if="nav.userRole  > 2" class="nav-item active">'+
                            '<a class="nav-link" href="/desk">Секции<span class="sr-only">(current)</span></a>'+
                        '</li>'+
                        '<li v-if="nav.userRole > 1" class="nav-item active">'+
                            '<a class="nav-link" href="/tickets">Новые заявки<span class="sr-only">(current)</span></a>'+
                        '</li>'+
                        '<li v-if="nav.userRole > 1" class="nav-item active">'+
                            '<a class="nav-link" href="/agreeticket">Одобренные заявки<span class="sr-only">(current)</span></a>'+
                        '</li>'+
                        '<li v-if="nav.userRole > 1" class="nav-item active">'+
                            '<a class="nav-link" href="/rejectedticket">Отвергнутые заявки<span class="sr-only">(current)</span></a>'+
                        '</li>'+
                    '</ul>'+

        '<a v-if="nav.firstname!=null" class="btn btn-outline-light" href="/logout">Вы вошли как: {{nav.firstname}} {{nav.secname}} {{nav.lastname}} | Выйти</a>'+
        '<a v-if="nav.firstname==null" class="btn btn-outline-light" href="/login">Войти</a>'+
                '</div>'+

        '</nav>'+
    '</div>'
});
app2 = new Vue({
    el: '#app-nav',
    template:
        '<div>'+
        '<nav-row :nav="nav" />'+
        '</div>',
    data: {
        nav:'',
        userId:'',
        userGroup:'',
    },

    created: function () {
        navbarApi.get().then(result =>
            result.json().then(data =>
                ( this.nav = data,
                    window.userId = data.id,
                 window.userGroup = data.userGroup))

        )


    },
});