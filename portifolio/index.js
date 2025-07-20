let botaoC = document.getElementById('conhecimento');
let texto = document.getElementById('filosofia');
let nomeBotoes = ['Meus conhecimentos','Minha filosofia']
let frases = ['Em um mundo cada vez mais digital, o conhecimento em informática é uma habilidade valiosa, tanto para o desenvolvimento pessoal quanto profissional. A capacidade de utilizar computadores e seus recursos de forma eficaz não apenas facilita tarefas cotidianas, mas também amplia o acesso a informações, educação e oportunidades de interação social e econômica','HTML5: Estruturação semântica de páginas web com uso de tags apropriadas para melhorar a acessibilidade e SEO.CSS3: Estilização de layouts responsivos, utilizando Flexbox, Grid, animações e transições para criar designs fluidos e dinâmicos.JavaScript: Criação de interações e dinamismo na web com manipulação do DOM, eventos, validação de formulários e chamadas assíncronas (AJAX).Design Responsivo: Implementação de técnicas mobile-first para garantir que as interfaces se adaptem perfeitamente a diferentes tamanhos de tela e dispositivos.Frameworks e Bibliotecas: Experiência com o Bootstrap para desenvolvimento rápido e escalável, e com jQuery para otimização de interações e manipulação DOM.Controle de Versionamento: Familiaridade com Git para versionamento de código e colaboração em equipe.Boas práticas de performance: Otimização de imagens, carregamento assíncrono de recursos e técnicas de minificação para melhorar a performance das páginas.']
let i = 0;


botaoC.addEventListener('click', () =>{

    if(i+1 === frases.length){
        i = 0
    }else{
        i = i+1;
    }

    texto.textContent=frases[i];
    botaoC.textContent=nomeBotoes[i]

});

