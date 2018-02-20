app.service('NotificacoesService', function ($mdToast) {

    var NotificacoesService = this;

    this.mandarNotificacao = function (mensagem, classe) {
        $mdToast.show(
            $mdToast
                .simple()
                .textContent(mensagem)
                .position('top right')
                .action('FECHAR')
                .highlightAction(true)
                .hideDelay(5000)
                .toastClass(classe)
        );
    };

    this.notificacaoSucesso = function (mensagem) {
        NotificacoesService.mandarNotificacao(mensagem, 'success');
    };

    this.notificacaoErro = function (mensagem) {
        NotificacoesService.mandarNotificacao(mensagem, 'error');
    };

    this.notificacaoInfor = function (mensagem) {
        NotificacoesService.mandarNotificacao(mensagem, 'infor');
    };
});