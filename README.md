# Discord Bot - Javascript

###### 💁‍ Simples bot feito em `JavaScript (Node.js)` feito por: @DeepXS na lib [Discord.JS](https://discord.js.org/#/docs)

# Como posso criar meu bot?? 🤔🤔

###### 💁‍ Você deverá entrar nesse site [Discord Developer's](https://discordapp.com/developers/applications/), E fazer o `LOGIN` em sua conta no `Discord`. Após entrar no `Discord Developer's` Para criar uma Aplicação (Bot), clique em `Create an aplication` è em seguida, coloque o Nome/Foto do Bot. <h6> Após isso, você devera ir na aba `BOT` ao lado clicar em `Add bot`. Para que sua Aplicação seja criada como um bot.
  
  
  Você pode alterar as opções do bot acessando o arquivo: `config.json`
  
  PARÂMETRO | RESULTADO
------------ | -------------
TOKEN | Token de seu bot
PREFIX | Prefixo desejado para o bot
DONO | Você colocará seu id

# Como consigo o token do bot?

Você deverá ir na aba **bot** ao lado e clicar em `Click to Reveal Token` ao lado da foto.<h6>⚠**AVISO:** Não divulgue seu **token** à nenhuma pessoa, ele é usado para o **login** na conta do bot, ou seja, poderão fazer **tudo** que quiserem no bot, caso isso ocorra você pode **trocar** o token clicando no botão `Regenerate` abaixo do token.

# Como adquiro meu id?

Você deverá ir nas **configurações** de seu **discord**, depois acessar a aba **aparencia** e ativar o **Modo desenvolvedor**, após isso feche as configurações, **clique** com o botão **direito** do mouse em você na lista de **usuários** do servidor ou em algum **chat** e clique **Copiar ID**.

# Como iniciar o bot?

Primeiramente, você precisará **baixar** o __[node.js](https://nodejs.org/)__ `versão recomendada`, após instalado, reinicie seu computador e depois abra seu visual studio code, dê `ctrl + "`, e no terminal você digitará isso `node .`. caso ele não inicie, verique o que há de errado. se não mostrar o erro, tente constatar alguem no https://stackoverflow.com/, ou algum profissional em Discord.js.
para iniciar seu bot, crie um arquivo chamado `.env`, coloque nele esse script `TOKEN=TOKEN DO SEU BOT`. na index, você colocara assim `client.login(process.env.TOKEN)` p/ iniciar seu bot.

# Como adiciono meu bot ao servidor?

💬 Você pode adquirir o convite acessando **[Discord Permissions Calculator](https://discordapi.com/permissions.html#2146958591)**, configure as permissões desejadas, coloque o `client id` de seu bot abaixo e acesse o link dado pelo site.

# Como troco o jogando do bot?

Acesse o arquivo `Client.js ( Como exemplo no repositório q criei aki ,_, )` e procure por **var jogando = `${client.user.username} - ${client.guilds.size} servidores`**, basta alterar a mensagem escrita depois do `=`.

# Como criar novos comandos?

👾 Você apenas precisa criar um arquivo na pasta comandos: `NomeDoComando.js`, dentro deste arquivo você colocará o código do comando,  para editar o arquivo, recomendo usar [Visual Studio Code](https://code.visualstudio.com/).
