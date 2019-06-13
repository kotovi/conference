var tezisApi = Vue.resource('/ticket{/id}');


Vue.component('tezis-row' , {
    props: ['tezis','teziss'],
    template:
        '<tr style="padding-top: 20px;" >'+
            '<div class="card">'+
                '<h5 v-if="tezis.tezisType==1" class="text-white  card-header" style="background: #293f50;" >#{{this.teziss.indexOf(this.tezis)+1}} Тезис</h5>'+
                '<h5 v-if="tezis.tezisType==2" class="text-white  card-header" style="background: #293f50;" >#{{this.teziss.indexOf(this.tezis)+1}} Доклад</h5>'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">{{tezis.tezisName}}</h5>'+
                        '<p class="card-text">{{tezis.tezisAnnotation}}</p>'+
                    '</div>'+
                    '<ul class="list-group list-group-flush">'+
                        '<li class="list-group-item"><b>Автор:</b> {{tezis.user.firstname}} {{tezis.user.secname}} {{tezis.user.lastname}}</li>'+
                        '<li class="list-group-item"><b>Ученая степень, ученое звание, должность:</b> {{tezis.user.degree}}</li>'+
                        '<li class="list-group-item"><b>Организация:</b> {{tezis.user.organization}}</li>'+
                        '<li class="list-group-item"><b>Адресс рганизации:</b> {{tezis.user.organizationPostAddress}}</li>'+
                        '<li class="list-group-item"><b>Электронная почта:</b> {{tezis.user.userEmail}}</li>'+
                        '<li class="list-group-item"><b>Телефон:</b> {{tezis.user.phoneNumber}}</li>'+
                        '<li class="list-group-item"><b>Дата подачи заявки:</b> {{tezis.tezisAddDate}}</li>'+
                    '</ul>'+
                    '<div class="card-body">'+
                        '<a> <input type = "button" class="btn btn-outline-light" style="background: #293f50; margin: 20px;" value="Одобрить" @click="agree" /><input type = "button"  class="btn btn-danger" style="margin: 20px;" value="Отклонить" @click="reject" /></a>'+
                    '</div>'+

            '</div>'+
        '</tr>',
    methods: {
        agree: function(){
             this.tezis.tezisStatus=1;
            tezisApi.update({id: this.tezis.id}, this.tezis).then(result =>{
                if (result.ok) { this.teziss.splice(this.teziss.indexOf(this.tezis), 1) }
                    })
        },
        reject: function(){
            this.tezis.tezisStatus=2;
            tezisApi.update({id: this.tezis.id}, this.tezis).then(result =>{
                    if (result.ok) { this.teziss.splice(this.teziss.indexOf(this.tezis), 1) }
            })
        }
    }

});

Vue.component('teziss-list', {
    props: ['teziss', 'moderators', 'desks'],
    data: function(){
        return {
            tezis: null

        }
    },

    template:
        '<div style="background: #fff;">'+
        '<h1 class="display-4 mt-5 mb-5" style="padding-top:40px;">Новые заявки для участия в конференции</h1>'+
        '<div v-if="teziss.length < 1" class="alert"  role="alert" style="margin: 170px; background: #293f50;"><h5 class="text-white" >Новых заявок нет!</h1></div>'+
        '<tezis-row v-for="tezis in teziss" :key="tezis.id" :tezis = "tezis" ' +
        ':editMethod="editMethod" :teziss="teziss"/>' +
        '</tbody>' +
        '</table>' +
        '</div>',

});

var app;

app = new Vue({
    el: '#app',
    template:
        '<div>'+
        '<teziss-list :teziss="teziss"/> ' +
        '</div>',
    data: {
        teziss:[],
    },

    created: function () {

        axios.get('/ticket').then(result => {
            this.teziss=result.data
        });

    },
});
