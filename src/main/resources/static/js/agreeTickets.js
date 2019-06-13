var tezisApi = Vue.resource('/agreeTickets{/id}');

Vue.component('tezis-row' , {
    props: ['tezis','teziss'],
    template:
        '<tr>'+
            '<div v-if="tezis.tezisStatus==1" class="card mx-auto" style="margin: 25px;">'+
                '<h5 v-if="tezis.tezisType==1" class="card-header text-white bg-success" >#{{this.teziss.indexOf(this.tezis)+1}} Тезис</h5>'+
                '<h5 v-if="tezis.tezisType==2" class="card-header text-white bg-success" >#{{this.teziss.indexOf(this.tezis)+1}} Доклад</h5>'+
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
                        '<li class="list-group-item"><b>Дата рассмотрения заявки:</b> {{tezis.tezisChangeStatusDate}}</li>'+
                    '</ul>'+
                    '<div class="card-body">'+
                        '<a><input type = "button"  class="btn btn-danger" value="Отклонить" @click="reject" style="margin: 10px;" /></a>'+
                    '</div>'+
            '</div>'+
        '</tr>',
    methods: {
        reject: function(){
            alert(this.tezis.tezisStatus);
            this.tezis.tezisStatus=2;
            tezisApi.update({id: this.tezis.id}, this.tezis).then(result =>{
                if (result.ok) { this.teziss.splice(this.teziss.indexOf(this.tezis), 1) }
        })
        }
    }
});

Vue.component('teziss-list', {
    props: ['teziss'],
    data: function(){
        return {
            tezis: null
        }
    },

    template:
        ' <div style="position: relative;">'+
        '<h1>Одобренные заяуви для участия в конференции</h1>'+
        '<tezis-row v-for="tezis in teziss" :key="tezis.id" :tezis = "tezis" ' +
        ':teziss="teziss"/>' +
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
        axios.get('/agreeTickets').then(result => {
            this.teziss=result.data
        });
    },
});
