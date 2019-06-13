<#macro page>
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>IV Всероссийская научно-практическая конференция с международным участием «Современные проблемы профессионального образования: опыт и пути решения»</title>
        <!-- <link rel="stylesheet" type="text/css" href="https://portal.geekbase.ru/css/bootstrap.min.css" /> -->
        <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css" />

        <link rel="stylesheet" type="text/css"  href="https://portal.geekbase.ru/css/main.css" />

        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
        <script src="https://unpkg.com/vuejs-datepicker"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,300,100&subset=cyrillic,latin">


        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>


        <script src="https://unpkg.com/@babel/polyfill@latest/dist/polyfill.min.js"></script>
        <script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>


        <link
                type="text/css"
                rel="stylesheet"
                href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"
        />
        <style>
            .loader {
                border: 3px solid #f3f3f3;
                border-radius: 50%;
                border-top: 3px solid #28a745;
                border-bottom: 3px solid #dc3545;
                width: 40px;
                height: 40px;
                -webkit-animation: spin 2s linear infinite;
                animation: spin 2s linear infinite;
            }

            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }


            .modal-mask {
                position: fixed;
                z-index: 9998;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .5);
                display: table;
                transition: opacity .4s ease;
            }

            .modal-wrapper {
                display: table-cell;
                vertical-align: middle;
            }

            .modal-container {
                width: 600px;
                margin: 0px auto;
                padding: 20px 30px;
                background-color: #fff;
                border-radius: 2px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
                transition: all .3s ease;
                font-family: 300 16px/22px "Roboto", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
            }

            .modal-header h3 {
                font-size: 48px;
                font-weight: 100;
                letter-spacing: .5px;
                line-height: 44px;
                text-transform: uppercase;
                color: #888;
                font: 300 16px/22px "Roboto", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
            }

            .modal-body {

            }

            .modal-default-button {
                float: right;
            }

            /*
             * The following styles are auto-applied to elements with
             * transition="modal" when their visibility is toggled
             * by Vue.js.
             *
             * You can easily play with the modal transition by editing
             * these styles.
             */

            .modal-enter {
                opacity: 0;
            }

            .modal-leave-active {
                opacity: 0;
            }

            .modal-enter .modal-container,
            .modal-leave-active .modal-container {
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }

            body {
                color: #888;
                font: 300 16px/22px "Roboto", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
            }
            .logo {
                border-top: 4px solid #648880;
                float: left;
                font-size: 48px;
                font-weight: 100;
                letter-spacing: .5px;
                line-height: 44px;
                padding: 40px 0 22px 0;
                text-transform: uppercase;
            }
            .hero p {
                font-size: 24px;
                font-weight: 100;
            }

        </style>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141012267-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-141012267-1');
        </script>

    </head>
    <body>
    <div>
        <div id="app-nav"></div>
        <script src="/js/navbar.js"></script>
    </div>


    <#nested>
    </body>
    </html>
</#macro>
