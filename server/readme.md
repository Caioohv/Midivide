- Middlewares
    - Aqui irão validações de permissões e similares
    - arquivo.mw.js
- Routes
    - Declaração de rotas do aplicativo, incluindo middlewares nelas
    - arquivo.js
- Utils
    - Arquivos com funções úteis, como formatação de erro, manipulação de arrays e similares
    - arquivo.util.js
- Controllers
    - Arquivos que fazem o intermédio entre business e o app e as rotas
    - arquivo.ctrl.js
- Business
    - Arquivos que contém as **regras de negócio** (lógica) do sis
    - arquivo.bs.js
- Config
    - Arquivos que contenham informações sobre o projeto (urls, senhas de banco de dados, etc.) e configurações gerais.
    - arquivo.cfg.js
- Repository
    - Arquivos que acessem banco de dados, consumam APIs, etc.
        - arquivo.rep.js
        - Mutators
        - Usar mutators para mudar nomes de variáveis e similares
        - arquivo.mtt.js


        '*.js', '*.rep.js', '*.bs.js', '*.mw.js', '*.util.js', '*.ctrl.js', '*.cfg.js', '*.mtt.js'