# 🪪 Gerador de Crachá Online

O **Gerador de Crachá Online** é uma aplicação web simples, moderna e totalmente responsiva que permite criar identificadores numéricos únicos (crachás) para funcionários a partir do seu nome completo. Os dados são guardados localmente no navegador, garantindo que as informações não se percam ao atualizar a página.

---

## ✨ Funcionalidades

* **Geração de ID Único:** Utiliza a API nativa `crypto.randomUUID()` para gerar um identificador aleatório e seguro de 12 caracteres para cada crachá.
* **Persistência de Dados:** Integração com o `LocalStorage` para salvar a lista de funcionários localmente.
* **Remoção de Itens:** É possível excluir crachás individualmente da lista com atualização em tempo real.
* **Design Totalmente Responsivo:** Interface otimizada para computadores, tablets e smartphones (com empilhamento de componentes e fontes fluidas).
* **Experiência Mobile Aprimorada:** Tratamento do efeito "hover fantasma" em telas de toque e feedback visual instantâneo ao clicar.
* **Acessibilidade (a11y):** Inclusão de atributos `aria-label` e `title` nos botões de exclusão para compatibilidade com leitores de ecrã e usabilidade de ponteiro.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do projeto.
* **CSS3:** Estilização moderna com gradientes, animações de *fade-in* e Media Queries para responsividade.
* **JavaScript (ES6+):** Manipulação dinâmica do DOM, tratamento de eventos e persistência com LocalStorage.
* **Google Fonts:** Utilização da fonte *Poppins* para um visual limpo e profissional.

---

## 📦 Como Rodar o Projeto Localmente

Não é necessário instalar nenhuma dependência para rodar este projeto, pois ele utiliza JavaScript puro (Vanilla JS).

1.  **Clona o repositório:**
    ```bash
    git clone [https://github.com/Daniel-assis97/Gerador-de-id.git](https://github.com/Daniel-assis97/Gerador-de-id.git)
    ```
2.  **Navega até a pasta do projeto:**
    ```bash
    cd Gerador-de-id
    ```
3.  **Abre o projeto:**
    * Basta dar um duplo clique no arquivo `index.html` para abri-lo diretamente no teu navegador, ou
    * Abre a pasta no **VS Code** e utiliza a extensão **Live Server** para rodar um servidor local.
