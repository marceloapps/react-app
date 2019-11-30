# TweetsAPI

Projeto desenvolvido em .netCore 3.0 com react para consumir os dados da [API](https://github.com/marceloapps/twitter-api) e carregar no browser.

## Inicialização

Clonar o repositório ReactApp para a máquina local, e abrir com o Visual Studio 2019 (ou VS Code).
Navegar até a pasta \ReactApp\ClientApp e executar:
* npm install
* npm audit fix (caso sejam encontradas vulnerabilidades)
* npm start (para startar o web server)

### Pré requisitos

* [VS 2019](https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&rel=16)
* [SDK do dot.net core 3.0](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.0.101-windows-x64-installer)
* [Node.JS](https://nodejs.org/download/release/v12.13.1/node-v12.13.1-x64.msi)

### Instalação

Com o projeto aberto, usar a opção "publish" do Visual Studio.
Se na máquina houver o .net core runtime, pode selecionar a opção "framework dependent". Caso contrário, selecionar "autosuficient".
Caso deseje, copie os arquivos gerados na pasta \bin\Release\netcoreapp2.2\publish a um local definitivo.

* Abra o IIS (tecla windows+R e digitar inetmgr).
* Clique com o botão direito em "Pool de aplicativos" e selecione "Adicionar Pool de Aplicativos". Na tela que se abrir, de o nome de "DotNetCoreApp", selecione "Sem código gerenciado" na opção "Versão .Net CLR" e clique em OK
* Adicione novo site com o nome de ReactApp, selecione o pool de aplicativos que foi criado e coloque na porta 3002. Feito isso, clique OK

## Execução

No navegador, testar as seguintes urls:
* http://localhost:3002/

## Feito com

* [.NetCore 3.0](https://docs.microsoft.com/pt-br/dotnet/core/about) - Framework utilizado

## Versão

v1.0.0

## Autor

* **Marcelo Arakaki** - [marceloapps](https://github.com/marceloapps)
