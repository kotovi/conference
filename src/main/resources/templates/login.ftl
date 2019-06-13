<#import "parts/common.ftl" as c>

<@c.page>
    <div style="background: #fff;" class="container">

        <div class="row" style="margin:70px">
            <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <form action="login" method="post">
                    <fieldset>
                        <h1 class="display-4 mt-5 mb-5" style="padding-top:40px;"> Вход в систему</h1>
                        <#if Session?? && Session.SPRING_SECURITY_LAST_EXCEPTION??>
                            <div class="alert alert-danger" role="alert">
                                Не верный логин или пароль!
                            </div>
                        </#if>

                        <div class="form-group">
                            <label for="firstname">Логин:</label>
                            <input type="text" name="username" id="username" class="form-control input-lg"
                                   placeholder="Имя пользователя" required="true" autofocus="true"/>
                        </div>
                        <div class="form-group">
                            <label for="firstname">Пароль:</label>
                            <input type="password" name="password" id="password" class="form-control input-lg"
                                   placeholder="Пароль" required="true"/>
                        </div>

                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <input type="submit" class="btn btn-outline-light" style="background: #293f50; margin: 2px;" value="Войти"/>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

    </div>
</@c.page>
<#import "parts/footer.ftl" as f>
<@f.page></@f.page>