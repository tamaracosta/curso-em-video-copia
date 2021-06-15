function passarMensagens(x) {

    if (x == 1) {

        document.querySelector("#foto1").src = "img/unnamed-circle.jpg";
        document.querySelector("#nome").innerHTML = "Alexandre Domingues";
        document.querySelector("#depoimento").innerHTML = '"Parabéns a equipe do curso em video, vcs são a referência em aprender programação no Brasil."';

    } else if (x == 2) {

        document.querySelector("#foto1").src = "img/unnamed-1-circle.jpg";
        document.querySelector("#nome").innerHTML = "Angelo Coelho";
        document.querySelector("#depoimento").innerHTML = '"Começo a entender que grandes empresas ou grandes metas se constroem aos poucos ao decorrer dos anos. Vejo quanta qualidade e quanta dedicação foi aumentando no CursoemVideo. Todos teus alunos lembrarão do Senhor Guanabara! Gracias!"';

    } else if (x == 3) {

        document.querySelector("#foto1").src = "img/unnamed-2-circle.jpg";
        document.querySelector("#nome").innerHTML = "Francisco Sergio";
        document.querySelector("#depoimento").innerHTML = '"Parabéns professor, vc e sua equipe fazem um trabalho maravilhoso e de ótima qualidade. Patrocínio merecido. Espero que outras empresas siga o exemplo do youtube e da Hostnet e patrocinem o canal cada vez mais. Foi através do seu canal que me apaixonei pela programação. Obrigado por tudo!"';

    }

}


